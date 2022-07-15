import React, {Component} from "react";
import {StyleSheet,Text,View} from "react-native"

export default class SearchScreen extends Component {
    render(){
        return(
        <View style={styles.container}>
        <Text styles={styles.text}>
         Tela De Pesquisa
        </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"#5653D4"
 },
 text:{
 color: "#fff",
 fontSize:30,
 
 }
})
