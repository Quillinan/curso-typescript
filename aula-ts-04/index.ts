function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

(() => {
  const num1Str: string | null = prompt("First Number");
  const num2Str: string | null = prompt("Second Number");

  const num1: number | null = parseFloat(num1Str || "");
  const num2: number | null = parseFloat(num2Str || "");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, insira números válidos.");
  } else {
    let result = sum(num1 || 0, num2 || 0);
    result += multiply(1, 2);
    showResult(result);
  }
})();
