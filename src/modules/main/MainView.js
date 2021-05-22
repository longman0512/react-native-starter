import React from 'react';
import { StyleSheet, Button, Image, ActivityIndicator, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import { colors, fonts } from '../../styles';
import Constants from '../../utils/global';
import Footer from '../components/FooterContainer';
import { Dropdown } from '../../components';
const carImage = {
  CL22: require("../../../assets/cars/CL22.png"),
  CL23: require("../../../assets/cars/CL23.png"),
  CL29: require("../../../assets/cars/CL29.png"),
  CL41: require("../../../assets/cars/CL41.png"),
  CL45: require("../../../assets/cars/CL45.png"),
  CM41: require("../../../assets/cars/CM41.png"),
  CM45: require("../../../assets/cars/CM45.png"),
  VC20: require("../../../assets/cars/VC20.png"),
  VC41: require("../../../assets/cars/VC41.png"),
  VC45: require("../../../assets/cars/VC45.png"),
  VE20: require("../../../assets/cars/VE20.png"),
  VE41: require("../../../assets/cars/VE41.png"),
  VE45: require("../../../assets/cars/VE45.png"),
  VF20: require("../../../assets/cars/VF20.png"),
  VF21: require("../../../assets/cars/VF21.png"),
  VF41: require("../../../assets/cars/VF41.png"),
  VF45: require("../../../assets/cars/VF45.png"),
  VG22: require("../../../assets/cars/VG22.png"),
  VG23: require("../../../assets/cars/VG23.png"),
  VG41: require("../../../assets/cars/VG41.png"),
  VG45: require("../../../assets/cars/VG45.png"),
  VH22: require("../../../assets/cars/VH22.png"),
  VH23: require("../../../assets/cars/VH23.png"),
  VH29: require("../../../assets/cars/VH29.png"),
  VH41: require("../../../assets/cars/VH41.png"),
  VH45: require("../../../assets/cars/VH45.png"),
  VJ22: require("../../../assets/cars/VJ22.png"),
  VJ23: require("../../../assets/cars/VJ23.png"),
  VJ29: require("../../../assets/cars/VJ29.png"),
  VJ41: require("../../../assets/cars/VJ41.png"),
  VJ45: require("../../../assets/cars/VJ45.png"),
  VK22: require("../../../assets/cars/VK22.png"),
  VK29: require("../../../assets/cars/VK29.png"),
  VK41: require("../../../assets/cars/VK41.png"),
  VK45: require("../../../assets/cars/VK45.png"),
};

const cylinderType = [
  "",
  "6 cylinder manual",
  "6 cylinder automatic",
  "6 cylinder manual ",
  "6 cylinder automatic",
  "8 cylinder manual",
  "8 cylinder automatic",
  "6 cylinder manual",
  "6 cylinder automatic"
]

const priceType = {
  L: 'Low price range',
  E: 'Economy price range',
  M: 'Medium price range',
  H: 'High price range',
  D: 'Delux price range',
  S: 'Sport price range',
  P: 'Premium price range'
}

const doorType = [20, 21, 22, 23, 29, 41, 45];

const productionMonth = {
  A: 'January',
  B: 'Feburary',
  C: 'March',
  D: 'April',
  E: 'May',
  F: 'June',
  G: 'July',
  H: 'August',
  I: 'September',
  J: 'October',
  K: 'November',
  L: 'December'
};
export default function MainScreen(props) {
  const route = useRoute();
  const [code, setCode] = React.useState("");
  const [result, setResult] = React.useState({});
  const [query, setQuery] = React.useState('');
  const [err, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const genCharArray = (charA, charZ) => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }
  const _decode = () => {

    console.log(code);

    code.toUpperCase()
    
    var vin = code.split('-');
    var model = vin[0]?.substring(0, 2).toUpperCase();
    if (vin.length != 5 && !(vin.length == 4 && (model[1] == 'C' || model[1] == 'E' || model[1] == 'F'))) {
      console.log("inavlide")
      setError('VIN number is invalid!')
      return false;
    }

    setLoading(true);


    setCode(code.toUpperCase());
    var cylinder = vin[0]?.substring(2, 3).toUpperCase();
    var priceRange = vin[1]?.toUpperCase();
    var door = vin[2]?.toUpperCase();
    var productDate = vin[3]?.toUpperCase();
    var buildNumber = vin[4]?.toUpperCase();

    var Rmodel = "";
    var Rcylinder = "";
    var RpriceRange = "";
    var Rdoor = "";
    var RproductDate = "";
    var RbuildNumber = "";

    // model check
    if (model[0]) {
      if (model[0] == "V") {
        Rmodel += "Valiant " + model + " Model";

      } else if (model[0] == "C") {
        Rmodel += "Chrysler " + model + " Model";
      } else {
        Rmodel += "--- Unknown ---";
      }
    } else {
      Rmodel += "--- Unknown ---";
    }

    // cylinder type check
    if (!isNaN(cylinder)) {
      if (1 > cylinder || cylinder > 8) {
        Rcylinder = "--- Unknown ---";
      } else {
        if(cylinder == 7 && (model[1] == 'C' || model[1] == 'E' || model[1] == 'F')){
          Rcylinder = "6 Cylinder HP Manual transmision";
        } else if(cylinder == 8 && (model[1] == 'C' || model[1] == 'E' || model[1] == 'F')) {
          Rcylinder = "6 Cylinder HP Auto transmision";
        } else {
          Rcylinder = cylinderType[cylinder];
        }
      }
    } else {
      Rcylinder = "--- Unknown ---";
    }


    //price check 
    if (typeof priceType[priceRange] != 'undefined') {
      RpriceRange = priceType[priceRange];
    } else {
      RpriceRange = '--- Unknown ---';
    }

    // factory door type check
    // door
    if (!isNaN(door)) {
      var doorFlag = false;
      doorType.map((d) => {
        if (d == door) {
          doorFlag = true
        }
      })
      if (doorFlag) {
        if (door == 22 || door == 20) {
          Rdoor = "Utility";
        } else if (door == 23) {
          Rdoor = "2 Door Hardtop (Long Wheel Base)";
        } else if (door == 29) {
          Rdoor = "2 Door Charger (Short Wheel Base)";
        } else if (door == 41) {
          Rdoor = "4 Door Segan";
        } else if (door == 45) {
          Rdoor = "4 Door Wagon";
        } else if (door == 21) {
          Rdoor = "2 Door HardTop";
        }
      } else {
        Rdoor = '--- Unknown ---';
      }
    } else {
      Rdoor = '--- Unknown ---';
    }

    //production date check

    var proYear = productDate.substring(0, productDate.length - 3);
    var proMonth = productDate.substring(productDate.length - 1, productDate.length)

    var proYearMonth = productDate.match(/[a-zA-Z]+/g) ? productDate.match(/[a-zA-Z]+/g)[0] : '';
    var proDate = productDate.replace(/\D/g, "");

    console.log(proYearMonth, proDate)
    if( model[1] == 'C' || model[1] == 'E' || model[1] == 'F'){
      // production sequence 
      if (isNaN(productDate)) {
        RbuildNumber = '--- Unknown ---';
      } else {
        RbuildNumber = "Sequential Build Number \n " + Number(productDate.toUpperCase().substring(0, 5)) + "th of its type in the build sequence"
      }
    } else {
      // production sequence 
      if (isNaN(buildNumber)) {
        RbuildNumber = '--- Unknown ---';
      } else {
        RbuildNumber = "Sequential Build Number \n " + Number(buildNumber.toUpperCase().substring(0, 5)) + "th of its type in the build sequence"
      }

      if (proDate < 1 || proDate > 31 || proYearMonth.length > 3 || proYearMonth.length < 2) {
        RproductDate = '--- Unknown ---';
      } else {
        var FaTz = genCharArray('A', 'Z');
        var startYear = 1970;
        proYear = proYearMonth.substring(0, proYearMonth.length - 1);
  
        proYear = proYear.split("").reverse().join("")
        console.log(proYear);
        var year = 0;
        for (var i = 0; i < proYear.length; i++) {
          year += (FaTz.indexOf(proYear[i]) + 1) * Math.pow(26, i);
        }
        console.log(year, 1969 + year);
        var d = new Date();
        if ((1969 + year) > d.getFullYear()) {
          RproductDate = 'Invalid date';
        } else {
          RproductDate = '' + proDate + "th";
          RproductDate += ' ' + productionMonth[proYearMonth[proYearMonth.length - 1]];
          RproductDate += ', ' + (1969 + year) + " Build Date";
        }
      }
    }
  
    

    var slash = code.substring(6, 7);
    var minus = code.substring(11, 12);
    var image = "";
    var imageType = vin[0]?.substring(0, 2).toUpperCase() + vin[2]?.toUpperCase();
    if (typeof carImage[imageType] != 'undefined') {
      image = carImage[imageType];
    }
    setTimeout(() => {
      setError('')
      
      if(model[1] == 'C' || model[1] == 'E' || model[1] == 'F'){
        setResult({
          Rmodel: Rmodel,
          Rcylinder: Rcylinder,
          RpriceRange: RpriceRange,
          Rdoor: Rdoor,
          RproductDate: RbuildNumber,
          RbuildNumber: "",
        })  
        setQuery({
          model: vin[0]?.substring(0, 2).toUpperCase(),
          cylinder: vin[0]?.substring(2, 3).toUpperCase(),
          priceRange: vin[1]?.toUpperCase(),
          door: vin[2]?.toUpperCase(),
          productDate: vin[3]?.toUpperCase().substring(0, 5),
          buildNumber: '',
          image: image
        })
        setCode(vin[0]?.toUpperCase()+'-'+vin[1]?.toUpperCase()+"-"+vin[2]?.toUpperCase()+'-'+vin[3]?.toUpperCase().substring(0, 5))
      } else {
        setQuery({
          model: vin[0]?.substring(0, 2).toUpperCase(),
          cylinder: vin[0]?.substring(2, 3).toUpperCase(),
          priceRange: vin[1]?.toUpperCase(),
          door: vin[2]?.toUpperCase(),
          productDate: vin[3]?.toUpperCase(),
          buildNumber: vin[4]?.toUpperCase().substring(0, 5),
          image: image
        })
        setResult({
          Rmodel: Rmodel,
          Rcylinder: Rcylinder,
          RpriceRange: RpriceRange,
          Rdoor: Rdoor,
          RproductDate: RproductDate,
          RbuildNumber: RbuildNumber,
        })
        setCode(vin[0]?.toUpperCase()+'-'+vin[1]?.toUpperCase()+"-"+vin[2]?.toUpperCase()+'-'+vin[3]?.toUpperCase()+'-'+vin[4]?.toUpperCase().substring(0, 5))
      }
      setLoading(false);
    }, 1500)
  };
  const checkValidate = (piece, length, type) => {
    var reg = new RegExp("/^\d+$/");

    console.log(piece, Number(piece), reg.test(Number(piece)), "in validate");
    if(piece.length == length){
      if(type == 'string'){
        if(piece.match("^[a-zA-Z]+$")){
          return true;
        } else {
          return false;
        }
      } else if(type == 'number') {
        if(!isNaN(Number(piece))){
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
  const _validate = (vin, value) => {
    console.log(vin.slice(0, 2), 'validate');
    if(checkValidate(vin.slice(0, 2), 2, 'string')){
      console.log(vin.slice(0, 2), 'vvj6alidate pass')
    } else {
      console.log(vin.slice(0, 2), 'validate not pass')
    }
  };
  const checkVinCode = (e) => {
    setResult({});

    console.log(e.nativeEvent.key);
    
    var v = e.nativeEvent.key;
    
    var Ccode = code;
    console.log(v.match("^[a-zA-Z0-9.]"));
    if(v.match("^[A-Za-z0-9][A-Za-z0-9!@#$%^&*]*$") && v.length == 1 && v !='.'){
      console.log(v, 'pass');
      setError('Pass');
      if(Ccode.length > 18){
        setCode(code);
        setError('Ccode.length > 20');
        setError('Too Many Letters');
      } else {
        setError('');
        Ccode += v.toUpperCase();
        if(Ccode.length == 3 || Ccode.length == 5 || Ccode.length == 8 || Ccode.length == 13){
          Ccode += '-';
        }
        setCode(Ccode);
        setError('Set');
      }
    } else if(v.toLowerCase() == 'Backspace'.toLowerCase()){
      console.log('--remove')
      Ccode = Ccode.slice(0, Ccode.length-1)
      setCode(Ccode);
      setError('Invalid letter');
    }
  };
  const autoCompleteVin = (txt) => {
    var temp = "";
    var flag = false;
    console.log(txt);
    var findArrow = txt.split('-');
    if(findArrow.length >= 5){
      for(var i = 0; i < findArrow.length; i++){
        if(findArrow[i].length != 3 && i == 0){
          setError('Invalid Vin Code');
        }
        if(findArrow[i].length != 1 && i == 1){
          setError('Invalid Vin Code');
        }
        if(findArrow[i].length != 2 && i == 2){
          setError('Invalid Vin Code');
        }
        if(findArrow[i].length != 4 && i == 3){
          setError('Invalid Vin Code');
        }
      }
    } else {
      for(var i = 0; i < txt.length; i++){
        if(i == 3 && txt[i] != '-'){
          console.log('insert - at 3')
          if(i == txt.length - 1){
            temp += '-'+txt[i];
          } else {
            temp += txt[i];
          }
          
          flag = true;
          continue;
        }
        if(i == 5 && txt[i] != '-'){
          console.log('insert - at 5')
          if(i == txt.length - 1){
            temp += '-'+txt[i];
          } else {
            temp += txt[i];
          }
          flag = true;
          continue;
        }
        if(i == 8 && txt[i] != '-'){
          console.log('insert - at 8')
          if(i == txt.length - 1){
            temp += '-'+txt[i];
          } else {
            temp += txt[i];
          }
          flag = true;
          continue;
        }
        if(i == 13 && txt[i] != '-' && !(txt[1].toUpperCase() == 'C' || txt[1].toUpperCase() == 'E' || txt[1].toUpperCase() == 'F')){
          console.log('insert - at 13')
          if(i == txt.length - 1){
            temp += '-'+txt[i];
          } else {
            temp += txt[i];
          }
          flag = true;
          continue;
        }
        temp+= txt[i];
      }
    }
    if(flag){
      setCode(temp.toUpperCase());
    }
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 350 }}
    >
      <View style={styles.componentsSection}>
      <Text style={styles.componentSectionHeader}>Decoder</Text>
      <Text style={styles.helpSectionHeader}>Type VIN number eg. VJ6-H-29-DB26-00030</Text>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Type VIN number eg. VJ6-H-29-DBE26-00030"
            value={code}
            onChangeText={txt=>{setCode(txt); autoCompleteVin(txt)}}
            onKeyPress={()=>{setResult({}); setQuery({}); setError('')}}
          />
          {
            code?<TouchableOpacity style={{position: 'absolute', top: 14, right: 15}} onPress={()=>{setCode('')}}>
            <Icon name='closecircle' size={20} color={'gray'}/>
          </TouchableOpacity>: null
          }
          
        </View>
        <Text style={styles.errText}>{err}</Text>
        <View style={styles.decodeBtn}>
          {
            loading? <ActivityIndicator size="large" color={Constants.colors.primary} /> :<Button
            onPress={_decode}
            title="Decode"
            color={Constants.colors.primary}
            accessibilityLabel="Learn more about this purple button"
          />
          }
        </View>
      </View>
      {
        result ?
        <View style={styles.resultSection}>
          <Text style={styles.componentSectionHeader}>Result</Text>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center"}}>
            <Text style={styles.letter}>{query?.model}</Text>
            <Text style={styles.resultLetter}>{result?.Rmodel}</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center"}}>
            <Text style={styles.letter}>{query?.cylinder}</Text>
            <Text style={styles.resultLetter}>{result?.Rcylinder}</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center"}}>
            <Text style={styles.letter}>{query.priceRange}</Text>
            <Text style={styles.resultLetter}>{result.RpriceRange}</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center"}}>
            <Text style={styles.letter}>{query?.door}</Text>
            <Text style={styles.resultLetter}>{result?.Rdoor}</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center"}}>
            <Text style={styles.letter}>{query?.productDate}</Text>
            <Text style={styles.resultLetter}>{result?.RproductDate}</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: "center"}}>
            <Text style={styles.letter}>{query?.buildNumber}</Text>
            <Text style={styles.resultLetter}>{result?.RbuildNumber}</Text>
          </View>
          {
            query ?  query.image ? <Image source={query.image} style={styles.image} /> : null : null
          }
          
        </View> : null }
        <Footer />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    width: '80%',
    height: '40%',
    resizeMode: 'contain'
  },
  resultHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  },
  letter: {
    width: '30%',
    fontSize: 17,
    fontWeight: 'bold',
    height: 25,
    textAlignVertical: 'center'
  },
  resultLetter: {
    width: '70%',
    fontSize: 14,
    textAlignVertical: 'center'
  },
  resultSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: '10%',
    marginBottom: 20,
    borderRadius: 5,
  },
  errText: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 10
  },
  input: {
    borderColor: Constants.colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  componentsSection: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 24,
    marginBottom: 20,
  },
  helpSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 12,
    marginBottom: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  decodeBtn: {
    marginVertical: 8,
    width: '47%',
    alignSelf: 'center',
    overflow: 'hidden'
  },
  demoItem: {
    marginVertical: 15,
  },
});
