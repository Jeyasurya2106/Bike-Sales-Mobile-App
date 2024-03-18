import react from "react";
import { Text,View ,Image , StyleSheet, ImageBackground} from "react-native";

export const Aboutus = () =>{

    return(
        <ImageBackground
            source={require('../assets/Images/bikegangimage.png')}
            style={styles.img}
            >
        <View style={{flex:1,alignItems:"center"}}>
            
            <View style={{justifyContent:"flex-start"}}>
                <Text style={styles.founded}>Founded By : </Text>
                <Text style={styles.emoji1}>𓆰♕𓆪</Text>
                <Text style={styles.js}>Jeya Surya </Text>
                <Text style={styles.year}> 2024</Text>
            </View>
            <View style={{backgroundColor:'#070426',opacity:0.6,top:25,height:500,width:300,borderWidth:1,alignItems:"center",paddingLeft:6,paddingRight:6}}>
                <Text style={styles.emoji2}>▄︻デ══━一💥</Text>
                <Text style={styles.bikemarket}> JJ Bike Market</Text>
                <Text style={styles.content}>
                Founded with a passion for motorcycles and a commitment to revolutionizing the buying and selling experience, we strive to connect enthusiasts with their dream rides. With a focus on reliability, transparency, and customer satisfaction, we offer a platform where buyers can explore a wide range of top-quality bikes and sellers can reach a diverse audience. Our team is dedicated to providing exceptional service, ensuring a seamless and enjoyable journey for every user. Join us as we pave the way for a thrilling and accessible bike market experience.
                </Text>
            </View>
            <Text style={styles.emoji3}>╰⪼</Text>
            <Text style={styles.riders}>Specialized : Made For Riders</Text>
        </View>
        </ImageBackground>
    );
    };

    const styles = StyleSheet.create({
        img:{
            height:800,
            
        },
        year:{
            fontSize:35,
            fontWeight:"500",
            fontStyle:"italic",
            color:'#eeedf2',
            left:-110,
            top:-65,
            textShadowColor:'#7bf06c',
            textShadowRadius:4
        },
        founded:{
            color:'#eeedf2',
            fontSize:18,
            left:40,
            top:15
        },
        js:{
            color:'#eeedf2',
            fontSize:28,
            left:100,
            top:5,
            fontStyle:"italic",
            textShadowColor:'#fcf753',
            textShadowRadius:4
        },
        emoji1:{
            color:'#eeedf2',
            fontSize:28,
            left:130,
            top:15,
            fontStyle:"italic",
            textShadowColor:'#fcf753',
            textShadowRadius:4
        },
        emoji2:{
            fontSize:28,
            color:'#f5f118',
            left:-15
        },
        content:{
            fontSize:18,
            color:'#edeb77',
            fontWeight:"500",
            paddingLeft:10
        },
        bikemarket:{
            fontSize:23,
            color:'#04c90b',
            fontStyle:"italic",
            fontWeight:"800",
            left:30,
            textShadowColor:'#e6e874',
            textShadowRadius:6
        },
        emoji3:{
            color:'white',
            top:30,
            fontSize:23,
            left:-55
        },
        riders:{
            color:'white',
            left:60,
            top:5
        }
    })
   
