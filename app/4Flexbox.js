import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Flexbox
export default function App() {
  return (
    <View style={styles.layout}>

      {/* Flex Direction */}
      {/* Flex Direction : row */}
      {/* <View style={{ flexDirection: 'row' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View> */}

      {/* Flex Direction : column */}
      {/* <View style={{ flexDirection: 'column' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View> */}

      {/* Flex Direction : row-reverse */}
      {/* <View style={{ flexDirection: 'row-reverse' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View> */}

      {/* Flex Direction : column-reverse */}
      {/* <View style={{ flexDirection: 'column-reverse' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View> */}

      {/* Justify Content */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View> */}

      {/* alignItems  */}
      <View style={{ alignItems: 'flex-start' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <View style={styles.biru} />
        <View style={styles.merah} />
        <View style={styles.hijau} />
      </View>


    </View >
  )
}

const styles = StyleSheet.create({
  layout: {
    marginTop: 30,
    flex: 1,
  },
  biru: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  merah: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  hijau: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },
})