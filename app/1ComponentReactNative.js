//Import
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


//Function
export default function App() {
    return (
        <View style={{ marginTop: 100 }}>
            {/* Text  */}
            <Text>Muhammad Afifuddin</Text>

            {/* Gambar  */}
            <Image
                source={{ uri: "https://akcdn.detik.net.id/community/media/visual/2024/04/30/timnas-indonesia-u-23-1_169.jpeg?w=600&q=90" }}
                style={styles.image}
            />

            <Image
                source={require('../assets/images/timnas.jpeg')}
                style={styles.image}
            />

            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>

            <View>
                <Text>Submit</Text>
            </View>

            {/* Styling  */}
            {/* -Margin */}
            {/* -Padding */}
            {/* Flexbox  */}

        </View>
    );
}


//Styling (CSS)
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
});
