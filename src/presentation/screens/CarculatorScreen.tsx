import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CarculartorButton';
import { useCarculator } from '../hooks/useCarculator';

export const CarculatorScreen = () => {
  const {
    number,
    previousNumber,
    formula,
    buildNumber,
    clearCalculator,
    deleteLastCharacter,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  } = useCarculator();

  return (
    <View style={styles.background}>
      <View style={styles.calculatorContainer}>
        <View>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
            {formula || number}
          </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {(previousNumber !== '0' && previousNumber) || ''}
          </Text>
        </View>
        <View style={styles.row}>
          <CalculatorButton
            blackText
            label="C"
            onPress={() => {
              clearCalculator();
            }}
            backgroundColor={colors.lightGray}
          />
          <CalculatorButton
            blackText
            label="+/-"
            onPress={() => {
              addOperation();
            }}
            backgroundColor={colors.lightGray}
          />
          <CalculatorButton
            blackText
            label="del"
            onPress={() => {
              deleteLastCharacter();
            }}
            backgroundColor={colors.lightGray}
          />
          <CalculatorButton
            label="/"
            onPress={() => {
              divideOperation();
            }}
            backgroundColor={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            label="7"
            onPress={() => {
              buildNumber('7');
            }}
          />
          <CalculatorButton
            label="8"
            onPress={() => {
              buildNumber('8');
            }}
          />
          <CalculatorButton
            label="9"
            onPress={() => {
              buildNumber('9');
            }}
          />
          <CalculatorButton
            label="x"
            onPress={() => {
              multiplyOperation();
            }}
            backgroundColor={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            label="4"
            onPress={() => {
              buildNumber('4');
            }}
          />
          <CalculatorButton
            label="5"
            onPress={() => {
              buildNumber('5');
            }}
          />
          <CalculatorButton
            label="6"
            onPress={() => {
              buildNumber('6');
            }}
          />
          <CalculatorButton
            label="-"
            onPress={() => {
              subtractOperation();
            }}
            backgroundColor={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            label="1"
            onPress={() => {
              buildNumber('1');
            }}
          />
          <CalculatorButton
            label="2"
            onPress={() => {
              buildNumber('2');
            }}
          />
          <CalculatorButton
            label="3"
            onPress={() => {
              buildNumber('3');
            }}
          />
          <CalculatorButton
            label="+"
            onPress={() => {
              addOperation();
            }}
            backgroundColor={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            label="0"
            onPress={() => {
              buildNumber('0');
            }}
            doubleWidth={true}
          />
          <CalculatorButton
            label="."
            onPress={() => {
              buildNumber('.');
            }}
          />
          <CalculatorButton
            label="="
            onPress={() => {
              calculateResult();
            }}
            backgroundColor={colors.orange}
          />
        </View>
      </View>
    </View>
  );
};
