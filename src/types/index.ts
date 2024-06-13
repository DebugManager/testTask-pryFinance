export type EntityType = "func" | "formula" | "pryInput";

export interface PryInput {
  id: number;
  name: string;
  category: "currency" | "number" | "percentage" | "date";
  value: number | string | 0;
  type: EntityType;
}

export interface PryFormula {
  id: number;
  name: string;
  value: string;
  type: EntityType;
  result:  string | number
  createdAt: Date
}

export interface PryFunctions {
  id: number;
  name: string;
  type: EntityType;
  value: (...args: any[]) => any;
}

export interface Match {
  id: number;
  name: string;
  type: EntityType;
}

export interface HandleClick {
  onClick: () => void;
}