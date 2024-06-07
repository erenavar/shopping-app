import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { useQuery } from 'react-query'
import ProductCard from '../../components/ProductCard';
import { IProduct } from './types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteStackParamList } from '../../navigation/MainNavigation';


interface INavigation extends NativeStackScreenProps<RouteStackParamList, "Products"> { }

export default function ProductListScreen({ navigation }: INavigation) {

    const navigateTo = (id: number) => {
        navigation.navigate("Details", { idNumber: id })
    }
    const { data } = useQuery<IProduct[]>({
        queryKey: ["products"],
        queryFn: async () => {
            const response = (await fetch('https://fakestoreapi.com/products'))
            return await response.json();
        }

    })

    const renderItem = ({ item }: { item: IProduct }) => {
        return <ProductCard title={item.title} price={item.price} img={item.image} id={item.id} nav={() => navigateTo(item.id)} />
    }

    return (
        <View>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({})