import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ChatInputForm from './components/inputs/ChatInputForm';
import ChatHeader from './components/layout/ChatHeader';
import Layout from './components/layout/Layout';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/screens/Main';
import Chat from './pages/screens/Chat';
import Ranking from './pages/screens/Ranking';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

export default function App() {
  const Stack = createStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Main"
              // screenOptions={{
              //   headerShown: false,
              // }}
            >
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="Ranking" component={Ranking} />
            </Stack.Navigator>
          </NavigationContainer>
        </Layout>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
