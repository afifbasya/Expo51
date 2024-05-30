import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Index() {

  //Flashback State
  //1. Bisa berupa angka
  //2. Bisa berupa benar dan salah *coming soon
  //3. Bisa berupa string ("")
  //4. Bisa berupa object *coming soon
  //5. Bisa berupa array *coming soon

  //Lifecycle React (useEffect)
  const [makanan, setMakanan] = useState("Bakso");

  //1. Ketika Component Pertamakali dimunculkan
  useEffect(() => {
    //Program yg ada disini dijalankan ketika pertama muncul
    console.log("Halooo Saya Lifecycle Pertama");
  }, [])

  //2. Ketika Ada State yang berubah
  useEffect(() => {
    //Program yg ada disini dijalankan ketika pertama muncul & ketika ada state yang berubah
    console.log("Halo dijalankan ketika state makanan berubah");
  }, [makanan])



  //3. Ketika Ada Component yang dicabut

  return (
    <View style={{ margin: 30 }}>
      <Text>{makanan}</Text>
      <TouchableOpacity onPress={() => setMakanan("Mie Ayam")}>
        <Text>Ubah Makanan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})