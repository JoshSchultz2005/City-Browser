import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
import Button from './Button';
import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function ArtScreen() {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.Image} />
      <Button style={styles.button}
       onPress={() => WebBrowser.openBrowserAsync(source=('https://www.artic.edu/'))}>
          More Information
      </Button>
    </View>
  );
}

function MileScreen() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.Image} />
      <Button style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync(source=('https://www.themagnificentmile.com/'))}
      >
          More Information
      </Button>
    </View>
  );
}

function PierScreen() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.Image} />
      <Button style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync(source=('https://www.willistower.com/'))}
      >
          More Information
      </Button>
    </View>
  );
}

function WaterScreen() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.Image} />
      <Button style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync(source=('https://navypier.org/'))}
      >
          More Information
      </Button>
    </View>
  );
}

function WillisScreen() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.Image} />
      <Button style={styles.button}
      onPress={() => WebBrowser.openBrowserAsync(source=('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html'))}
      >
          More Information
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Art institute of Chicago" 
          component={ArtScreen}
          options={{ title: 'Art institute of Chicago' }}
        />
         <Drawer.Screen 
          name="Magnificent Mile" 
          component={MileScreen}
          options={{ title: 'Magnificent Mile' }}
        />
         <Drawer.Screen 
          name="Navy Pier" 
          component={PierScreen}
          options={{ title: 'Navy Pier' }}
        />
         <Drawer.Screen 
          name="Water Tower" 
          component={WaterScreen}
          options={{ title: 'Water Tower' }}
        />
         <Drawer.Screen 
          name="Willis Tower" 
          component={WillisScreen}
          options={{ title: 'Willis Tower' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Image: {
    width: 240,
    height: 360
  },
  button: {
    margin: 15,
  },
});
