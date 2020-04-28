import React, {useEffect} from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import ListItemsCart from './../../components/ListItemsCart';

export default function Cart() {
  const navigation = useNavigation();
  const route = useRoute();
  const details = route.params;

  async function getCartItems() {
    // try {
    //   const value = await AsyncStorage.getItem('@MyApp_key');
    //   return value;
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return <View>{<ListItemsCart details={{products: details}} />}</View>;
}
