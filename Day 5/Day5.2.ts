import { input } from "./input";

let processInput = (input: string): string[] => {
  return input.split("");
};
let toItemIndexes = <T>(a: T[]) => a.map((item, index) => ({ item, index }));

function range(start: string, stop: string) {
  var result = [];
  for (
    var idx = start.charCodeAt(0), end = stop.charCodeAt(0);
    idx <= end;
    ++idx
  ) {
    result.push(String.fromCharCode(idx));
  }
  return result;
}

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

let removeDuplicates = (data: string[]): string[] => {
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
let removeAllOccurrencesOfValue = (array: string[], value: string) => {
  return array.filter(function(element) {
    if (element.toLowerCase() === value) {
      return false;
    }
    return true;
  });
};

let processDataAfterRemovingSameUnitsOfSingleCharAndReturnLength = (
  result: string[]
): number => {
  do {
    matched = false;
    result = removeDuplicates(result).filter(Boolean);
  } while (matched);
  return result.length;
};

let min = function(array: number[]) {
  return Math.min.apply(Math, array);
};
let data = processInput(input);

let result = data;

let matched = false;

let lengths: number[] = [];

let AtoZ = range("a", "z");

for (const alphabet of AtoZ) {
  result = removeAllOccurrencesOfValue(result, alphabet);
  lengths.push(
    processDataAfterRemovingSameUnitsOfSingleCharAndReturnLength(result)
  );
  result = data;
}

console.log(min(lengths));
