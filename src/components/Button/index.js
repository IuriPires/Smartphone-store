import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({
  backgroundColor,
  width,
  textPadding,
  onPress,
  children,
  borderRadius,
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

// Button.propTypes = {
//   backgroundColor: PropTypes.string,
//   width: PropTypes.number,
//   textPadding: PropTypes.number,
//   children: PropTypes.node,
//   borderRadius: PropTypes.number,
// };
