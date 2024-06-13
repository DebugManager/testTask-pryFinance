import { PryFormula, PryInput } from "../../types";

export const InputsPlaceholder: PryInput[] = [
  {
    id: 1,
    name: "Employees",
    category: "number",
    value: 25,
    type: "pryInput",
  },
  {
    id: 2,
    name: "SalaryForEachEmployee",
    category: "currency",
    value: 400,
    type: "pryInput",
  },
  {
    id: 3,
    name: "Tax",
    category: "percentage",
    value: 0.05,
    type: "pryInput",
  },
  {
    id: 4,
    name: "StartDate",
    category: "date",
    value: "2024-05-12",
    type: "pryInput",
  },
  {
    id: 5,
    name: "EndDate",
    category: "date",
    value: "2024-06-12",
    type: "pryInput",
  },
];

export const FormulasPlaceholder: PryFormula[] = [
  {
    id: 1,
    name: "Count Salaries",
    value: "Employees * SalaryForEachEmployee",
    type: "formula",
    result: 10000,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Count Pure Income",
    value: "400 - PERCENTAGE(400,5)",
    type: "formula",
    result: 380,
    createdAt: new Date(),
  },
];
