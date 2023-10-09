import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={{ height: top }} />
      <View style={{ ...styles.container }}>
        <StatusBar animated={true} barStyle={'default'} />
        <Text style={styles.headerText}>ChatHeader</Text>
      </View>
    </>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
});
