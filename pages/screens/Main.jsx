import React from 'react';
import { View, Text, Button } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View>
      <Text>main</Text>
      <View>
        <Button title={'Chat'} onPress={() => navigation.navigate('Chat')} />
        <Button title={'Ranking'} onPress={() => navigation.navigate('Ranking')} />
      </View>
    </View>
  );
};

export default Main;
