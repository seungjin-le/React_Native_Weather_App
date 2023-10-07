import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Input } from 'react-native-elements';

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [chats, setChats] = useState([]);
  const { StatusBarManager } = NativeModules;
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  useEffect(() => {
    Platform.OS === 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  const handleOnClickBtn = () => {
    setChats([...chats, textInput]);
    setTextInput('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {chats.map((chat, index) => {
          return <Text key={index}>{chat}</Text>;
        })}
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>
        <Text>asdad</Text>

        <Text>asdad</Text>
        <Text>asdad</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.textInputBox}
        behavior={'padding'}
        keyboardVerticalOffset={statusBarHeight + 44}>
        <TextInput
          placeholder="Text Input"
          value={textInput}
          onChangeText={setTextInput}
          style={{ width: '90%', height: 44, backgroundColor: 'black' }}
          autoCorrect={false}
        />
        <TouchableOpacity style={{ width: '10%', height: 44, backgroundColor: 'blue' }} onPress={handleOnClickBtn}>
          <Text>addd</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputBox: {
    flex: 1,
    width: '100%',
    maxHeight: 44,
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
  },
});
