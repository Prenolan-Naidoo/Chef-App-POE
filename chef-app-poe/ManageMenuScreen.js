import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useMenu } from './menucontext'; // Import context to manage menu items

const ManageMenuScreen = () => {
  const { addMenuItem, removeMenuItem, menu } = useMenu();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const handleAddItem = () => {
    if (!name || !price || !course) return;
    const newItem = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      course,
    };
    addMenuItem(newItem);
    setName('');
    setPrice('');
    setCourse('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>

      {/* Input fields for adding menu item */}
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Course (Starter, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
      />

      {/* Add Item button */}
      <Button title="Add Menu Item" onPress={handleAddItem} />

      {/* List menu items with remove button */}
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.name} - ${item.price} ({item.course})
            </Text>
            <Button
              title="Remove"
              onPress={() => removeMenuItem(item.id)} // Use actual item id here
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  item: { fontSize: 18 },
});

export default ManageMenuScreen;
