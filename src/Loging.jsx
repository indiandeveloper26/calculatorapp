import React, { useEffect, useState } from 'react'

import { Text,View, TouchableOpacity,TextInput, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Loging() {
    const [tokenn, settokenn] = useState();
    const navigationn = useNavigation();

    useEffect(() => {
        const getlocal=async()=>{
            try {
              const value = await AsyncStorage.getItem('name');
              settokenn(value)
              console.warn(tokenn)
            } catch (error) {
              // Error saving data
              console.warn(error)
            }
           }
           getlocal()
      
    }, []);
    

    const [token, settoken] = useState('');


    const setlocal=async()=>{
     try {
       await AsyncStorage.setItem('name', 'tokenhere');
       console.warn('settoken')
     } catch (error) {
       // Error saving data
   
       console.warn(error)
     }
    }
   
  
       const navigation = useNavigation();
   
     const [name, setName] = useState('');
     const [phone, setPhone] = useState('');
   
     const handleSignUp = async() => {
       if (!phone) {
         Alert.alert('Error', 'Please fill out both fields.');
         return;
       }
   
    //    if (phone.length !== 10) {
    //      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
    //      return;
    //    }
   
       Alert.alert('Success', `Welcome, ${name}! Your phone number is ${phone}.`);
        if (tokenn===phone) {
            navigation.navigate('chat')
        }
        else{
            Alert.alert('invelid password plese correct password');

        }
     };
   
   
   
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
    <Text className="text-3xl font-bold mb-6">inter password</Text>

    <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
       
      />

    
<TouchableOpacity
      className="bg-blue-500  my-5  p-4 rounded-lg w-full"
      onPress={handleSignUp}
    >
      <Text className="text-center text-white font-bold">loging</Text>
    </TouchableOpacity>
    <TouchableOpacity
      className="bg-blue-500 my-5  p-4 rounded-lg w-full"
      onPress={()=>navigationn.navigate('log')}
    >
      <Text className="text-center text-white font-bold">singup</Text>
    </TouchableOpacity>




 

 


  
  </View>
  )
}

export default Loging