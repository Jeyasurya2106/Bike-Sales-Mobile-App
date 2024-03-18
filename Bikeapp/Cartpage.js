import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity , Image} from "react-native";

export const CartPage = ({ route}) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const { brand, model, price, quantity, images } = item;

    // Set initial quantity to 1
const initialQuantity = 1;

const initialPrice = price;


    const [itemQuantity, setItemQuantity] = useState(initialQuantity);
    const [totalPrice, setTotalPrice] = useState(initialPrice * initialQuantity);
    const [showTotal, setShowTotal] = useState(false);
    const [cartEmpty, setCartEmpty] = useState(false); //  to track if the cart is empty

    const increaseQuantity = () => {
        const newQuantity = itemQuantity + 1;
        setItemQuantity(newQuantity);
    };

    const decreaseQuantity = () => {
        if (itemQuantity > 1) {
            const newQuantity = itemQuantity - 1;
            setItemQuantity(newQuantity);
        }
    };

    const calculateTotal = () => {
        const { price } = route.params.item;
        const newTotalPrice = price * itemQuantity;
        setTotalPrice(newTotalPrice);
        setShowTotal(true);
    };
    
    

    const MovetoCheckout = () => {
        navigation.navigate('Checkout', { item: item });
    };

    const clearCart = () => {
        setItemQuantity(1); // Reset item quantity to 1
        setTotalPrice(initialPrice); // Reset total price
        setShowTotal(false); // Hide total
        setCartEmpty(true); // Set cart empty message to true
    };

    const goBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart Items</Text>
            {cartEmpty ? (
                <Text>Your cart is empty</Text> // Render empty cart message
            ) : (
                <View>
                    <Image source={images} style={styles.image} />
                    <Text style={styles.brandmodel}>{brand} - {model}</Text>
                    <Text style={styles.price}>Price 💸 : ₹{price}</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={decreaseQuantity}>
                            <Text style={styles.quantityButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{itemQuantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity}>
                            <Text style={styles.quantityButton}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={calculateTotal} style={styles.calculateButton}>
                        <Text style={styles.calculateButtonText}>Calculate Total</Text>
                    </TouchableOpacity>
                    {showTotal && <Text style={styles.total}>Total: ₹{totalPrice}</Text>}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={clearCart} style={styles.button}>
                            <Text style={styles.buttonText}>Clear Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goBack} style={styles.button}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={MovetoCheckout} style={styles.checkoutbtn}>
                        <Text style={{top:8,left:15,fontSize:16,color:'white'}}>Proceed to Checkout</Text>
                    </TouchableOpacity>
                   
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine:"underline",
        top:20
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        top:25,
        left:95
    },
    brandmodel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        left:120,
        top:15
    },
    price: {
        fontSize: 16,
        marginBottom: 10,
        left:130
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        left:150
    },
    quantityButton: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#ddd',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    calculateButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
        width:160,
        height:40,
        left:120
    },
    calculateButtonText: {
        color: '#fff',
        fontSize: 16,
        left:5,
        bottom:2
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkoutbtn: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        width:180,
        height:40,
        top:20,
        left:110
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});


