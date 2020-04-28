import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './style';
import ListItem from './../../components/ListItem';
import data from './../../services/fakeAPI.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainList() {
  const navigation = useNavigation();

  function navigateToCart() {
    navigation.navigate('Cart');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="cellphone-android" size={30} color="#FFF" />
        <Text style={styles.headerText}>Smartphones</Text>
        <TouchableOpacity onPress={navigateToCart}>
          <Icon name="cart" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <ListItem data={data} />
      </View>
    </View>
  );
}
