import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 40,
  },
  textHeader: {},
  date: {
    fontSize: 16,
    color: 'black',
    fontStyle: 'italic',
    marginTop: 16,
  },
  welcome: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 14,
  },

  buttonDoor: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  door: {
    width: 44,
    height: 44,
  },
  textDoor: {
    fontSize: 16,
    color: 'black',
    fontStyle: 'italic',
    marginTop: 14,
  },
});

export default styles;
