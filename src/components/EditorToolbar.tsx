import { Button } from "@/components/ui/button";
import { Download, Copy, Code2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface EditorToolbarProps {
  cssCode: string;
  onToggleEditor: () => void;
  editorVisible: boolean;
}

export const EditorToolbar = ({ cssCode, onToggleEditor, editorVisible }: EditorToolbarProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    toast.success("CSS code copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([cssCode], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vencord-quickcss.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("CSS file downloaded!");
  };

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-[#2b2d31] border border-[#1e1f22] rounded-lg p-2 shadow-lg z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleEditor}
        className="text-[#f2f3f5] hover:bg-[#35363c]"
      >
        {editorVisible ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
        {editorVisible ? 'Hide' : 'Show'} CSS
      </Button>
      <div className="w-[1px] h-6 bg-[#3f4147]"></div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className="text-[#f2f3f5] hover:bg-[#35363c]"
      >
        <Copy className="w-4 h-4 mr-2" />
        Copy
      </Button>
      <Button
        size="sm"
        onClick={handleDownload}
        className="bg-[#5865f2] hover:bg-[#4752c4] text-white"
      >
        <Download className="w-4 h-4 mr-2" />
        Download CSS
      </Button>
    </div>
  );
};
