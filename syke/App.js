import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

const [age, setage] = useState('');
const [limits, setlimits] = useState(0);

function calculate(){
  const resultlow = (220 - age) * 0.65
  const resulthigh = (220 - age) * 0.85
  const result = resultlow + " - " + resulthigh
  setlimits(result)
}
  return (
    <View style={styles.container}>

      <Text style={styles.field}>age</Text>

      <TextInput keyboardType='decimal-pad'
      value={age}onChangeText={Text =>setage(Text)}/>

      <Text style={styles.field}>limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button onPress={calculate}title ='calculate'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});