import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function ProductCard(props: any) {
    const navigation = useNavigation();


    const [pressedHeart, setPressedHeart] = useState<boolean>(false)

    return (
        <Pressable style={styles.productContainer} onPress={props.nav}>
            <Image style={styles.image} source={{ uri: props.img }} resizeMode="contain" />
            <View style={styles.midLine}>
                <Text style={styles.price}>${props.price}</Text>
                <Pressable onPress={() => { setPressedHeart(!pressedHeart) }}>
                    {pressedHeart ?
                        <AntDesign name="heart" size={20} color="red" /> :
                        <AntDesign name="hearto" size={20} color="red" />
                    }
                </Pressable>
            </View>
            <Text>{props.title}</Text>

        </Pressable>
    )
}


const styles = StyleSheet.create({
    productContainer: {
        width: "46%",
        marginLeft: "3%",
        marginTop: 10,


    },
    image: {
        height: 300,

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