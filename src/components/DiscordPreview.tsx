import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface DiscordPreviewProps {
  onElementRightClick: (element: HTMLElement, x: number, y: number) => void;
  appliedStyles: Map<string, string>;
}

export const DiscordPreview = ({ onElementRightClick, appliedStyles }: DiscordPreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      // Apply custom styles
      const styleElement = iframeDoc.createElement('style');
      styleElement.id = 'custom-styles';
      
      let cssText = '';
      appliedStyles.forEach((value, selector) => {
        cssText += `${selector} { ${value} }\n`;
      });
      
      styleElement.textContent = cssText;
      
      // Remove old style element if exists
      const oldStyle = iframeDoc.getElementById('custom-styles');
      if (oldStyle) oldStyle.remove();
      
      iframeDoc.head.appendChild(styleElement);

      // Add context menu handler
      iframeDoc.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        if (target && target !== iframeDoc.body && target !== iframeDoc.documentElement) {
          const rect = iframe.getBoundingClientRect();
          onElementRightClick(target, e.clientX + rect.left, e.clientY + rect.top);
        }
      });

      // Add hover effect
      const hoverStyle = iframeDoc.createElement('style');
      hoverStyle.textContent = `
        *:hover {
          outline: 2px solid hsl(235 86% 65%) !important;
          outline-offset: 2px;
          cursor: pointer !important;
        }
      `;
      iframeDoc.head.appendChild(hoverStyle);
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [onElementRightClick, appliedStyles]);

  return (
    <Card className="w-full h-full overflow-hidden border-border bg-card">
      <iframe
        ref={iframeRef}
        src="/discord-ui.html"
        className="w-full h-full border-0"
        title="Discord UI Preview"
      />
    </Card>
  );
};
