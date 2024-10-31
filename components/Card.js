import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import Operacao from './Operacao';

export default function Card({ title, price }) {
  const [mostrarOperacao, setMostrarOperacao] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>R${price}</Text>
      </View>
      <View style={styles.btnView}>
        <Button
          onPress={() => setMostrarOperacao(!mostrarOperacao)}
          style={styles.btn}
          title="compra"
          color="cornflowerblue"
        />
        <Button
          onPress={() => setMostrarOperacao(!mostrarOperacao)}
          style={styles.btn}
          title="venda"
          color="crimson"
        />
      </View>
      {mostrarOperacao && <Operacao price={price} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '0 12px',
  },
  cardTitle: {
    fontSize: '20px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  btnView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
