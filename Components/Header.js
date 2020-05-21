import React from 'react';
import {StyleSheet,  View, Text, ImageBackground, Image} from 'react-native';

const Header = props => {
    return(
       // <ImageBackground source={require('../assets/kuff.jpg')} style={styles.header}>     

         <View style={styles.header}>

         
             <View style={styles.titleView}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </View>
        //</ImageBackground>

    )

};

const styles= StyleSheet.create({
    header:{
        flexDirection:'row-reverse',
        width: '100%',
        height: 90,
        alignItems:'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: '#CB0003',
        fontSize: 22,
        padding:11,
        fontWeight: 'bold',
        //padding:12
     //   fontFamily:'Verdana'
     shadowColor: "black",
     shadowOffset: { width: 0, height: 2 },
     shadowRadius: 6,
     shadowOpacity: 0.3,
    },
    titleView:{
        borderRadius:20,
        backgroundColor:'#EEEFF1',
        opacity:0.98,

        shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
   
padding: 2.5,

    },
});

export default Header;