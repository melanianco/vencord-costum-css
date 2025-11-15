import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Palette, Type, Box } from "lucide-react";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onCustomize: (tab?: string) => void;
}

export const ContextMenu = ({ x, y, onClose, onCustomize }: ContextMenuProps) => {
  const handleOption = (tab?: string) => {
    onCustomize(tab);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <Card
        className="fixed z-50 min-w-[200px] bg-card border-border shadow-lg animate-scale-in"
        style={{ left: x, top: y }}
      >
        <div className="p-2 space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-discord-secondary"
            onClick={() => handleOption('colors')}
          >
            <Edit className="w-4 h-4" />
            Customize Element
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-discord-secondary"
            onClick={() => handleOption('colors')}
          >
            <Palette className="w-4 h-4" />
            Change Colors
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-discord-secondary"
            onClick={() => handleOption('typography')}
          >
            <Type className="w-4 h-4" />
            Edit Typography
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 hover:bg-discord-secondary"
            onClick={() => handleOption('spacing')}
          >
            <Box className="w-4 h-4" />
            Modify Spacing
          </Button>
        </div>
      </Card>
    </>
  );
};
