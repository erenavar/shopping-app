import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



export default function DetailScreen(props: any) {

    const route = useRoute()

    return (
        <View>
            <Text>{route.params.idNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})