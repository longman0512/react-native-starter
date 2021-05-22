import React from 'react';
import { StyleSheet, Button, Image, View, Text, ScrollView, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';
import Constants from '../../utils/global';
import Footer from '../components/FooterContainer';

import { Dropdown } from '../../components';

export default function AboutScreen(props) {
  const route = useRoute();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 250 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.mainHeader}>About PlumKrazy</Text>
        <Text style={{fontSize: 16, marginBottom: 8}}>
          PlumKrazy Garage is Australia & New Zealand's number 1 choice for reproduction parts for your Chrysler Valiant. We now stock over 5,000 reproduction parts on the shelf for our valued customers and our online store is a "1 stop shop" for all things Chrysler. We also ship worldwide daily.
          PlumKrazy Garage has been an ever-evolving business taking us by surprise in popularity and growth since its infancy.
        </Text>
        <Image source={Constants.images.primaryLogo} style={styles.image} />
        <Text style={styles.componentSectionHeader}>The PlumKrazy story</Text>
        <Text style={{fontSize: 16, marginBottom: 8}}>
          Jason our Executive Director has been a Chrysler enthusiast since his early 20's, spending most of his time restoring a 67 VC Chrysler Valiant with his best mate Rocco the Italian Stallion. Every spare moment was spent in the shed or out on the street cutting hot laps and entertaining the hoons on a Thursday night. Jason also inherits his passion for Classic Crysler Valiants from his Grandfather, Uncle and Father who were also lovers and owners of the Classic Mopar.
        </Text>
        <Text style={{fontSize: 16, marginBottom: 8}}>
           business was started as a simple idea when Jason was restoring "Violet" his 72 VH 770 Valiant Charger. Jason found most parts were hard to find, obsolete or you had to settle for a second-hand part that wasn't exactly what you were after.
        </Text>
        <Text style={{fontSize: 16, marginBottom: 8}}>
        PlumKrazy started as a Decals supplier, making Dash Facia's and Dealership Decals, then the beast was released and Jason's idea quickly turned into a business, although it's not just a business, it is still Jason's passion.
        </Text>
        <Text style={{fontSize: 16, marginBottom: 8}}>
        PlumKrazy Garage and Jason are well known in the local Chrysler scene, through being an active club member of the East Coast Chryslers and Classics Club, sponsor of many a drag car and also supporting the local community and small businesses of Bundaberg.
        </Text>
        <Text style={{fontSize: 16}}>
        At PlumKrazy Garage we highly value integrity and honesty, we aren't just out there to make a dollar. We are about providing a service you won't find anywhere else, a service to keep your Classic Chrysler Valiant on the road.
        </Text>
        
      </View>
      
      <View style={styles.forumSection}>
        <View style={{display: 'flex', alignItems: 'center', flexDirection: "row", justifyContent: 'space-between', flex: 1}}>
          <View style={styles.avatarContainer}>
            <Image source={Constants.images.director} style={styles.avatar} />
          </View>
          <Text style={{flex: 0.8, fontSize: 16, fontStyle: 'italic'}}>
            "If we wouldn't install the part on our own Classic Chrysler, we wouldn't expect our customers to".
          </Text>
        </View>
        <Text style={{width: '100%', textAlign: 'center', marginTop: 20, fontStyle: 'italic'}}>
        - Jason Griffin, Executive Director
        </Text>
      </View>
      <View style={styles.footerSection}>
        <Footer />  
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "white",
    borderColor: 'white',
    borderWidth: 2,
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 86,
    height: 86,
    borderRadius: 86,
    backgroundColor: Constants.colors.primary
  },
  image: {
    width: '60%',
    height: '10%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  mainHeader: {
    fontFamily: fonts.primaryRegular,
    color: Constants.colors.primary,
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center'
  },
  letter: {
    width: '30%',
    fontSize: 17,
    fontWeight: 'bold',
    height: 25,
    textAlignVertical: 'center'
  },
  resultLetter: {
    width: '60%',
    fontSize: 14,
    height: 25,
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
    paddingBottom: 40,
  },
  footerSection: {
    paddingHorizontal: 16,
    marginTop: -50,
    paddingVertical: 24,
    borderRadius: 5,
  },
  componentsSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 20,
    borderRadius: 5,
  },
  forumSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 20,
    borderRadius: 5,
    height: 150
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: Constants.colors.primary,
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
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
