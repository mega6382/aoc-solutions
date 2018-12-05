import { input } from "./input";

let processInput = (input: string): string[] => {
  return input.split("");
};
let toItemIndexes = <T>(a: T[]) => a.map((item, index) => ({ item, index }));

let BothCharsAreTheSameButWithDifferentCase = (
  firstChar: string,
  secondChar: string
): boolean => {
  if (secondChar === undefined) {
    return false;
  }
  if (
    firstChar >= "a" &&
    firstChar <= "z" &&
    secondChar >= "a" &&
    secondChar <= "z"
  ) {
    return false;
  }
  if (
    firstChar >= "A" &&
    firstChar <= "Z" &&
    secondChar >= "A" &&
    secondChar <= "Z"
  ) {
    return false;
  }
  if (firstChar.toLowerCase() === secondChar.toLowerCase()) {
    return true;
  }
  return false;
};

let removeDuplicates = (data: string[]): string [] => {
    let returnResult = data; 
  for (const { item, index } of toItemIndexes(data)) {
    if (BothCharsAreTheSameButWithDifferentCase(item, data[index - 1])) {
      delete returnResult[index];
      delete returnResult[index - 1];
      matched = true;
    }
  }
  return returnResult;
};

let data = processInput(input);

let matched = false;

do {
  matched = false;
  data = removeDuplicates(data).filter(Boolean);
} while (matched);

console.log(data.length);
