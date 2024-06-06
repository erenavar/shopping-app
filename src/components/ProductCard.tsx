import React from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProductCard() {
    return (
        <View style={styles.productContainer}>
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
            <View>
                <Text style={styles.price}>$25.55</Text>
                <AntDesign name="hearto" size={24} color="black" />
            </View>
            <Text>Title</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
    },
    image: {

        height: 300,
        width: 200
    },
    price: {

    }
})