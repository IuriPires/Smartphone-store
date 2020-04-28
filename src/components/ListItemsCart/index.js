import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export default function ListItemsCart({details}) {
  if (details) {
    return (
      <View style={styles.container}>
        <Text>Cart</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Ops! Não encontramos nada por aqui</Text>
    </View>
  );
}
