import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import styles from './styles';
import ControlLivingroom from '../ControlLivingroom';
import ControlRooms from '../ControlRooms';
import listRoom from './listRoom.js';

const { width, height } = Dimensions.get('window');

const Controller = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listRoom}
        renderItem={({ item }) => <ControlRooms room={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snaptoAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Controller;
