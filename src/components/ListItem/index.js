import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import {styles} from './style';
import Button from './../../components/Button';

export default function ListItem({data}) {
  const collums = 2;
  const navigation = useNavigation();

  function navigateToDetail(details) {
    navigation.navigate('Detail', {details});
  }

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) {
      // [C]
      data.push({
        // [D]
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true,
      });
      lastRowElements += 1; // [E]
    }
    return data; // [F]
  }

  return (
    <SafeAreaView>
      <FlatList
        data={createRows(data, collums)}
        keyExtractor={item => item.id}
        numColumns={collums}
        renderItem={({item}) => {
          if (item.empty) {
            return <View style={[styles.item, styles.itemEmpty]} />;
          }
          return (
            <View key={item.id} style={styles.item}>
              <Image source={{uri: item.imageURL}} style={styles.image} />
              <Text style={styles.textName}>{item.product.name}</Text>
              <Text style={styles.textValue}>{item.values[0]}</Text>
              <Button
                style={styles.button}
                onPress={() => navigateToDetail(item)}>
                <Text style={styles.textButton}>Buy now</Text>
              </Button>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
