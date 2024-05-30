import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

{/* Styling */ }
export default function App() {
    return (
        <View style={styles.layout}>

            {/* 2. Margin dan Padding */}
            {/* Margin  */}

            <View style={{ backgroundColor: 'red', padding: 20 }}>
                <Text style={{ color: 'white' }}>Margin</Text>
            </View>

            <View style={{ backgroundColor: 'red', margin: 20 }}>
                <Text style={{ color: 'white' }}>Margin</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        marginTop: 30,
        backgroundColor: 'blue',
        flex: 1,
    }
})