//App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();
export default function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Product" component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen=({navigation})=>{
  return(
    <View>
      <Text>Welcome to Online Book Store</Text>
      <Button title="List of Books" onPress={() => navigation.navigate('Product')}/>
    </View>
  )
};

const ProductScreen=({navigation})=>{
  return(
    <>
      <View style={{flexDirection:"row",backgroundColor:"pink"}}>
        <Text>Web Technologies: </Text>
        <Image source={require('./pics/1.jpg')} style={{width:150,height:200}}/>
        <Image source={require('./pics/2.jpg')} style={{width:150,height:200}}/>
      </View>
      <View style={{flexDirection:"row",backgroundColor:"lightblue"}}>
        <Text>React: </Text>
        <Image source={require('./pics/3.jpg')} style={{width:150,height:200}}/>
      </View>
    </>
  )
};
