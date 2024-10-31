import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function HeaderWelcomeComponent({ username, btn }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={'https://www.thispersondoesnotexist.com'}
        />
        <Text style={styles.text}>oi, {username}! (:</Text>
      </View>
      <Button
        onPress={() => {}}
        title={btn}
        color="cornflowerblue"
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'tomato',
    padding: 16,
  },
  text: {
    margin: 8,
    marginBottom: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: '50%'
  },
});
