import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexGrow: 1,
    flexBasis: 0,
    margin: 4,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  textName: {
    marginTop: 12,
    color: '#333333',
  },
  textValue: {
    color: '#ef6537',
  },
  button: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef6537',
  },
  textButton: {
    color: '#FFF',
  },
});

export default {
  styles,
};
