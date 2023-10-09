import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ChatInputForm = ({ value, onChange, onclick }) => {
  return (
    <View style={styles.textInputBox}>
      <TextInput
        placeholder="Text Input"
        autoFocus
        value={value}
        onChangeText={onChange}
        style={{ ...styles.text, ...styles.textInput, width: '90%', backgroundColor: 'black' }}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={{ width: '10%', backgroundColor: 'blue' }} onPress={onclick}>
        <Text style={{ ...styles.text, ...styles.button }}>addd</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatInputForm;

const styles = StyleSheet.create({
  textInputBox: {
    width: '100%',

    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button: {
    textAlign: 'center',
  },
});
