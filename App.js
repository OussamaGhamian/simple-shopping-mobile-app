import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';
import {Header, ListItem, AddItem} from './component';
import {ThemeContextProvider} from './context/Theme';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Butter'},
    {id: uuid(), text: 'Oil'},
  ]);
  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };
  const editItem = (id, text) => {
    if (text) {
      let newItems = items.map(item => {
        item.id === id ? (item.text = text) : null;
        return item;
      });
      setItems(newItems);
    } else {
      Alert.alert('Error', 'No item to edit', [{cancelable: false}]);
    }
  };

  const addItem = text => {
    text
      ? setItems([{id: uuid(), text}, ...items])
      : Alert.alert('Error', 'No item to add', [{cancelable: false}]);
  };
  return (
    <ThemeContextProvider>
      <View style={styles.container}>
        <Header title="Shopping List" />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
              key={item.id}
            />
          )}
        />
      </View>
    </ThemeContextProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
