import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({
  backgroundColor = '#ef6537',
  width = 120,
  textPadding = 4,
  onPress,
  children,
  borderRadius = 20,
}) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      marginTop: 10,
      borderRadius: borderRadius,
    },
    text: {
      fontWeight: '500',
      padding: textPadding,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
