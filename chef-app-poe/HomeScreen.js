import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useMenu } from './menucontext'; // Import context to manage menu items

const HomeScreen = ({ navigation }) => {
  const { menu } = useMenu();

  // Calculate average price for a given course
  const calculateAverage = (course) => {
    const filtered = menu.filter((item) => item.course === course);
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, item) => sum + item.price, 0);
    return (total / filtered.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Menu</Text>

      {/* Display average prices for each course */}
      <View style={styles.averageContainer}>
        <Text style={styles.average}>Starters Avg: ${calculateAverage('Starter')}</Text>
        <Text style={styles.average}>Mains Avg: ${calculateAverage('Main')}</Text>
        <Text style={styles.average}>Desserts Avg: ${calculateAverage('Dessert')}</Text>
      </View>

      {/* Display the list of menu items */}
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - ${item.price} ({item.course})
          </Text>
        )}
      />

      {/* Navigate to ManageMenuScreen to add/remove items */}
      <Button
        title="Manage Menu"
        onPress={() => navigation.navigate('Manage Menu')}
      />

      {/* Navigate to FilterMenuScreen to filter by course */}
      <Button
        title="Filter Menu"
        onPress={() => navigation.navigate('Filter Menu')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 5 },
  averageContainer: { marginTop: 20 },
  average: { fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
