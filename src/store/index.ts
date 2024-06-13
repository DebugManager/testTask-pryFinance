import { create } from "zustand";
import { PryInput, PryFormula, PryFunctions } from "../types";
import {
  FormulasPlaceholder,
  InputsPlaceholder,
} from "../constants/placeholders";
import { AvailableFunctions } from "../constants";
import { evaluateExpression } from "../services/utils";

interface StoreState {
  inputs: PryInput[];
  formulas: PryFormula[];
  availableFunctions: PryFunctions[];

  setInputs: (inputs: PryInput[]) => void;
  setFormulas: (formulas: PryFormula[]) => void;
  setAvailableFunctions: (availableFunctions: PryFunctions[]) => void;
  addFormula: (name: string, value: string) => void;
  addInput: (name: string, value: string) => void;
}

const useStore = create<StoreState>((set, get) => ({
  inputs: InputsPlaceholder,
  formulas: FormulasPlaceholder,
  availableFunctions: AvailableFunctions,

  setInputs: (inputs: PryInput[]) => set({ inputs }),
  setFormulas: (formulas: PryFormula[]) => set({ formulas }),
  setAvailableFunctions: (availableFunctions: PryFunctions[]) =>
    set({ availableFunctions }),

  addFormula(name: string, value: string) {
    const { inputs, formulas } = get();
    let result = evaluateExpression(value, inputs, formulas);

    if (!result) {
      result = "#ERROR";
    }

    const newFormula: PryFormula = {
      id: formulas.length + 1,
      name,
      value,
      result,
      type: "formula",
      createdAt: new Date(),
    };

    const updatedFormulas = [...formulas, newFormula];
    set({ formulas: updatedFormulas });
  },
  addInput: (name: string, value: string) => {
    const { inputs } = get();
    const newInput: PryInput = {
      id: inputs.length + 1,
      name,
      value,
      category: "number",
      type: "pryInput",
    };
    const updatedInputs = [...inputs, newInput];
    set({ inputs: updatedInputs });
  },
}));

export default useStore;
