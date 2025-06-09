/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { CarculatorScreen } from './presentation/screens/CarculatorScreen';
import { styles } from './config/theme/app-theme';

const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CarculatorScreen />
    </View>
  );
};

export default App;
