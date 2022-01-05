import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    borderColor: '#00000020',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  TempHum: {
    height: 50,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#00000020',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  textTempHum: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageTempHum: {
    width: 44,
    height: 44,
  },
});

export default styles;
