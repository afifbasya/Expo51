import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

{/* Styling */ }
export default function App() {
    return (
        <View style={styles.layout}>

            {/* Styling Text */}

            {/* 1. Font Size, Font Weight, Font Style  */}

            {/* Font Size  */}
            <Text style={{ fontSize: 15 }}>Muhammad Afifuddin</Text>
            <Text style={{ fontSize: 20 }}>Muhammad Afifuddin</Text>
            <Text style={{ fontSize: 30 }}>Muhammad Afifuddin</Text>

            {/* Font Weight  */}
            <Text style={{ fontWeight: 100 }}>Muhammad Afifuddin</Text>
            <Text style={{ fontWeight: 300 }}>Muhammad Afifuddin</Text>
            <Text style={{ fontWeight: 'bold' }}>Muhammad Afifuddin</Text>

            {/* Font Style  */}
            <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 30 }}>Muhammad Afifuddin</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        marginTop: 30,
        flex: 1
    }
})