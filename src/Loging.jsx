import React, { useEffect, useState } from 'react'

import { Text,View, TouchableOpacity,TextInput, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Modal, StyleSheet, Pressable,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


function Loging() {
  const [modalVisible, setModalVisible] = useState(false);
    const [tokenn, settokenn] = useState();
    const navigationn = useNavigation();
   const [name, setName] = useState('');
     const [phone, setPhone] = useState('');
     const [phonee, setPhonee] = useState('');
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
   
  
     const handleSignUp = async() => {
      //  if (!phone) {
      //    Alert.alert('Error', 'Please fill out both fields.');
      //    return;
      //  }
   
    //    if (phone.length !== 10) {
    //      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
    //      return;
    //    }
   
      //  Alert.alert('Success', `Welcome, ${name}! Your phone number is ${phone}.`);
        if (tokenn==name) {
            navigation.navigate('chat')
        }
        else{
            Alert.alert('invelid password plese correct password');

        }
     };
   

     const fortget=async()=>{
      try {
        await AsyncStorage.setItem('name', phonee);
        Alert.alert("password sussesfull reset")
      } catch (error) {
        // Error saving data
    
        console.warn(error)
      }
     }
   
   
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
    <Text className="text-3xl font-bold mb-6">inter password</Text>

    <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder="Enter your phone number"
        value={name}
        onChangeText={setName}
        keyboardType="phone-pad"
       
      />
<Text>{name}</Text>
    <Text>{tokenn}</Text>

<TouchableOpacity
      className="bg-blue-500  my-5  p-4 rounded-lg w-full"
      onPress={handleSignUp}
    >
      <Text className="text-center text-white font-bold">loging</Text>
    </TouchableOpacity>
        
<TouchableOpacity
      className="bg-blue-500  my-5  p-4 rounded-lg w-full"
      onPress={()=>setModalVisible(!modalVisible)}
    >
      <Text className="text-center text-white font-bold">forget password</Text>
    </TouchableOpacity>
    <TouchableOpacity
      className="bg-blue-500 my-5  p-4 rounded-lg w-full"
     
    >
      
      <Text className="text-center text-white font-bold">singupoo</Text>
    </TouchableOpacity>

    {/* <TouchableOpacity
      className="bg-blue-500 my-5  p-4 rounded-lg w-full"
      onPress={()=>navigationn.navigate('soc')}
    >
      <Text className="text-center text-white font-bold">socketid</Text>
    </TouchableOpacity> */}





 

 

<Modal
        animationType="slide" 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>add new user</Text>
            <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder="Enter your phone number"
        value={phonee}
        onChangeText={setPhonee}
        keyboardType="phone-pad"
        maxLength={10}
      />
        <View className=' flex-row'>
        <Pressable className=' mx-4'
              style={[styles.button, styles.buttonClose]}
              onPress={fortget }>
              <Text style={styles.textStyle}>add user</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=> setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}> close</Text>
            </Pressable>

        </View>

          </View>
        </View>
      </Modal>

      
   <Text> fsd
{phone}
   </Text>
      
  
  </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Loging