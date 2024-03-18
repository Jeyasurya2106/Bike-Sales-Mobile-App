import react from "react";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity , TextInput,Button} from "react-native";

export function Checkout ({route}){
  const [address, setAddress] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [Username, setUsername] = useState('');
  const { item } = route.params;
  const { brand, model, price } = item;



  const handlePaymentOptionSelect = (option) => {
    setSelectedPaymentOption(option);
  };

  const handleCheckout = () => {
    alert(brand + model + ' 💵 '+ price +  ' payment Successful' );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,fontWeight:"600",color:'#d656d4',textShadowRadius:2,textShadowColor:'black'}}>𓆝 𓆟 𓆞 𓆝 𓆟</Text>
      <Text style={styles.title}>Checkout</Text>
      <TextInput
      placeholder="Enter Your Name "
      value={Username}
      onChangeText={setUsername}
      style={styles.username}
      />
      <TextInput
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        style={styles.adress}
      />
      <Text style={{fontSize:18,fontWeight:"500",fontStyle:"italic",textDecorationLine:"underline"}}>Select Payment Mode 💵</Text>
      <View style={{flexDirection:"row",top:15}}>
        <TouchableOpacity onPress={() => handlePaymentOptionSelect('credit_card')} style={styles.option1}>
          <Text>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePaymentOptionSelect('Debitcard')} style={styles.option2}>
          <Text>Debitcard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handlePaymentOptionSelect('UPI')} style = {styles.option3}> 
          <Text>UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handlePaymentOptionSelect('Paypal')} style = {styles.option4}> 
          <Text>Paypal</Text>
        </TouchableOpacity>
      </View>
      
     <View style={styles.summary}>
        <Text style={{fontWeight:"900",fontSize:19}}>Summary</Text>
        <Text style={{top:5,fontStyle:"italic"}}>Username : {Username}</Text>
        <Text style={{top:8,fontStyle:"italic"}}>Selected Address: {address}</Text>
        <Text style={{top:11,fontStyle:"italic"}}>Selected Payment Option: {selectedPaymentOption}</Text>
      </View>
      <TouchableOpacity
      onPress={handleCheckout}
      style={styles.payment}
      >
        <Text style={{color:'white'}}>Proceed To Pay</Text>
      </TouchableOpacity>
      <Text style={styles.meow}>≽^•⩊•^≼</Text>
      <Text style={styles.tnqu}>Thank you For Shopping 🏍️🏍️...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    adress: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor:'#e2e1f5',
    },
    username:{
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor:'#e2e1f5'
    },
    option1: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      right:13
    },
    option2:{
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        right:9

    },
    option3:{
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      right:5
    },
    option4:{
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
    },
    summary: {
      marginTop: 30,
      alignItems: 'center',
      borderWidth:1,
      height:140,
      width:200,
    },
    payment:{
      borderWidth:1,
      backgroundColor:'#524be3',
      top:18,
      width:125,
      height:25,
      paddingLeft:11,
      paddingTop:2
    },
    meow: {
      fontSize: 20,
      marginTop: 20,
      top:10
   },
   tnqu: {
      fontSize: 16,
      fontStyle: 'italic',
      marginTop: 18,
  }
  });
  