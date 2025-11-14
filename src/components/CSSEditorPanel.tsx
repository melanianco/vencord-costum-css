import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Code2 } from "lucide-react";

interface CSSEditorPanelProps {
  cssCode: string;
  onClose: () => void;
}

export const CSSEditorPanel = ({ cssCode, onClose }: CSSEditorPanelProps) => {
  return (
    <div className="fixed inset-y-4 right-4 w-[500px] bg-[#2b2d31] border border-[#1e1f22] rounded-lg shadow-2xl z-50 flex flex-col animate-slide-in-right">
      <div className="flex items-center justify-between p-4 border-b border-[#1e1f22]">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[#5865f2]" />
          <h3 className="font-semibold text-[#f2f3f5]">Generated CSS Code</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-[#b5bac1] hover:text-[#f2f3f5] hover:bg-[#35363c]">
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <pre className="text-sm text-[#dbdee1] bg-[#1e1f22] p-4 rounded-md overflow-x-auto font-mono">
          <code>{cssCode || '/* No customizations yet.\n\nRight-click any element in the Discord UI to start customizing!\n\n• Click on messages\n• Click on sidebars\n• Click on buttons\n• Click on any UI element\n\nAll your changes will appear here as valid CSS code. */'}</code>
        </pre>
      </div>
    </div>
  );
};
