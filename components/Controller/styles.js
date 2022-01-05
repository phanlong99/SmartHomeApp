import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 44,
    marginTop: 50,
  },
  buttonRoom: {
    width: 110,
    height: 110,
    borderColor: '#00000020',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  topButton: {
    flexDirection: 'row',
  },
  imageButton: {
    width: 44,
    height: 44,
    right: 8,
  },
  signalButton: {
    width: 20,
    height: 20,
    left: 8,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonRoomTitle: {},
  buttonRoomText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
