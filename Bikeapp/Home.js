import React from "react";
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Bikes } from "./Salesdata";
import { AntDesign , FontAwesome} from '@expo/vector-icons';

export const Home = () =>{
    const navigation = useNavigation();

   
    return(
        <View style={{flex:1 ,borderWidth:7,borderColor:'#021a40',backgroundColor:'#d6d6c9'}}>
            <View style={styles.header}>
                <Text style={{fontWeight:"900",fontSize:20}}>Hello, Jeya Surya 👤</Text>
                <Image
                    source={require('../assets/Images/vestpiccrop.jpg')}
                    style={styles.mine}
                />
            </View>
            <Text style={{left:80,top:10,fontWeight:"100",fontSize:21,fontStyle:"italic",textShadowColor:'#072e6e',textShadowRadius:1}}>Pick Your Bikes 🏍️</Text>

            <View>
                <TextInput
                    style={styles.searchbar}
                    placeholder="Search Here"
                />
            </View>
            <TouchableOpacity>
                     <AntDesign name="search1" size={24} color="black" style={{left:299}} />
                </TouchableOpacity>
                <View>
                <FlatList
                data={Bikes}
                numColumns={2}
                style={{ height: 450, top:50 }}
                contentContainerStyle={{ paddingTop: 20 ,paddingBottom:50 }}
                renderItem={({ item }) =>{
                    return(
                        <View style={{top:10,bottom:50}}>
                            <Text style={styles.brand}>{item.Brand}
                            </Text>
                            <Text style={styles.model}>{item.Model}</Text>
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('Description',{
                                brand:item.Brand,
                                model:item.Model,
                                price:item.Price,
                                images:item.img,
                                Description:item.des
                            }
                                    
                            )
                                
                            }
                            >
                            <Image
                                source={item.img}
                                style={{height:150, width:170, marginRight:10, top:20,left:16}}
                            />
                            </TouchableOpacity>
                            <FontAwesome name="rupee" size={24} color="black" style={{top:22,left:58}} />
                            <Text style={styles.price}>{item.Price}</Text>    
                        </View>
                        
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mine:{
        borderRadius:50,
        width:80,
        height:80,
        bottom:10,
        left:15        
    },
    header:{
        borderColor:'black',
        flexDirection:"row",
        top:60,
        justifyContent:"space-evenly",

    },
    searchbar:{
        borderWidth:1,
        borderColor:'black',
        top:40,
        left:30,
        width:250,
        height:50,
        borderRadius:30,
        paddingLeft:35,
    },
    brand:{
        left:68,
        fontWeight:"900",
        fontSize:18,
        top:15,
        textShadowColor:'#0fba2b',
        textShadowRadius:2
        
    },
    model:{
        left:70,
        top:15,
        color:'#f05454',
        textShadowColor:'#0fba2b',
        textShadowRadius:3
    },
    price:{
        left:80,
        fontWeight:"600",
        
    }

})
