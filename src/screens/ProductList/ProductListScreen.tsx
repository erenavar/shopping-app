import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { useQuery } from 'react-query'
import { IProduct } from './types'
import ProductCard from '../../components/ProductCard'

export default function ProductListScreen() {

    const { data } = useQuery<IProduct[]>({
        queryKey: ["products"],
        queryFn: async () => {
            const response = (await fetch('https://fakestoreapi.com/products'))
            return await response.json();
        }

    })

    const renderItem = ({ item }: { item: IProduct }) => {
        return <ProductCard />
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({})