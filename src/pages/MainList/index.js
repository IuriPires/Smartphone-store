import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import ListItem from './../../components/ListItem';
import data from './../../services/fakeAPI.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="cellphone-android" size={30} color="#FFF" />
        <Text style={styles.headerText}>Smartphones</Text>
      </View>
      <View style={styles.containerList}>
        <ListItem data={data} />
      </View>
    </View>
  );
}
