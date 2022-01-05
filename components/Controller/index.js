import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import ControlRooms from '../ControlRooms';
import listRoom from './listRoom';

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const { width, height } = Dimensions.get('window');

const Controller = (props) => {
  let listViewRef;

  const LivingroomButtonHandler = () => {
    listViewRef.scrollToIndex({ animated: true, index: 0 });
  };

  const BedroomButtonHandler = () => {
    listViewRef.scrollToIndex({ animated: true, index: 1 });
  };

  const KitchenButtonHandler = () => {
    listViewRef.scrollToIndex({ animated: true, index: 2 });
  };

  const BathroomButtonHandler = () => {
    listViewRef.scrollToIndex({ animated: true, index: 3 });
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.buttonRoom}
          onPress={LivingroomButtonHandler}
        >
          <View style={styles.topButton}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/images/home.png')}
            />
            <View style={styles.signalButton}></View>
          </View>

          <View style={styles.buttonRoomTitle}>
            <Text style={styles.buttonRoomText}>LIVINGROOM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRoom}
          onPress={BedroomButtonHandler}
        >
          <View style={styles.topButton}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/images/bedroom.png')}
            />
            <View style={styles.signalButton}></View>
          </View>

          <View style={styles.buttonRoomTitle}>
            <Text style={styles.buttonRoomText}>BEDROOM</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.buttonRoom}
          onPress={KitchenButtonHandler}
        >
          <View style={styles.topButton}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/images/fridge.png')}
            />
            <View style={styles.signalButton}></View>
          </View>

          <View style={styles.buttonRoomTitle}>
            <Text style={styles.buttonRoomText}>KITCHEN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRoom}
          onPress={BathroomButtonHandler}
        >
          <View style={styles.topButton}>
            <Image
              style={styles.imageButton}
              source={require('../../assets/images/bathroom.png')}
            />
            <View style={styles.signalButton}></View>
          </View>

          <View style={styles.buttonRoomTitle}>
            <Text style={styles.buttonRoomText}>BATHROOM</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listRoom}
        renderItem={({ item }) => <ControlRooms room={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snaptoAlignment={'start'}
        decelerationRate={'fast'}
        ref={(ref) => {
          listViewRef = ref;
        }}
      />
    </View>
  );
};

export default Controller;
