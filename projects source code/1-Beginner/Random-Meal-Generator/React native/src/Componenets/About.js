import React from 'react';
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// icon pack
import Icon from 'react-native-vector-icons/MaterialIcons';
export const About = () => {
  const navigation = useNavigation();
  return (
    <View flex={1} style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#FF8A00',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 36,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#f5f6fa',
          padding: 20,
          borderRadius: 10,
          elevation: 5,
          marginBottom: 20,
          marginHorizontal: 15,
        }}>
        <View style={{alignItems: 'center', margin: 20}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              overflow: 'hidden',
              borderWidth: 3,
              borderColor: '#FF8A00',
            }}
            source={require('../img/ilies_ouldmenouer.jpg')}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            Created by :
            <Text
              style={{color: '#FF8A00'}}
              onPress={() => Linking.openURL('https://github.com/ilyasxdz')}>
              ilies Ouldmenouer
            </Text>
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            Contact me at :
            <Text
              style={{color: '#FF8A00'}}
              onPress={() => Linking.openURL('mailto:ilyasdzair1@gmail.com')}>
              ilyasdzair1@gmail.com
            </Text>
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            UI inspired from :
            <Text
              onPress={() =>
                Linking.openURL('https://dribbble.com/shots/8132399-Food-app')
              }
              style={{color: '#FF8A00'}}>
              dribbble
            </Text>
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            App Idea inspired from :
            <Text
              onPress={() =>
                Linking.openURL(
                  'https://github.com/ilyasxdz/app-ideas/blob/master/Projects/1-Beginner/Random-Meal-Generator.md',
                )
              }
              style={{color: '#FF8A00'}}>
              Random-Meal-Generator
            </Text>
          </Text>
        </View>
      </View>
      <View style={{}}>
        <Text>Made with ❤ and React native</Text>
      </View>
    </View>
  );
};
