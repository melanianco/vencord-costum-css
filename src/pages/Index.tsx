import { useState, useCallback, useRef, useEffect } from "react";
import { ServerSidebar } from "@/components/discord/ServerSidebar";
import { ChannelSidebar } from "@/components/discord/ChannelSidebar";
import { ChatArea } from "@/components/discord/ChatArea";
import { MembersSidebar } from "@/components/discord/MembersSidebar";
import { ContextMenu } from "@/components/ContextMenu";
import { CustomizationPanel } from "@/components/CustomizationPanel";
import { EditorToolbar } from "@/components/EditorToolbar";
import { CSSEditorPanel } from "@/components/CSSEditorPanel";
import { CSSProperty } from "@/types/customization";
import { toast } from "sonner";

const Index = () => {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [selectedSelector, setSelectedSelector] = useState<string>("");
  const [showCustomizationPanel, setShowCustomizationPanel] = useState(false);
  const [cssProperties, setCssProperties] = useState<CSSProperty[]>([]);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [showCSSEditor, setShowCSSEditor] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getUniqueSelector = (element: HTMLElement): string => {
    // Try to build a unique selector
    if (element.id) {
      return `#${element.id}`;
    }

    const className = Array.from(element.classList)
      .filter(cls => cls && !cls.startsWith('hover') && !cls.startsWith('group'))
      .join('.');
    
    if (className) {
      return `.${className}`;
    }

    // Fallback to tag name
    return element.tagName.toLowerCase();
  };

  const handleContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    
    if (target && target !== document.body && target !== document.documentElement) {
      setSelectedElement(target);
      setSelectedSelector(getUniqueSelector(target));
      setContextMenu({ x: e.clientX, y: e.clientY });
    }
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target && target !== document.body && target !== document.documentElement) {
      setHoveredElement(target);
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    setHoveredElement(null);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('contextmenu', handleContextMenu);
    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);

    return () => {
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleContextMenu, handleMouseOver, handleMouseOut]);

  useEffect(() => {
    if (hoveredElement) {
      hoveredElement.style.outline = '2px solid #5865f2';
      hoveredElement.style.outlineOffset = '2px';
      hoveredElement.style.cursor = 'pointer';
      
      return () => {
        hoveredElement.style.outline = '';
        hoveredElement.style.outlineOffset = '';
        hoveredElement.style.cursor = '';
      };
    }
  }, [hoveredElement]);

  const handleContextMenuClose = () => {
    setContextMenu(null);
  };

  const handleCustomize = () => {
    setShowCustomizationPanel(true);
    toast.info("Customize the selected element in the panel");
  };

  const handleSaveCustomization = (properties: CSSProperty[]) => {
    // Update CSS properties state
    setCssProperties(prev => {
      // Remove old properties for the same selector
      const filtered = prev.filter(p => p.selector !== selectedSelector);
      return [...filtered, ...properties];
    });
    
    // Apply styles with !important by injecting a style tag
    if (selectedElement && properties.length > 0) {
      const styleId = 'custom-discord-styles';
      let styleTag = document.getElementById(styleId) as HTMLStyleElement;
      
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
      }
      
      // Rebuild all styles
      const allProps = [...cssProperties.filter(p => p.selector !== selectedSelector), ...properties];
      const stylesBySelector = new Map<string, string[]>();
      
      allProps.forEach(prop => {
        const existing = stylesBySelector.get(prop.selector) || [];
        existing.push(`  ${prop.property}: ${prop.value} !important;`);
        stylesBySelector.set(prop.selector, existing);
      });
      
      let cssText = '';
      stylesBySelector.forEach((styles, selector) => {
        cssText += `${selector} {\n${styles.join('\n')}\n}\n\n`;
      });
      
      styleTag.textContent = cssText;
    }
    
    setShowCustomizationPanel(false);
    toast.success("Styles applied! Open CSS panel to export your code.");
  };

  const generateCSSCode = (): string => {
    if (cssProperties.length === 0) {
      return '';
    }

    const stylesBySelector = new Map<string, string[]>();

    cssProperties.forEach(prop => {
      const existing = stylesBySelector.get(prop.selector) || [];
      existing.push(`  ${prop.property}: ${prop.value};`);
      stylesBySelector.set(prop.selector, existing);
    });

    let cssCode = '/**\n * Vencord Quick CSS - Custom Discord Theme\n * Generated with Vencord CSS Editor\n * \n * Instructions:\n * 1. Copy this CSS code\n * 2. Open Discord with Vencord\n * 3. Go to Settings → Vencord → Themes → Quick CSS\n * 4. Paste this code\n * 5. Enjoy your custom theme!\n */\n\n';
    
    stylesBySelector.forEach((styles, selector) => {
      cssCode += `${selector} {\n${styles.join('\n')}\n}\n\n`;
    });

    return cssCode.trim();
  };

  return (
    <div className="h-screen flex overflow-hidden bg-[#313338]">
      <div 
        ref={containerRef}
        className="flex-1 flex overflow-hidden"
        style={{ userSelect: 'none' }}
      >
        <ServerSidebar />
        <ChannelSidebar />
        <ChatArea />
        <MembersSidebar />
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={handleContextMenuClose}
          onCustomize={handleCustomize}
        />
      )}

      {/* Customization Panel */}
      {showCustomizationPanel && (
        <CustomizationPanel
          element={selectedElement}
          selector={selectedSelector}
          onSave={handleSaveCustomization}
          onClose={() => setShowCustomizationPanel(false)}
        />
      )}

      {/* Editor Toolbar */}
      <EditorToolbar 
        cssCode={generateCSSCode()}
        onToggleEditor={() => setShowCSSEditor(!showCSSEditor)}
        editorVisible={showCSSEditor}
      />

      {/* CSS Editor Panel */}
      {showCSSEditor && (
        <CSSEditorPanel 
          cssCode={generateCSSCode()}
          onClose={() => setShowCSSEditor(false)}
        />
      )}
    </div>
  );
};

export default Index;
