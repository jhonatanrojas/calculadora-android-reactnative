import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import React from 'react';
interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  doubleWidth?: boolean;
  blackText?: boolean;
}

export const CalculatorButton = ({
  label,
  onPress,
  backgroundColor,
  doubleWidth = false,
  blackText = false,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: backgroundColor || colors.darkGray,
        width: doubleWidth ? 160 : 80,
      })}
      onPress={() => onPress()}>
      <Text style={{ ...styles.buttonText, color: blackText ? 'black' : 'white' }}>{label}</Text>
    </Pressable>
  );
};
