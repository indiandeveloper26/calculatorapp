import React, { useEffect, useState } from 'react'

import { Text,View, TouchableOpacity,TextInput, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

import { Modal, StyleSheet, Pressable,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


function Loging() {
  const [modalVisible, setModalVisible] = useState(false);
    const [tokenn, settokenn] = useState();
    const navigationn = useNavigation();
   const [name, setName] = useState('');
     const [phone, setPhone] = useState('');
     const [answer, setanswer] = useState();
     const [phonee, setPhonee] = useState('');
     const [question, setquestion] = useState();
     const [showpas, setshowpas] = useState();
     const [anser, setanser] = useState();
     const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const getlocal=async()=>{
            try {
              const ques = await AsyncStorage.getItem('question');
              const value = await AsyncStorage.getItem('name');
              const ans = await AsyncStorage.getItem('answer');
              settokenn(value)
              setquestion(ques)
              setanswer(ans)
              
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
   
   const submit=async()=>{
    // Alert.alert("are uyou real")            
     try {
         if (selectedOption==question) {
            if (anser==answer) {
              //  Alert.alert("are uyou real")            
               setModalVisible(true)
              }
              else{
                Alert.alert("are anser not match")  
              }
         }

         else{
          Alert.alert(" your question not match")  
         }
     } catch (error) {
      
     }
     }
  return (
    <View className="flex-1 justify-center items-center mb-[35%]      mx-8">
    <Text className="text-3xl font-bold mb-6">inter password</Text>
<Text>{tokenn}</Text>
    <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder="Enter your phone number"
        value={name}
        onChangeText={setName}
        keyboardType="phone-pad"
       
      />
{/* <Text>{name}</Text>
<Text>{question}</Text>
<Text>{answer}</Text>
    <Text>{tokenn}</Text> */}

<TouchableOpacity
      className="bg-blue-500  my-5  p-4 rounded-lg w-full"
      onPress={handleSignUp}
    >
      <Text className="text-center text-white font-bold">loging</Text>
    </TouchableOpacity>

    <TouchableOpacity
      className="bg-blue-500  my-5  p-4 rounded-lg w-full"
      onPress={()=>navigation.navigate('log')}
    >
      <Text className="text-center text-white font-bold">singup</Text>
    </TouchableOpacity>
        
        
{/* <TouchableOpacity
      className="bg-blue-500  my-5  p-4 rounded-lg w-full"
      onPress={()=>setModalVisible(!modalVisible)}
    >
      <Text className="text-center text-white font-bold">forget password</Text>
    </TouchableOpacity  > */}
            



            <Pressable className='  ' onPress={()=>setshowpas(!showpas)}>
  <Text className=' text-[16px] text-blue-600 underline '>forget password</Text>
</Pressable>


   {
    showpas?<Text> <View>
    <View  className='   w-[82%]   '>
      <Text > forget password answer 😎:</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        
      >
        <Picker.Item label="select your question" value="select your question" className=' bg-green-300' />
        <Picker.Item label="your best friend" value="your best friend" />
        <Picker.Item label="your childwood name" value="your childwood name" />
   
      </Picker>
   
   
    </View>
   
    <TextInput
        className=" bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder='inter your answer'
        value={anser}
        onChangeText={setanser}
        keyboardType="phone-pad"
        maxLength={10}
      />
   
      <View>
       <Pressable 
              className='   border-2 border-green-500  rounded-xl '
              onPress={submit}>
              <Text className='  m-auto text-2xl rounded-[123]'> submit </Text>
            </Pressable>
       </View> 
    </View> </Text>:null
   }
 







 

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
        <Pressable className=' mx-4' onPress={fortget}
              style={[styles.button, styles.buttonClose]}
            >
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







   {/* <TouchableOpacity
      className="bg-blue-500 my-5  p-4 rounded-lg w-full"
      onPress={()=>navigationn.navigate('soc')}
    >
      <Text className="text-center text-white font-bold">socketid</Text>
    </TouchableOpacity> */}