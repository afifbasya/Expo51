import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Card from '../components/Card'

export default function Index() {
  //State dan Props = Variabel
  //State = variabel yg bisa berubah
  //Props = tidak bisa berubah, dan berasal dari state

  const [hargaBakso, setHargaBakso] = useState(7000);
  const [jumlah, setJumlah] = useState(0);

  return (
    <View
      style={styles.container}
    >

      <Card jumlah={jumlah} hargaBakso={hargaBakso} />

      <TouchableOpacity style={styles.button} onPress={() => setJumlah(jumlah + 1)} >
        <Text>Tambah Bakso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setJumlah(0)} >
        <Text>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: { marginHorizontal: 30, backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 5, marginTop: 10 }
})
