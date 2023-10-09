import React from 'react';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, View } from 'react-native';

const Layout = ({ children }) => {
  return (
    <SafeAreaProvider style={styles.layout}>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
