import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";
import Ionicons from "react-native-vector-icons/Ionicons";

var tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
    <NavigationContainer>
     <tab.Navigator
     screenOptions={({route }) =>({
      tabBarIcon:({focused, color, size}) =>{
      let iconName;
      if(route.name === "Transação"){
      iconName = "book";
      }else if (route.name === "Pesquisa"){
      iconName = "search";
      }
      return (
      <Ionicons
      name={iconname}
      size={size}
      color={color}
      />
      )

      }
     })}
     tabBarOptions={{
      activeTintColor: "black",
      inactiveTintColor: "#FFFFFF",
      style: {
        height: 130,
        borderTopWidth: 0,
        backgroundColor: "#5653d4"
      },
      labelStyle: {
        fontSize: 20,
        fontFamily: "Rajdhani_600SemiBold"
      },
      labelPosition: "beside-icon",
      tabStyle: {
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5653d4"
      }
     }}
     >
    <tab.Screen   name= "Transação" component={TransactionScreen}/>
    <tab.Screen   name= "Pesquisa" component={SearchScreen}/>

     </tab.Navigator>

    </NavigationContainer>
    )
  }
}
