import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { images } from '../../utility/championImages';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';

const exampleData = images.map((item, index) => ({
  ...item,
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
}));

const Ranking = () => {
  // const { data, isFetching } = useQuery({
  //   queryKey: ['ranking'],
  //   queryFn: () => champions(),
  // });
  // if (isFetching) return <Text>loading...</Text>;
  const [data, setData] = useState(exampleData);
  const viewRef = useRef(null);
  const [rankingArr, setRankingArr] = useState([
    {
      ranking: 'S',
      backgroundColor: 'red',
      champions: [
        {
          name: 'Aatrox',
          uri: require('weather_app/assets/images/champion/Aatrox_0.jpg'),
          key: `item-0`,
          label: 0,
        },
        {
          name: 'Ahri',
          uri: require('weather_app/assets/images/champion/Ahri_0.jpg'),
          key: `item-1`,
          label: 1,
        },
        {
          name: 'Akali',
          uri: require('weather_app/assets/images/champion/Akali_0.jpg'),
          key: `item-2`,
          label: 2,
        },
      ],
    },
    {
      ranking: 'A',
      backgroundColor: 'blue',
      champions: [
        {
          name: 'Akshan',
          uri: require('weather_app/assets/images/champion/Akshan_0.jpg'),
          key: `item-0`,
          label: 0,
        },
        {
          name: 'Alistar',
          uri: require('weather_app/assets/images/champion/Alistar_0.jpg'),
          key: `item-1`,
          label: 1,
        },
        {
          name: 'Amumu',
          uri: require('weather_app/assets/images/champion/Amumu_0.jpg'),
          key: `item-2`,
          label: 2,
        },
      ],
    },
    {
      ranking: 'B',
      backgroundColor: 'green',
      champions: [
        {
          name: 'Aphelios',
          uri: require('weather_app/assets/images/champion/Aphelios_0.jpg'),
          key: `item-0`,
          label: 0,
        },
        {
          name: 'Annie',
          uri: require('weather_app/assets/images/champion/Annie_0.jpg'),
          key: `item-1`,
          label: 1,
        },
        {
          name: 'Anivia',
          uri: require('weather_app/assets/images/champion/Anivia_0.jpg'),
          key: `item-2`,
          label: 2,
        },
      ],
    },
    {
      ranking: 'C',
      backgroundColor: 'yellow',
      champions: [
        {
          name: 'Azir',
          uri: require('weather_app/assets/images/champion/Azir_0.jpg'),
          key: `item-0`,
          label: 0,
        },
        {
          name: 'Bard',
          uri: require('weather_app/assets/images/champion/Bard_0.jpg'),
          key: `item-1`,
          label: 1,
        },
        {
          name: 'Belveth',
          uri: require('weather_app/assets/images/champion/Belveth_0.jpg'),
          key: `item-2`,
          label: 2,
        },
      ],
    },
    {
      ranking: 'D',
      backgroundColor: 'gray',
      champions: [
        {
          name: 'Briar',
          uri: require('weather_app/assets/images/champion/Briar_0.jpg'),
          key: `item-0`,
          label: 0,
        },
        {
          name: 'Caitlyn',
          uri: require('weather_app/assets/images/champion/Caitlyn_0.jpg'),
          key: `item-1`,
          label: 1,
        },
        {
          name: 'Camille',
          uri: require('weather_app/assets/images/champion/Camille_0.jpg'),
          key: `item-2`,
          label: 2,
        },
      ],
    },
  ]);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            {
              opacity: isActive ? 0.5 : 1,

              backgroundColor: item.backgroundColor,
            },
          ]}>
          <Image source={item.uri} style={styles.img} />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const rankingItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          activeOpacity={1}
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rankingLineItem,
            {
              opacity: isActive ? 0.5 : 1,
            },
          ]}>
          <Image source={item.uri} style={styles.rankingLineItem} />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };
  const handleDragEnd = (index, newData) => {
    // index에 해당하는 랭킹의 챔피언 순서를 newData로 업데이트
    setRankingArr((prevRankingArr) => {
      const updatedRankingArr = [...prevRankingArr];
      updatedRankingArr[index] = {
        ...updatedRankingArr[index],
        champions: newData,
      };
      return updatedRankingArr;
    });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {rankingArr.map((ranking, index) => {
        return (
          <View
            key={index}
            id={ranking.ranking}
            style={{ ...styles.rankingLine, backgroundColor: ranking.backgroundColor }}>
            <Text>{ranking.ranking}</Text>
            <DraggableFlatList
              key={index}
              horizontal
              style={{ flex: 1 }}
              data={ranking.champions}
              onDragEnd={({ data }) => handleDragEnd(index, data)}
              keyExtractor={(item) => item.key}
              renderItem={rankingItem}
              renderPlaceholder={() => (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(122,122,122,.6)',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              )}
            />
          </View>
        );
      })}
      <View style={{ alignItems: 'center' }}>
        <Text>Champions</Text>
      </View>

      <DraggableFlatList
        horizontal
        data={data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderPlaceholder={() => (
          <View
            style={{ flex: 1, backgroundColor: 'rgba(122,122,122,.6)', alignItems: 'center', justifyContent: 'center' }}
          />
        )}
      />
    </ScrollView>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rankingLine: {
    height: 80,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
  },

  img: {
    width: 100,
    height: 100,
  },
  rankingLineItem: {
    height: 80,
    width: 80,
  },
  rowItem: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
