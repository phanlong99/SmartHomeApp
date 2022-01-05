import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const DisplayGasKitchen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TempHum}>
        <Text style={styles.textTempHum}>56.7</Text>
        <Image
          style={styles.imageTempHum}
          source={require('../../assets/images/gas.png')}
        />
      </View>
    </View>
  );
};

export default DisplayGasKitchen;
