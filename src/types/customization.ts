export interface CSSProperty {
  property: string;
  value: string;
  selector: string;
}

export interface CustomizationState {
  properties: CSSProperty[];
  selectedElement: HTMLElement | null;
  elementSelector: string;
}

export interface ContextMenuPosition {
  x: number;
  y: number;
}
