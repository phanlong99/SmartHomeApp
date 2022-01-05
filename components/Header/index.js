import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ButtonDoor from '../ButtonDoor';

const Header = (props) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(date + ' - ' + month + ' - ' + year);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={styles.date}> {currentDate}</Text>
        <Text style={styles.welcome}> Welcome</Text>
      </View>
      <ButtonDoor />
    </View>
  );
};

export default Header;
