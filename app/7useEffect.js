import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

export default function Index() {

    //Flashback State
    //1. Bisa berupa angka
    //2. Bisa berupa benar dan salah *coming soon
    //3. Bisa berupa string ("")
    //4. Bisa berupa object *coming soon
    //5. Bisa berupa array *coming soon

    //Lifecycle React (useEffect)
    const [makanan, setMakanan] = useState("Bakso");
    const [show, setShow] = useState(true);

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

    return (
        <View style={{ margin: 30 }}>
            <Text>{makanan}</Text>
            <TouchableOpacity onPress={() => setMakanan("Mie Ayam")} style={{ marginBottom: 50 }}>
                <Text>Ubah Makanan</Text>
            </TouchableOpacity>

            {/* if else  */}
            {show ? <Footer /> : null}
            <TouchableOpacity onPress={() => setShow(!show)}>
                <Text>{show ? "Hapus Footer" : "Tampilkan Footer"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})