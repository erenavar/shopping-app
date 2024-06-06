import React from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProductCard() {
    return (
        <View style={styles.productContainer}>
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
            <View style={styles.midLine}>
                <Text style={styles.price}>$25.55</Text>
                <AntDesign name="hearto" size={20} color="red" />
            </View>
            <Text>Lorem, ipsum dolor.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        width: "40%"
    },
    image: {
        height: "67%"
    },
    midLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 3
    },
    price: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16
    }
})