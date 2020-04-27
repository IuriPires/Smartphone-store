import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Share, Text, TouchableOpacity, Image, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAw from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';
Icon.loadFont();
import {ScrollView} from 'react-native-gesture-handler';
import Button from './../../components/Button';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const {details} = route.params;
  const [selectedStorage, setSelectedStorage] = useState();
  const [selectedColor, setSelectedColor] = useState();

  function navigateBackToList() {
    navigation.goBack();
  }

  function onShare() {
    Share.share({
      message: 'Aqui o produto seria compartilhado',
    });
  }
  function navigateToCart() {
    if (selectedStorage && selectedColor) {
      const payload = {
        ...details,
        selectedStorage,
        selectedColor,
      };
      return navigation.navigate('Cart', {payload});
    }
  }
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
            selectedValue={selectedStorage}
            style={styles.picker}
            onValueChange={itemValue => setSelectedStorage(itemValue)}>
            {details.product.storage.map(storageSize => (
              <Picker.Item
                key={storageSize}
                label={storageSize}
                value={storageSize}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.detailsInputView}>
          <Text>Colors: </Text>
          <Picker
            selectedValue={selectedColor}
            style={styles.picker}
            onValueChange={itemValue => setSelectedColor(itemValue)}>
            {details.product.colors.map(color => (
              <Picker.Item key={color} label={color} value={color} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={navigateBackToList}>
          <IconAw name="shopping-cart" size={30} color="#adb5bd" />
        </TouchableOpacity>

        <Button
          onPress={navigateToCart}
          width={'85%'}
          textPadding={12}
          borderRadius={0}
          backgroundColor={
            selectedStorage && selectedColor
              ? '#ef6537'
              : 'rgba(239,101,55, 0.2)'
          }>
          <Text style={styles.buttonText}>BUY NOW</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
