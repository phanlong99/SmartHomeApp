import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ButtonDen from '../ButtonDen';
import ButtonQuat from '../ButtonQuat';

const DenQuatTemHum = (props) => {
  return (
    <View style={styles.container}>
      <ButtonDen />
      <ButtonQuat />
      <View style={styles.TempHum}>
        <Text style={styles.textTempHum}>25.6</Text>
        <Image
          style={styles.imageTempHum}
          source={require('../../assets/images/thermometer.png')}
        />
      </View>
      <View style={styles.TempHum}>
        <Text style={styles.textTempHum}>60.5</Text>
        <Image
          style={styles.imageTempHum}
          source={require('../../assets/images/humidity_1.png')}
        />
      </View>
    </View>
  );
};

export default DenQuatTemHum;
