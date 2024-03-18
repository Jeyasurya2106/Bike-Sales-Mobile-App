import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Description({ route }) {
    const navigation = useNavigation(); // for navigation
    const { brand, model, price, images, Description } = route.params;
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
        navigation.navigate('CartPage', {
            item: { brand, model, price, images, Description, quantity }
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={styles.brand}>{brand}</Text>
            </View>
            <Image
                source={images}
                style={styles.image}
            />
            <View>
                <Text style={styles.model}>Model: {model}</Text>
                <Text style={styles.price}>Price: ₹{price}</Text>
            </View>
            <View>
                <Text style={styles.description}>{Description}</Text>
            </View>
            <TouchableOpacity
                style={styles.cartbtn}
                onPress={addToCart}
            >
                <Text style={styles.carttxt}>🛒 Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    brand: {
        fontSize: 25,
        fontWeight: "600",
        color: '#220bb8',
        textShadowColor: 'white',
        textShadowRadius: 3,
        left: 30,
        top: 20
    },
    image: {
        width: 350,
        height: 250,
        top: 40,
        left: 22
    },
    model: {
        top: 60,
        left: 140,
        fontSize: 15,
        fontWeight: "300",
        color: '#11ad19'
    },
    price: {
        top: 80,
        fontSize: 25,
        left: 100,
        fontWeight: "400"
    },
    description: {
        top: 100,
        height: 200,
        width: 450,
        paddingTop: 30,
        paddingLeft: 18,
        paddingRight: 93,
        fontSize: 15,
        backgroundColor: '#17170a',
        color: '#e1e381',
        fontStyle: "italic"
    },
    cartbtn: {
        top: 150,
        left: 145,
        borderWidth: 1,
        height: 30,
        width: 110,
        borderRadius: 15,
        backgroundColor: 'black'
    },
    carttxt: {
        color: '#0af00d',
        paddingTop: 3,
        paddingLeft: 2
    }
});
