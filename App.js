import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

import Display from './components/DisplayResults';

export default function App() {

  const [firstPartner, setFirstPartner] = useState('');
  const [secondPartner, setSecondPartner] = useState('');
  const [data, setData] = useState('loading..');
  const [pressed, setPressed] = useState(false);

  handleCalculate = () => {
    Keyboard.dismiss();
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstPartner}&sname=${secondPartner}`, {
              "method": "GET",
              "headers": {
              "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
              "X-Rapidapi-Key": "3698585dc6mshe593654b887334bp11143fjsn2aea9582e77f"}})
        .then(response => response.json())
        .then(data => 
          {
          setData(data);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
      
      setPressed(true);
  };

  handleRestart = () => {
    setPressed(false);
    setData('loading..');
    setFirstPartner('');
    setSecondPartner('');
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: '#5B08CB'}}>
        <Appbar.Content
        style={{ alignItems: 'center' }}
        title="LOVE CALCULATOR"
        subtitle="CHECK THIS OUT NOW !" />
      </Appbar.Header>
      <TextInput
        label='First Partner'
        value={firstPartner}
        onChangeText={(name) => setFirstPartner(name)}
      />
      <TextInput
        label='Second Partner'
        value={secondPartner}
        onChangeText={(name) => setSecondPartner(name)}
      />
      <View style={{margin: 10 }}>
        <Button icon="cards-heart" mode="contained" onPress={handleCalculate}>
          Calculate
        </Button>
      </View>
      <Display data={data} showResult={pressed} onHandleRestart={handleRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
