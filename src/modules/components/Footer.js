import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ComponentsScreen(props) {
  const route = useRoute();
  function phoneCall() {
    Linking.openURL(`tel:0484 058 831`)
  }
  function website() {
    Linking.openURL("https://www.plumkrazygarage.com.au");
  }
  return (
    <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 30}}>
        <View style={{width: windowWidth*0.8, height: windowWidth * 0.2, overflow: 'hidden'}}>
            <Image source={require("../../../assets/images/brand/footer-brand.jpg")} style={{width: windowWidth*0.8, height: windowWidth * 0.2, resizeMode: 'contain'}} />
        </View>
        <TouchableOpacity onPress={phoneCall} style={{display: 'flex', justifyContent:'center', alignItems: "center", flexDirection: 'row'}}>
        <Icon
            name="phone"
            size={28}
            color="#470a68"
        />
        <Text style={{fontSize:18, color: '#470a68'}}>: 0484 058 831</Text></TouchableOpacity>
        <TouchableOpacity onPress={website}><Text style={{fontSize:18, color: '#470a68', textDecorationLine: 'underline'}}>www.plumkrazygarage.com.au</Text></TouchableOpacity>
      </View>
  );
}
