import { functionMap } from "../services/functions";
import { PryFunctions } from "../types";

export const AvailableFunctions: PryFunctions[] = [
  { id: 1, type: "func", name: "ROUND", value: functionMap.ROUND },
  { id: 2, type: "func", name: "ROUNDUP", value: functionMap.ROUNDUP },
  { id: 3, type: "func", name: "ROUNDDOWN", value: functionMap.ROUNDDOWN },
  { id: 4, type: "func", name: "IF", value: functionMap.IF },
  { id: 5, type: "func", name: "SUM", value: functionMap.SUM },
  { id: 6, type: "func", name: "AVERAGE", value: functionMap.AVERAGE },
  { id: 7, type: "func", name: "MIN", value: functionMap.MIN },
  { id: 8, type: "func", name: "MAX", value: functionMap.MAX },
  { id: 9, type: "func", name: "MEDIAN", value: functionMap.MEDIAN },
  { id: 10, type: "func", name: "PERCENTAGE", value: functionMap.PERCENTAGE },
];


export const availableCategories = ["currency", "number", "percentage", "date"];
