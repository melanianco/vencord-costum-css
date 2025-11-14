import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Copy, Code2 } from "lucide-react";
import { toast } from "sonner";

interface CSSExportPanelProps {
  cssCode: string;
}

export const CSSExportPanel = ({ cssCode }: CSSExportPanelProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    toast.success("CSS code copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([cssCode], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'discord-custom.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("CSS file downloaded!");
  };

  return (
    <Card className="w-full h-full bg-card border-border overflow-hidden flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border bg-discord-tertiary">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Generated CSS</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="border-border hover:bg-discord-secondary"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
          <Button
            size="sm"
            onClick={handleDownload}
            className="bg-primary hover:bg-discord-hover"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <pre className="text-sm text-foreground bg-discord-tertiary p-4 rounded-md overflow-x-auto">
          <code>{cssCode || '/* No customizations yet. Right-click elements to start editing! */'}</code>
        </pre>
      </div>
    </Card>
  );
};
