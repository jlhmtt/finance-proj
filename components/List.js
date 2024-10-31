import { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import Card from './Card';

const DATA = [
  { id: '1', title: 'AMZ', price: '1.00', name: 'Amazon' },
  { id: '2', title: 'BOOM', price: '1.50', name: 'DMC Global Inc' },
  { id: '3', title: 'NVD', price: '4.00', name: 'Nvidia' },
  { id: '4', title: 'ABC', price: '3.00', name: 'Alphabet' },
  { id: '5', title: 'AAPL', price: '2.00', name: 'Apple' },
  { id: '6', title: 'MSFT', price: '2.50', name: 'Microsoft' },
  { id: '7', title: 'TSLA', price: '3.50', name: 'Tesla' },
  { id: '8', title: 'FB', price: '2.20', name: 'Meta Platforms' },
  { id: '9', title: 'NFLX', price: '3.80', name: 'Netflix' },
  { id: '10', title: 'GOOG', price: '3.00', name: 'Alphabet Inc Class C' },
  { id: '11', title: 'PYPL', price: '1.80', name: 'PayPal' },
  { id: '12', title: 'DIS', price: '2.70', name: 'Walt Disney' },
  { id: '13', title: 'INTC', price: '1.90', name: 'Intel' },
  { id: '14', title: 'AMD', price: '2.40', name: 'Advanced Micro Devices' },
];

function Item({ name, title, price }) {
  const [mostrarCard, setMostrarCard] = useState(false);
  return (
    <View>
      <Pressable
      
        style={styles.item}
        onPress={() => setMostrarCard(!mostrarCard)}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>${price}</Text>
      </Pressable>
      {mostrarCard && <Card title={name} price={price} />}
    </View>
  );
}

export default function List() {
  const [text, setText] = useState('');

  const filteredData = DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.price.includes(text)
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setText(e)}
        value={text}
        placeholder="🔍"
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <Item name={item.name} title={item.title} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'moccasin',
    padding: 20,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
});
