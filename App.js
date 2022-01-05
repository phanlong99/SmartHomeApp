import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';
import Controller from './components/Controller';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Controller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
