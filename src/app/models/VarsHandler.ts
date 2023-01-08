export function setVars(value: string): string[] {
  //remove empty strings and trim
  const vars = value
    .split(',')
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
    console.log(vars);
  return vars;
}