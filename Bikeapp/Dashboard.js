import react from "react";
import { Text,View ,Button,Image,StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Dashboard = () => {
    const navigation = useNavigation();

    return(
        
        <View style={{flex:1,borderWidth:5,borderColor:'#debe66',backgroundColor:'#e8eaed'}}>
             <Image
            source={require('../assets/Images/frontpagelogo.png')}
            style={styles.img}
            />
            <View>
                <Text style={styles.jj}><Text >▄︻デ══━一💥</Text>JJ Bike Sales Market</Text>
                <Text style={styles.gb}>🏍...   Good Bikes At Affordable Price</Text>
            </View>
            <View style={{height:50,flexDirection:"row",top:280,left:150}}>
                <View
                style={styles.activeindicator}
                ></View>
                <View
                style={styles.inactiveindicator}></View>
                <View
                style={styles.inactiveindicator}
                ></View>
            </View>
            <View style={{flexDirection:"row",left:95}}>
            <TouchableOpacity
             onPress={()=> navigation.navigate('Welcome To JJ Bike Market')}
             style={styles.home}
            >
                <Text style={{color:'#3056bf',fontWeight:"600"}}>Home</Text>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={() => navigation.navigate('About US')}
            style={styles.details}
            >
                <Text style={{fontWeight:"600",color:'#debe66',left:-5}}>About Us</Text>
            </TouchableOpacity>
        
            </View>
           
        </View>
    );

    };

    const styles = StyleSheet.create({
        activeindicator:{
            height:10,
            width:20,
            backgroundColor:'grey',
            borderRadius:15,
            marginLeft:15
        },
        inactiveindicator:{
            height:10,
            width:13,
            backgroundColor:'grey',
            borderRadius:50,
            marginLeft:15
        },
        img:{
            width:300,
            height:200,
            borderRadius:60,
            top:180,
            left:50
        },
        jj:{
            top:200,
            left:15,
            fontWeight:"900",
            color:'black',
            fontSize:20,
            textShadowColor:'#50eb5d',
            textShadowRadius:2

        },
        gb:{
            top:220,
            left:80,
            fontWeight:"300"
        },
        details: {
             width: 100,
             height: 30,
             borderWidth:0.5,
             borderRadius:20 ,
             top:340,
             left:20,
             paddingLeft:28,
             paddingTop:4,
             backgroundColor:'#3056bf'
        },
        home:{
            borderWidth:0.5,
            width:100,
            height:30,
            borderWidth:0.5,
            borderRadius:20,
            top:340,
            paddingTop:4,
            paddingLeft:30,
            backgroundColor:'#debe66',
        }

        
        
    })
    