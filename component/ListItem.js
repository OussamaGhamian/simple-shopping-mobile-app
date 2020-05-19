/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { themeContext } from '../context/Theme'
export default function ListItem({ item, deleteItem, editItem }) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState('');
  const { theme: { isLightTheme, light, dark } } = useContext(themeContext);
  const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: isLightTheme ? light.backgroundColor : dark.backgroundColor,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    viewListItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textListItem: {
      fontSize: 18,
      color: isLightTheme ? light.textColor : dark.textColor,
    },
    icon: {
      margin: 10,
    },
    viewIcons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      color: isLightTheme ? light.textColor : dark.textColor,
      fontSize: 18,
    },
  });
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.viewListItem}>
        {editMode ?
          (<>
            <TextInput style={styles.input} placeholder={item.text} onChangeText={(val) => setText(val)} />
            <View style={styles.viewIcons}>
              <Icon style={styles.icon} name="remove" size={25} color="red" onPress={() => setEditMode(!editMode)} />
              <Icon style={styles.icon} name="check" size={25} color="green" onPress={() => editItem(item.id, text, setEditMode(!editMode))} />
            </View>
          </>)
          :
          (<>
            <Text style={styles.textListItem}>
              {item.text}
            </Text>
            <View style={styles.viewIcons}>
              <Icon style={styles.icon} name="remove" size={25} color="red" onPress={() => deleteItem(item.id)} />
              <Icon style={styles.icon} name="edit" size={20} color="blue" onPress={() => setEditMode(!editMode)} />
            </View>
          </>)}
      </View>
    </TouchableOpacity>
  );
}
