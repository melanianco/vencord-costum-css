import { useState, useCallback } from "react";
import { DiscordPreview } from "@/components/DiscordPreview";
import { ContextMenu } from "@/components/ContextMenu";
import { CustomizationPanel } from "@/components/CustomizationPanel";
import { CSSExportPanel } from "@/components/CSSExportPanel";
import { CSSProperty } from "@/types/customization";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [selectedSelector, setSelectedSelector] = useState<string>("");
  const [showCustomizationPanel, setShowCustomizationPanel] = useState(false);
  const [cssProperties, setCssProperties] = useState<CSSProperty[]>([]);
  const [appliedStyles, setAppliedStyles] = useState<Map<string, string>>(new Map());

  const getUniqueSelector = (element: HTMLElement): string => {
    // Try to build a unique selector
    if (element.id) {
      return `#${element.id}`;
    }

    const className = Array.from(element.classList)
      .filter(cls => cls && !cls.startsWith('hover'))
      .join('.');
    
    if (className) {
      const tagWithClass = `${element.tagName.toLowerCase()}.${className}`;
      return tagWithClass;
    }

    // Fallback to tag name with nth-child
    const parent = element.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children);
      const index = siblings.indexOf(element) + 1;
      return `${element.tagName.toLowerCase()}:nth-child(${index})`;
    }

    return element.tagName.toLowerCase();
  };

  const handleElementRightClick = useCallback((element: HTMLElement, x: number, y: number) => {
    setSelectedElement(element);
    setSelectedSelector(getUniqueSelector(element));
    setContextMenu({ x, y });
  }, []);

  const handleContextMenuClose = () => {
    setContextMenu(null);
  };

  const handleCustomize = () => {
    setShowCustomizationPanel(true);
  };

  const handleSaveCustomization = (properties: CSSProperty[]) => {
    setCssProperties(prev => [...prev, ...properties]);
    
    // Update applied styles
    const newAppliedStyles = new Map(appliedStyles);
    
    properties.forEach(prop => {
      const existingStyles = newAppliedStyles.get(prop.selector) || '';
      const newStyle = `${prop.property}: ${prop.value};`;
      
      if (existingStyles) {
        newAppliedStyles.set(prop.selector, `${existingStyles} ${newStyle}`);
      } else {
        newAppliedStyles.set(prop.selector, newStyle);
      }
    });
    
    setAppliedStyles(newAppliedStyles);
    setShowCustomizationPanel(false);
  };

  const generateCSSCode = (): string => {
    const stylesBySelector = new Map<string, string[]>();

    cssProperties.forEach(prop => {
      const existing = stylesBySelector.get(prop.selector) || [];
      existing.push(`  ${prop.property}: ${prop.value};`);
      stylesBySelector.set(prop.selector, existing);
    });

    let cssCode = '/* Vencord Quick CSS - Generated Custom Styles */\n\n';
    
    stylesBySelector.forEach((styles, selector) => {
      cssCode += `${selector} {\n${styles.join('\n')}\n}\n\n`;
    });

    return cssCode;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-discord-tertiary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Vencord CSS Editor</h1>
                <p className="text-sm text-muted-foreground">
                  Right-click any element to customize your Discord
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
          {/* Discord Preview */}
          <div className="h-full">
            <DiscordPreview
              onElementRightClick={handleElementRightClick}
              appliedStyles={appliedStyles}
            />
          </div>

          {/* CSS Export Panel */}
          <div className="h-full">
            <CSSExportPanel cssCode={generateCSSCode()} />
          </div>
        </div>
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
    </div>
  );
};

export default Index;
