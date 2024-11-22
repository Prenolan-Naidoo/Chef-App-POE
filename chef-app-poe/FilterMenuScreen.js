import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useMenu } from './menucontext'; // Import context to manage menu items

const FilterMenuScreen = () => {
  const { menu } = useMenu();
  const [filter, setFilter] = useState('');

  const filteredMenu = filter ? menu.filter((item) => item.course === filter) : menu;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>

      {/* Filter buttons */}
      <View style={styles.buttons}>
        <Button title="All" onPress={() => setFilter('')} />
        <Button title="Starters" onPress={() => setFilter('Starter')} />
        <Button title="Mains" onPress={() => setFilter('Main')} />
        <Button title="Desserts" onPress={() => setFilter('Dessert')} />
      </View>

      {/* Display filtered menu items */}
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - ${item.price} ({item.course})
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  item: { fontSize: 18, marginVertical: 5 },
});

export default FilterMenuScreen;
