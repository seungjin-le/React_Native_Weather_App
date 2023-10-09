import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { images } from '../../utility/championImages';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';

const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
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
      champions: [],
    },
    {
      ranking: 'A',
      backgroundColor: 'blue',
      champions: [],
    },
    {
      ranking: 'B',
      backgroundColor: 'green',
      champions: [],
    },
    {
      ranking: 'C',
      backgroundColor: 'yellow',
      champions: [],
    },
    {
      ranking: 'D',
      backgroundColor: 'gray',
      champions: [],
    },
  ]);

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={drag}
        disabled={isActive}
        style={[
          styles.rowItem,
          {
            opacity: isActive ? 0.5 : 1,
            padding: 5,
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <DraggableFlatList
      // horizontal={true}
      data={data}
      renderItem={renderItem}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => {
        return item.key;
      }}
    />
  );
};

// {/*<View style={styles.container} ref={viewRef}>*/}
//       {/*  {rankingArr.map((ranking, index) => {*/}
//       {/*    return (*/}
//       {/*      <View*/}
//       {/*        key={index}*/}
//       {/*        id={ranking.ranking}*/}
//       {/*        style={{ ...styles.rankingLine, backgroundColor: ranking.backgroundColor }}*/}
//       {/*        onLayout={({ nativeEvent: { layout } }) => {*/}
//       {/*          setRankingHeight((rankingHeight) =>*/}
//       {/*            rankingHeight.concat({*/}
//       {/*              ranking: ranking.ranking,*/}
//       {/*              height: layout.height,*/}
//       {/*              width: layout.width,*/}
//       {/*              x: layout.x,*/}
//       {/*              y: layout.y,*/}
//       {/*            })*/}
//       {/*          );*/}
//       {/*        }}>*/}
//       {/*        <Text>{ranking.ranking}</Text>*/}
//       {/*      </View>*/}
//       {/*    );*/}
//       {/*  })}*/}
//
//       {/*  <View style={styles.containera}>*/}
//       {/*    <Animated.Image*/}
//       {/*      style={{*/}
//       {/*        transform: [{ translateX: pan.x }, { translateY: pan.y }],*/}
//       {/*        width: 48,*/}
//       {/*        height: 48,*/}
//       {/*      }}*/}
//       {/*      source={require('weather_app/assets/images/champion/Elise_0.jpg')}*/}
//       {/*    />*/}
//       {/*  </View>*/}
//       {/*  <View>*/}
//       {/*    <ScrollView horizontal={true}>*/}
//       {/*      {images.map((champion, index) => {*/}
//       {/*        return (*/}
//       {/*          <View key={index}>*/}
//       {/*            <Image style={styles.img} source={champion.uri} />*/}
//       {/*          </View>*/}
//       {/*        );*/}
//       {/*      })}*/}
//       {/*    </ScrollView>*/}
//       {/*  </View>*/}
//       {/*</View>*/}
export default Ranking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  containera: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankingLine: {
    height: 60,
    backgroundColor: 'red',
  },

  img: {
    margin: 10,
    width: 48,
    height: 48,
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
