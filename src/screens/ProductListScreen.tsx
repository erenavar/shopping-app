import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function ProductListScreen({ navigation }) {
    return (
        <View>
            <Text>ProductListScreen</Text>
            <Button title='Test' onPress={() => navigation.navigate("Details")} />
        </View>
    )
}

const styles = StyleSheet.create({})