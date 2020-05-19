import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {themeContext} from './../context/Theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function AddItem({addItem}) {
  const [text, setText] = useState('');
  const {
    theme: {isLightTheme, light, dark},
  } = useContext(themeContext);

  const styles = StyleSheet.create({
    btnText: {
      textAlign: 'center',
      fontSize: 20,
      color: isLightTheme ? light.textColor : dark.textColor,
    },
    input: {
      height: 60,
      padding: 8,
      fontSize: 16,
    },
    btn: {
      backgroundColor: isLightTheme
        ? light.backgroundColor
        : dark.backgroundColor,
      padding: 10,
      margin: 7,
      borderRadius: 5,
    },
  });
  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Add item..."
        onChangeText={val => setText(val)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => addItem(text, setText(''))}>
        <Text style={styles.btnText}>
          <Icon
            name="plus"
            color={isLightTheme ? 'white' : 'yellow'}
            size={25}
          />
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}
