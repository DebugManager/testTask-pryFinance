export function ROUND(number: number) {
  return Math.round(number);
}

export function ROUNDUP(value: number, decimals = 0) {
  const factor = Math.pow(10, decimals);
  return Math.ceil(value * factor) / factor;
}

export function ROUNDDOWN(value: number, decimals = 0) {
  const factor = Math.pow(10, decimals);
  return Math.floor(value * factor) / factor;
}
export function IF(condition: any, trueResult: any, falseResult: any) {
  return condition ? trueResult : falseResult;
}
export function SUM(...args: number[]) {
  return args.reduce((total, num) => total + num, 0);
}

export function AVERAGE(...args: number[]) {
  return args.length ? SUM(...args) / args.length : 0;
}

export function MIN(...args: number[]) {
  return Math.min(...args);
}

export function MAX(...args: number[]) {
  return Math.max(...args);
}

export function MEDIAN(...args: number[]) {
  if (args.length === 0) return 0;
  const sortedArgs = args.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedArgs.length / 2);

  if (sortedArgs.length % 2 === 0) {
    return (sortedArgs[mid - 1] + sortedArgs[mid]) / 2;
  } else {
    return sortedArgs[mid];
  }
}

export function PERCENTAGE(value: number, percentage: number) {
  return value * (percentage / 100);
}

export const functionMap = {
  ROUND,
  ROUNDUP,
  ROUNDDOWN,
  IF,
  SUM,
  AVERAGE,
  MIN,
  MAX,
  MEDIAN,
  PERCENTAGE
};
