import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import Indicator from '../../components/Indicator'



export default function DetailScreen(props: any) {

    const route = useRoute()
    const { data, isLoading } = useQuery({
        queryKey: ['productDetail'],
        queryFn: async () => {
            const response = fetch(`https://fakestoreapi.com/products/${route.params.idNumber}`);
            return (await response).json();
        }
    })


    isLoading ? <Indicator /> : null;

    return (
        <View style={styles.container}>
            <Text>ded</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})