import useStore from "../../store";
import { Match, PryFormula, PryInput } from "../../types";
import { functionMap } from "../functions";

export const searchMatches = (filterValue: string) => {
  const { inputs, formulas, availableFunctions } = useStore.getState();
  const matches: Match[] = [];

  const filterFn = (item: { name: string }) =>
    item.name.toLocaleUpperCase().includes(filterValue.toLocaleUpperCase());

  matches.push(...inputs.filter(filterFn));
  matches.push(...formulas.filter(filterFn));
  matches.push(...availableFunctions.filter(filterFn));

  return matches;
};

export function evaluateExpression(expression: string,inputs:PryInput[],formulas:PryFormula[]) {
  // Replace function names
  for (const [name, _func] of Object.entries(functionMap)) {
    const regex = new RegExp(`\\b${name}\\b`, "g");
    expression = expression.replace(regex, `functionMap.${name}`);
  }

  // Replace input placeholders with their values
  for (const input of inputs) {
    const regex = new RegExp(`\\b${input.name.toLocaleUpperCase()}\\b`, "g");
    expression = expression.replace(regex, input.value.toString());
  }

  // Replace formula placeholders with their expressions
  for (const formula of formulas) {
    const regex = new RegExp(`\\b${formula.name.toLocaleUpperCase()}\\b`, "g");
    expression = expression.replace(regex, `(${formula.result})`);
  }

  // Evaluate the expression
  return new Function("functionMap", `return ${expression}`)(functionMap);
}

export const formatDateNowToMonthYear = (date:Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};