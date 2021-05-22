import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import Constants from '../../utils/global';

const slides = [
  {
    key: 1,
    title: 'Welcome',
    text: 'Welcome to our Chrysler Valiant Decoder',
    image: Constants.images.secondaryLogo,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'How it works',
    text: "Based on one of our previous articles \"VIN Decoding - Australian Mopars\". \n You can now use this form to decode the VIN (or body) number of your Australian built Mopar.Simply type in the VIN number in the box below and press the Decode button.",
    image: Constants.images.howitworks,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: "Let's Start",
    text: "Note: This function will only handle Australian built Chryslers and Valiants from the \"VC\" onwards.",
    image: Constants.images.startIntro,
    backgroundColor: '#22bcb5',
  }
];

export default function IntroView(props) {
  const rnsUrl = 'https://reactnativestarter.com';
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log(`Don't know how to open URI: ${rnsUrl}`);
      }
    });
  };

  const _renderItem = ({ item }) => {
    return (
      <View style={
        item.title == "Welcome"
          ?
          styles.welcome :
        item.title == "How it works" ?
          styles.howWorks :
          styles.start
      }>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    props.navigation.navigate('Homes');
    console.log("done");
  }

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      showSkipButton
      showNextButton
    />
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 36,
    color: 'white',
    marginVertical: 20,
    textAlignVertical: 'center',
    height: '10%'
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    height: '30%',
    marginHorizontal: '5%'
  },
  image: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain'
  },
  welcome: {
    backgroundColor: '#470a68',
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  howWorks: {
    backgroundColor: '#470a68',
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  start: {
    backgroundColor: '#470a68',
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
});
