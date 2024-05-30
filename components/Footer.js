import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Footer() {

    //3. Ketika Ada Component yang dicabut -> if dan else
    useEffect(() => {
        return () => {
            console.log("Jalan ketika component Footer Dicabut");
        }
    }, [])

    return (
        <View>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({})