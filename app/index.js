import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const pendidikanTerakhir = [
  {
    label: "SD",
    value: "SD"
  },
  {
    label: "SMP",
    value: "SMP"
  },
  {
    label: "SMA",
    value: "SMA"
  },
  {
    label: "D3",
    value: "D3"
  },
  {
    label: "S1",
    value: "S1"
  },
  {
    label: "S2",
    value: "S2"
  },
]

export default function index() {
  const [pendTerpilih, setPendTerpilih] = useState(false);
  const [guruTerpilih, setGuruTerpilih] = useState(false);
  const [datGuru, setDataGuru] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const ambilAPI = async () => {
    setLoading(true)
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log("json : ", json);
        setLoading(false)

        if (isEmptyObject(json)) {
          setError("Maaf Ada Kendala")
        } else {
          setError(false)
          setDataGuru(json)
        }

      })
  }

  useEffect(() => {
    ambilAPI()
  }, [])

  console.log("guruTerpilih : ", guruTerpilih);

  return (
    <View style={{ padding: 20 }}>
      <Text>Pendidikan Terakhir</Text>
      <Dropdown
        data={pendidikanTerakhir}
        placeholder='Pilih Pendidikan'
        labelField="label"
        onChange={item => {
          setPendTerpilih(item.label)
        }}
        style={styles.select}
      />

      <Text style={{ marginTop: 10 }}>Guru</Text>
      <Dropdown
        data={datGuru}
        placeholder='Pilih Guru'
        labelField="name"
        onChange={item => {
          setGuruTerpilih(item.name)
        }}
        style={styles.select}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 5
  }
})