import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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

export default {
  styles,
};
