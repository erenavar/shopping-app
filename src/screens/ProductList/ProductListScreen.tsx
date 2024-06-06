import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useQuery } from 'react-query'
import { IProduct } from './types'
import ProductCard from '../../components/ProductCard'

export default function ProductListScreen() {

    const { data } = useQuery<IProduct>({
        queryKey: ["products"],
        queryFn: async () => {
            const response = (await fetch('https://fakestoreapi.com/products'))
            return await response.json();
        }

    })

    return (
        <View>
            <ProductCard />
        </View>
    )
}

const styles = StyleSheet.create({})