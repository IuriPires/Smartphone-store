import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import {styles} from './style';
import Button from './../../components/Button';
import createGrid from './../../utils/createGrid';

export default function ListItem({data}) {
  const collums = 2;
  const navigation = useNavigation();

  function navigateToDetail(details) {
    navigation.navigate('Detail', {details});
  }

  return (
    <SafeAreaView>
      <FlatList
        data={createGrid(data, collums)}
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
                backgroundColor="#ef6537"
                width={120}
                textPadding={4}
                borderRadius={20}
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
