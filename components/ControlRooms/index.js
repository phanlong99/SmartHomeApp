import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ControlRooms = (props) => {
  const { roomName, control1, control2 } = props.room;
  return (
    <View style={styles.container}>
      <View style={styles.textRoom}>
        <Text style={styles.Livingroom}>{roomName}</Text>
      </View>
      {control1}
      {control2}
    </View>
  );
};

export default ControlRooms;
