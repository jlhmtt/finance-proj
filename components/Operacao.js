import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Operacao({ price }) {
  const [num, setNum] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>
        R${price * num} / {num} ações
      </Text>
      <View style={styles.opBotoes}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setNum(num - 100);
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>-100</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setNum(num - 1);
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setNum(1);
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setNum(num + 1);
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setNum(num + 100);
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>+100</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '16px',
    backgroundColor: 'lightgray',
    margin: '18px',
    borderRadius: '6px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '12px',
  },
  opBotoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#5D5D5D',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
