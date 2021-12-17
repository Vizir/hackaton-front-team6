import React from 'react';
import { StyleSheet, View } from 'react-native';
const Card = ({ children }) => {
    return (React.createElement(View, { style: styles.cardShadow },
        React.createElement(View, { style: styles.cardContainer }, children)));
};
const styles = StyleSheet.create({
    cardShadow: {
        borderRadius: 12,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        margin: 16,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        padding: 16,
    },
});
export { Card };
