import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Card from './cards';

const Display = ({data, showResult, onHandleRestart}) => {

    if(data === 'loading..' && showResult === true)
        return (
            
            <View style={styles.container}>
                <Card style={styles.cards}>
                    <Text style={styles.busyText}>{data}</Text>
                </Card>
            </View>
        );
    else if (data !== 'loading..' && showResult === true)
    return (
        <View style={styles.container}>
            <Card style={styles.cards}>
                <Text style={styles.text}>{data.percentage} %</Text>
                <Text style={styles.text}>{data.result}</Text>
                <Button title='Start Again' onPress={onHandleRestart} />
            </Card>
        </View>
    );

    else return(
        <View></View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        paddingVertical: 20,
        textAlign: 'center',
        fontSize: 16,
        margin: 5,
        borderWidth: 2,
        borderColor: '#6616D1',
        color: 'white',
        backgroundColor: '#6616D2',
        padding: 5,
        width: 250,
        height: 80
    },
    busyText: {
        paddingVertical: 20,
        textAlign: 'center',
        fontSize: 16,
        margin: 5,
        color: '#6616D2',
    },
    cards:{
        padding: 10,
        width: '90%',
        height: 250
    }
});
export default Display;