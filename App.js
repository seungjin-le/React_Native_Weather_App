import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Input } from 'react-native-elements';

export default function App() {
  const [textInput, setTextInput] = useState('');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appasdfsadfa!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.testInput}
        value={textInput}
        onChangeText={setTextInput}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>{textInput}</Text>
      <TouchableOpacity>
        <Text>ad</Text>
      </TouchableOpacity>
      <Input placeholder="BASIC INPUT" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },
});
