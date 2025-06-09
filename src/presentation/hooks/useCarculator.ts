import { useEffect, useRef, useState, useCallback } from 'react';

enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'x',
  DIVIDE = '/',
}

export const useCarculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const [formula, setFormula] = useState<string>('');

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ')[0];
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    if (formula) {
      const result = calculateSubResult();
      setPreviousNumber(`${result}`);
    }
  }, [formula]);

  const lastOperation = useRef<Operator | null>(null);

  const buildNumber = (numberString: string) => {
    //si el número es 0 y se presiona un número distinto de 0, se reemplaza el 0
    if (number.includes('.') && numberString === '.') return;

    //si el número es 0 y se presiona un número distinto de 0, se reemplaza el 0
    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //evaluar si el otro número es 0 y no es un punto decimal
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //evalua si es diferente de 0, no hay punto decimal y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //evitar el 000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
    lastOperation.current = null;
  };

  //define la operación a realizar y guarda el número actual
  const divideOperation = () => {
    if (lastOperation.current === Operator.DIVIDE) {
      return;
    }
    setLastNumber();
    lastOperation.current = Operator.DIVIDE;
  };
  const multiplyOperation = () => {
    if (lastOperation.current === Operator.MULTIPLY) {
      return;
    }
    setLastNumber();
    lastOperation.current = Operator.MULTIPLY;
  };
  const addOperation = () => {
    if (lastOperation.current === Operator.ADD) {
      return;
    }
    setLastNumber();
    lastOperation.current = Operator.ADD;
  };

  const subtractOperation = () => {
    if (lastOperation.current === Operator.SUBTRACT) {
      return;
    }
    setLastNumber();
    lastOperation.current = Operator.SUBTRACT;
  };

  // Resets the calculator to its initial state
  const clearCalculator = () => {
    setNumber('0');
    setPreviousNumber('0');
    lastOperation.current = null;
    setFormula('');
  };

  const deleteLastCharacter = () => {
    let currentSign = '';
    let temporaryNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporaryNumber = number.substring(1);
    }
    if (temporaryNumber.length > 1) {
      return setNumber(currentSign + temporaryNumber.substring(0, temporaryNumber.length - 1));
    }
    setNumber('0');
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    console.log('Result:', result);
    setFormula(`${result}`);
    lastOperation.current = null;
    setPreviousNumber('0');
  };

  const calculateSubResult = useCallback((): number => {
    const [firstValue, operator, secondValue] = formula.split(' ');

    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    if (isNaN(num2)) return num1;
    switch (lastOperation.current) {
      case Operator.ADD:
        return num1 + num2;

      case Operator.SUBTRACT:
        return num1 - num2;
      case Operator.MULTIPLY:
        return num1 * num2;
      case Operator.DIVIDE:
        return num1 / num2;
      default:
        throw new Error('Operation not implemented');
    }
  }, [number, formula]);
  return {
    number,
    buildNumber,
    clearCalculator,
    deleteLastCharacter,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    previousNumber,
    calculateResult,
    calculateSubResult,
    formula,
  };
};
