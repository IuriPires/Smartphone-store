import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  Share,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAw from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import {ScrollView} from 'react-native-gesture-handler';
import Button from './../../components/Button';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const {details} = route.params;
  const [selectedValue, setSelectedValue] = useState();

  function navigateBackToList() {
    navigation.goBack();
  }

  function onShare() {
    Share.share({
      message: 'Aqui o produto seria compartilhado',
    });
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backIconView: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 6,
    },
    backIcon: {
      width: 35,
    },
    imageView: {
      flex: 5,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 250,
      height: 250,
      marginTop: 10,
    },
    detailsView: {
      flex: 4,
      backgroundColor: '#FFF',
      marginTop: 15,
    },
    macroDetails: {
      marginTop: 75,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    textDetailName: {
      fontSize: 18,
      marginLeft: 10,
    },
    textDetailValue: {
      marginTop: 6,
      marginBottom: 20,
      fontSize: 24,
      marginLeft: 10,
      color: '#ef6537',
    },
    detailsInputView: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    picker: {
      height: 50,
      width: 150,
    },
    buttonContainer: {
      marginTop: 150,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      flex: 6,
    },
    buttonText: {
      color: '#FFF',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageView}>
        <View style={styles.backIconView}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={navigateBackToList}>
            <Icon name="keyboard-backspace" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <Image source={{uri: details.imageURL}} style={styles.image} />
        <View style={styles.macroDetails}>
          <View>
            <Text style={styles.textDetailName}>{details.product.name}</Text>
            <Text style={styles.textDetailValue}>{details.values[0]}</Text>
          </View>

          <TouchableOpacity style={styles.backIcon} onPress={onShare}>
            <Icon name="share" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailsView}>
        <View style={styles.detailsInputView}>
          <Text>Storage: </Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            {details.product.storage.map(storageSize => (
              <Picker.Item label={storageSize} value={storageSize} />
            ))}
          </Picker>
        </View>

        <View style={styles.detailsInputView}>
          <Text>Colors: </Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            {details.product.colors.map(color => (
              <Picker.Item label={color} value={color} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={navigateBackToList}>
          <IconAw name="shopping-cart" size={30} color="#adb5bd" />
        </TouchableOpacity>

        <Button width={'85%'} textPadding={12} borderRadius={0} color="#ef6537">
          <Text style={styles.buttonText}>BUY NOW</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
