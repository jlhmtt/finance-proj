import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Operacao({ price }) {
  const [num, setNum] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>
        R${price * num} / {num} ações
      </Text>
      <View style={styles.opBotoes}>
        <Button
          onPress={() => {
            setNum(num - 100);
          }}
          title="-100"
        />
        <Button
          onPress={() => {
            setNum(num - 10);
          }}
          title="-"
        />
        <Button
          onPress={() => {
            setNum(1);
          }}
          title="reset"
        />
        <Button
          onPress={() => {
            setNum(num + 10);
          }}
          title="+"
        />
        <Button
          onPress={() => {
            setNum(num + 100);
          }}
          title="+100"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: '16px',
    backgroundColor: 'lightgray',
    margin: '18px',
    borderRadius: '6px'
    
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '12px'
  },
  opBotoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});