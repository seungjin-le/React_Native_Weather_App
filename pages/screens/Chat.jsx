import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import ChatHeader from '../../components/layout/ChatHeader';
import ChatInputForm from '../../components/inputs/ChatInputForm';

const Chat = () => {
  const [textInput, setTextInput] = useState('');
  const [chats, setChats] = useState([]);
  const handleOnClickBtn = () => {
    setChats((chats) => chats.concat(textInput));
    setTextInput('');
  };
  return (
    <Layout>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.select({ ios: 'padding', android: undefined })}>
        <View style={styles.content}>
          <ChatHeader />
          {chats.map((chat, index) => (
            <Text key={index}>{chat}</Text>
          ))}
        </View>
        <ChatInputForm value={textInput} onChange={setTextInput} onclick={handleOnClickBtn} />
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default Chat;
const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
