import { Text, SafeAreaView, StyleSheet } from 'react-native';
import HeaderWelcomeComponent from './components/HeaderWelcomeComponent';
import List from './components/List';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWelcomeComponent username={'juli'} btn={'minha carteira'} />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
