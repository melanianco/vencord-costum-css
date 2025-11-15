import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Save } from "lucide-react";
import { CSSProperty } from "@/types/customization";

interface CustomizationPanelProps {
  element: HTMLElement | null;
  selector: string;
  onSave: (properties: CSSProperty[]) => void;
  onClose: () => void;
  initialTab?: string;
}

// Helper function to convert rgb/rgba to hex
const rgbToHex = (rgb: string): string => {
  const result = rgb.match(/\d+/g);
  if (!result) return '#000000';
  const [r, g, b] = result.map(Number);
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

export const CustomizationPanel = ({ element, selector, onSave, onClose, initialTab = 'colors' }: CustomizationPanelProps) => {
  // Initialize state with actual computed styles
  const getComputedStyles = () => {
    if (!element) return {
      colors: { background: '#000000', color: '#ffffff', borderColor: '#000000', opacity: '1' },
      typography: { fontSize: '', fontWeight: '', fontFamily: '', lineHeight: '' },
      spacing: { padding: '', margin: '' },
      borders: { borderWidth: '', borderRadius: '', borderStyle: 'solid' }
    };

    const computed = window.getComputedStyle(element);
    
    return {
      colors: {
        background: computed.backgroundColor.startsWith('rgb') 
          ? rgbToHex(computed.backgroundColor) 
          : computed.backgroundColor || '#000000',
        color: computed.color.startsWith('rgb') 
          ? rgbToHex(computed.color) 
          : computed.color || '#ffffff',
        borderColor: computed.borderColor.startsWith('rgb') 
          ? rgbToHex(computed.borderColor) 
          : computed.borderColor || '#000000',
        opacity: computed.opacity || '1',
      },
      typography: {
        fontSize: computed.fontSize || '',
        fontWeight: computed.fontWeight || '',
        fontFamily: computed.fontFamily || '',
        lineHeight: computed.lineHeight || '',
      },
      spacing: {
        padding: computed.padding || '',
        margin: computed.margin || '',
      },
      borders: {
        borderWidth: computed.borderWidth || '',
        borderRadius: computed.borderRadius || '',
        borderStyle: computed.borderStyle || 'solid',
      }
    };
  };

  const initialStyles = getComputedStyles();
  
  const [colors, setColors] = useState(initialStyles.colors);

  const [typography, setTypography] = useState(initialStyles.typography);
  const [spacing, setSpacing] = useState(initialStyles.spacing);
  const [borders, setBorders] = useState(initialStyles.borders);

  const handleSave = () => {
    const properties: CSSProperty[] = [];

    // Add color properties
    Object.entries(colors).forEach(([key, value]) => {
      if (value && key !== 'opacity') {
        properties.push({
          property: key === 'background' ? 'background-color' : key === 'color' ? 'color' : 'border-color',
          value,
          selector,
        });
      }
    });

    // Add opacity if set
    if (colors.opacity && colors.opacity !== '1') {
      properties.push({
        property: 'opacity',
        value: colors.opacity,
        selector,
      });
    }

    // Add typography properties
    Object.entries(typography).forEach(([key, value]) => {
      if (value) {
        properties.push({
          property: key.replace(/([A-Z])/g, '-$1').toLowerCase(),
          value,
          selector,
        });
      }
    });

    // Add spacing properties
    Object.entries(spacing).forEach(([key, value]) => {
      if (value) {
        properties.push({
          property: key,
          value,
          selector,
        });
      }
    });

    // Add border properties
    Object.entries(borders).forEach(([key, value]) => {
      if (value) {
        properties.push({
          property: key.replace(/([A-Z])/g, '-$1').toLowerCase(),
          value,
          selector,
        });
      }
    });

    onSave(properties);
  };

  if (!element) return null;

  return (
    <Card className="fixed right-4 top-4 bottom-4 w-96 bg-card border-border shadow-lg overflow-hidden flex flex-col z-50 animate-slide-in-right">
      <div className="flex items-center justify-between p-4 border-b border-border bg-discord-tertiary">
        <h3 className="font-semibold text-foreground">Customize Element</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4 p-3 bg-discord-secondary rounded-md">
          <p className="text-xs text-muted-foreground mb-1">Selected Element</p>
          <code className="text-sm text-primary break-all">{selector}</code>
          {element && (
            <p className="text-xs text-muted-foreground mt-2">
              {element.tagName.toLowerCase()}
              {element.textContent && element.textContent.length < 30 && (
                <span className="ml-1">- "{element.textContent.trim()}"</span>
              )}
            </p>
          )}
        </div>

        <Tabs defaultValue={initialTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-discord-secondary">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Text</TabsTrigger>
            <TabsTrigger value="spacing">Space</TabsTrigger>
            <TabsTrigger value="borders">Border</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="opacity">Opacity / Transparency</Label>
              <div className="flex gap-2 items-center">
                <Input
                  id="opacity"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={colors.opacity}
                  onChange={(e) => setColors({ ...colors, opacity: e.target.value })}
                  className="flex-1"
                />
                <Input
                  type="number"
                  min="0"
                  max="1"
                  step="0.01"
                  value={colors.opacity}
                  onChange={(e) => setColors({ ...colors, opacity: e.target.value })}
                  className="w-20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="background">Background Color</Label>
              <div className="flex gap-2">
                <Input
                  id="background"
                  type="color"
                  value={colors.background}
                  onChange={(e) => setColors({ ...colors, background: e.target.value })}
                  className="w-16 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.background}
                  onChange={(e) => setColors({ ...colors, background: e.target.value })}
                  placeholder="#000000"
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Text Color</Label>
              <div className="flex gap-2">
                <Input
                  id="color"
                  type="color"
                  value={colors.color}
                  onChange={(e) => setColors({ ...colors, color: e.target.value })}
                  className="w-16 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.color}
                  onChange={(e) => setColors({ ...colors, color: e.target.value })}
                  placeholder="#ffffff"
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="borderColor">Border Color</Label>
              <div className="flex gap-2">
                <Input
                  id="borderColor"
                  type="color"
                  value={colors.borderColor}
                  onChange={(e) => setColors({ ...colors, borderColor: e.target.value })}
                  className="w-16 h-10 cursor-pointer"
                />
                <Input
                  type="text"
                  value={colors.borderColor}
                  onChange={(e) => setColors({ ...colors, borderColor: e.target.value })}
                  placeholder="#cccccc"
                  className="flex-1"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="fontSize">Font Size</Label>
              <Input
                id="fontSize"
                value={typography.fontSize}
                onChange={(e) => setTypography({ ...typography, fontSize: e.target.value })}
                placeholder="16px"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fontWeight">Font Weight</Label>
              <Input
                id="fontWeight"
                value={typography.fontWeight}
                onChange={(e) => setTypography({ ...typography, fontWeight: e.target.value })}
                placeholder="400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fontFamily">Font Family</Label>
              <Input
                id="fontFamily"
                value={typography.fontFamily}
                onChange={(e) => setTypography({ ...typography, fontFamily: e.target.value })}
                placeholder="Inter, sans-serif"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lineHeight">Line Height</Label>
              <Input
                id="lineHeight"
                value={typography.lineHeight}
                onChange={(e) => setTypography({ ...typography, lineHeight: e.target.value })}
                placeholder="1.5"
              />
            </div>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="padding">Padding</Label>
              <Input
                id="padding"
                value={spacing.padding}
                onChange={(e) => setSpacing({ ...spacing, padding: e.target.value })}
                placeholder="10px"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="margin">Margin</Label>
              <Input
                id="margin"
                value={spacing.margin}
                onChange={(e) => setSpacing({ ...spacing, margin: e.target.value })}
                placeholder="10px"
              />
            </div>
          </TabsContent>

          <TabsContent value="borders" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="borderWidth">Border Width</Label>
              <Input
                id="borderWidth"
                value={borders.borderWidth}
                onChange={(e) => setBorders({ ...borders, borderWidth: e.target.value })}
                placeholder="1px"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Input
                id="borderRadius"
                value={borders.borderRadius}
                onChange={(e) => setBorders({ ...borders, borderRadius: e.target.value })}
                placeholder="4px"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="borderStyle">Border Style</Label>
              <Input
                id="borderStyle"
                value={borders.borderStyle}
                onChange={(e) => setBorders({ ...borders, borderStyle: e.target.value })}
                placeholder="solid"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4 border-t border-border bg-discord-tertiary">
        <Button onClick={handleSave} className="w-full bg-primary hover:bg-discord-hover">
          <Save className="w-4 h-4 mr-2" />
          Apply Changes
        </Button>
      </div>
    </Card>
  );
};
