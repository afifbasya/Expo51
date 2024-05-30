import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card({ jumlah, hargaBakso }) {
    return (
        <TouchableOpacity style={styles.card}>
            <Text>Bakso</Text>
            <Text>{jumlah} x Rp. {hargaBakso} = Rp. {jumlah * hargaBakso}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },
})