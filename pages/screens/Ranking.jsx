import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import champions from '../../api/http';

const Ranking = () => {
  const [champion, setChampion] = useState([]);
  const { data, isFetching } = useQuery({
    queryKey: ['ranking'],
    queryFn: () => champions(),
  });
  if (isFetching) return <Text>loading...</Text>;
  const arr = Object.entries(data);
  const test = Object.entries(data).map((champion, index) => {
    return {
      name: champion[0],
      uri: `weather_app/assets/images/champion/${champion[1]?.image?.full?.replace('.png', '_0.jpg')}`,
    };
  });

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>S</Text>
        </View>
        <View>
          <Text>A</Text>
        </View>
        <View>
          <Text>B</Text>
        </View>
        <View>
          <Text>C</Text>
        </View>
        <View>
          <Text>D</Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true}>
          {test.map((champion, index) => {
            //${champion[1].image.full.replace('.png', '_0.jpg')}
            return (
              <View key={index}>
                <Image style={styles.img} source={require('weather_app/assets/images/champion/Yone_0.jpg')} />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <Image style={styles.img} source={require(`weather_app/assets/images/champion/Aatrox_0.jpg`)} />
      </View>
    </View>
  );
};
// require(`/weather_app/assets/images/champion/${champion[1].image.full.replace('.png', '_0.jpg')}`)
//uri: `/weather_app/assets/images/champion/${champion[1].image.full.replace('.png', '_0.jpg')}`,
export default Ranking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    margin: 10,
    width: 48,
    height: 48,
  },
});
