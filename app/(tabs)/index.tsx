import { Text, View, StyleSheet } from 'react-native';
import {useFonts, CourierPrime_400Regular} from '@expo-google-fonts/courier-prime';
import StatsDisplay from '../Components/statsDisplay';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titleText}> Today </Text>
      <StatsDisplay title='10 Exercises' subTitle='1 hour 30 mins' image={require("../../assets/images/workouticon.png")}/>
      <StatsDisplay title='1500 cal in' subTitle='2000 out' image={require("../../assets/images/dumpling.png")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#853b8fff',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'CourierPrime_400Regular',
    color: '#000000ff',
    fontSize: 96,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: "#fff",
  },
});