import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import createClient from './feathers-client';

export default function App() {
  const client = createClient('https://giftcards-api.bidali.com/');

  const handleClick = async () => {
    // Any call to a feathers service will throw an error
    // on Hermes: TypeError: Cannot read property 'bind' of undefined
    const response = await client.service('search').find();
    console.log(response);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleClick}>
        <Text>Call feathers service</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
