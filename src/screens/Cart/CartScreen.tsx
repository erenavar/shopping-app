import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'



export default function CartScreen() {
    const state = useSelector((state) => state)
    console.log(state)

    return (
        <SafeAreaView>
            <Text>CartScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})