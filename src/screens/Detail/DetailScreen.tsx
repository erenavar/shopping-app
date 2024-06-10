import React from 'react'
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useQuery } from 'react-query'
import Indicator from '../../components/Indicator'
import { FontAwesome6 } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs'



export default function DetailScreen(props: any) {

    const route = useRoute()
    const { data, isLoading } = useQuery({
        queryKey: ['productDetail'],
        queryFn: async () => {
            const response = fetch(`https://fakestoreapi.com/products/${route.params.idNumber}`);
            return (await response).json();
        }
    })

    const addCart = () => {
        alert("test")
    }





    isLoading ? <Indicator /> : null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Image
                style={styles.img}
                source={{ uri: data.image }}
                resizeMode="contain"
            />
            <Text style={styles.description}>{data.description}</Text>
            <View style={styles.bottom}>
                <Text style={styles.price}>${data.price}</Text>
                <Pressable onPress={addCart}>
                    <FontAwesome6 name="cart-plus" size={34} color="red" />
                </Pressable>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    header: {
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    },
    img: {
        height: "30%",
        width: "40%",
        alignSelf: "center"
    },
    description: {
        margin: 15
    },
    bottom: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    price: {
        color: "red",
        fontSize: 25,
        fontWeight: "bold"
    }
})