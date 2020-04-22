import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ListItem from './../../components/ListItem';
import data from './../../services/fakeAPI.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainList() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerList: {
      paddingHorizontal: 6,
      marginTop: 10,
    },
    header: {
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      fontSize: 24,
      color: '#FFF',
      letterSpacing: 1.2,
      fontWeight: 'bold',
      marginLeft: 12,
      padding: 20,
    },
  });
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
