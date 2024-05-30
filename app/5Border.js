import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Border  */}
            {/* 1. Border Width
      2. Border Radius */}
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    margin: 30,
                    padding: 20,
                    backgroundColor: 'white',
                    borderRadius: 10
                }}
            >
                <Text>Bakso</Text>
                <Text>Rp. 50.000</Text>
            </TouchableOpacity>

        </View>
    );
}
