import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//Looping
export default function index() {
  const [makanans, setMakanan] = useState([
    {
      id: 1,
      nama: "Bakso",
      harga: 10000
    },
    {
      id: 2,
      nama: "Mie Ayam",
      harga: 7000
    },
    {
      id: 3,
      nama: "Siomay",
      harga: 5000
    },
    {
      id: 4,
      nama: "Soto",
      harga: 12000
    },
    {
      id: 5,
      nama: "Nasi Goreng",
      harga: 15000
    },
  ])

  return (
    <View style={{ margin: 30 }}>
      {makanans.map((makanan, index) => {
        return (
          <View key={index} style={styles.card}>
            <Text>{makanan.nama}</Text>
            <Text>Rp. {makanan.harga}</Text>
          </View>
        )
      })}

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 10
  }
})