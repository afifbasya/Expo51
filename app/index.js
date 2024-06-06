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
      nama: "Bakso",
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

  // Index Of 
  // const [angkas, setAngka] = useState([
  //   1, 2, 3, 4, 5
  // ])
  // console.log("Index Of : ", angkas.indexOf(5));


  return (
    <View style={{ margin: 30 }}>
      {/* 1. Mapping */}
      {makanans.map((makanan, index) => {
        return (
          <View key={index} style={styles.card}>
            <Text>{makanan.nama}</Text>
            <Text>Rp. {makanan.harga}</Text>
          </View>
        )
      })}

      {/* 2. Find  */}
      {/* <Text>{makanans.find((findMakanan) => findMakanan.nama === "Bakso")?.nama}</Text> */}


      {/* 3. Filter */}
      {/* {makanans.filter((findMakanan) => findMakanan.nama === "Bakso").map((makanan, index) => {
        return (
          <View key={index} style={styles.card}>
            <Text>{makanan.nama}</Text>
            <Text>Rp. {makanan.harga}</Text>
          </View>
        )
      })} */}

      {/* 5. Reduce  */}
      <Text>Total : {makanans.reduce((total, totalSekarang) => {
        return total + totalSekarang.harga
      }, 0)}</Text>


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