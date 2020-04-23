import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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

export default {
  styles,
};
