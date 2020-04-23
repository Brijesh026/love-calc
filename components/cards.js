import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = (props) => {
    return ( 
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        textShadowOffset: { width: 10, height: 5},
        elevation: 6
    }
});

export default Card;
