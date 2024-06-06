import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard() {
    const navigation = useNavigation();
    const toDetailPage = () => {
        navigation.navigate("Details")
    }

    const [pressedHeart, setPressedHeart] = useState<boolean>(false)

    return (
        <Pressable style={styles.productContainer} onPress={toDetailPage}>
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
            <View style={styles.midLine}>
                <Text style={styles.price}>$25.55</Text>
                <Pressable onPress={() => { setPressedHeart(!pressedHeart) }}>
                    {pressedHeart ?
                        <AntDesign name="heart" size={20} color="red" /> :
                        <AntDesign name="hearto" size={20} color="red" />
                    }
                </Pressable>
            </View>
            <Text>Lorem, ipsum dolor.</Text>
        </Pressable>
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