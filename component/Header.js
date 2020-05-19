/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themeContext } from './../context/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function Header({ title }) {
  const { theme, toggleMode } = useContext(themeContext);
  const { isLightTheme, light, dark } = theme;
  const styles = StyleSheet.create({
    header: {
      backgroundColor: isLightTheme ? light.backgroundColor : dark.backgroundColor,
      height: 60,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      textAlign: 'center',
      fontSize: 23,
      color: isLightTheme ? light.textColor : dark.textColor,
    },
  });
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Icon style={styles.icon} name={isLightTheme ? 'moon-o' : 'sun-o'} size={25} color={isLightTheme ? 'white' : 'yellow'} onPress={() => toggleMode()} />
    </View>
  );

}
