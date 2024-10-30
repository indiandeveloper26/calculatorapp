import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, TouchableOpacity,TextInput, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';






const Singup = () => {
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

 const getlocal=async()=>{
  try {
    const value = await AsyncStorage.getItem('name');
    settoken(value)
    console.warn(value)
  } catch (error) {
    // Error saving data
    console.warn(error)
  }
 }

 const removetk=async()=>{
  try {
    const value = await AsyncStorage.removeItem('name');
    settoken(value)
    console.warn(value)
  } catch (error) {
    // Error saving data
    console.warn(error)
  }
 }
    const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
const [answer, setanswer] = useState();

  const handleSignUp = async() => {
    if (!name || !phone || !selectedOption || !answer) {
      Alert.alert('Error', 'Please fill out both fields.');
      return;
    }

    if (phone.length !== 10) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      return;
    }


    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('question', selectedOption);
      await AsyncStorage.setItem('answer', name);
      console.warn('settoken')
    } catch (error) {
      // Error saving data
  
      console.warn(error)
    }
    navigation.navigate('chat')
  };

  const socket=()=>{
    let no=6392831776
    navigation.navigate("chatlist",{'namee':"sahil inida",'phone':no})
  }


  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-3xl font-bold mb-6">Sign Up</Text>

      <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder="password"
        value={name}
        
         keyboardType="numeric"
        onChangeText={setName}
      />

      <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        maxLength={10}
      />
    
    <View  className=' my-0  w-[82%]   '>
      <Text >Select an forget password question:</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        
      >
       
        <Picker.Item label="your best friend" value="your best friend" />
        <Picker.Item label="your childwood name" value="your childwood name" />

      </Picker>
    
    </View>
    <TextInput
        className="w-full bg-white p-4 mb-4 rounded-lg border border-gray-300"
        placeholder={selectedOption}
        value={answer}
        onChangeText={setanswer}
        keyboardType="phone-pad"
        maxLength={10}
      />
    {/* <Text>{answer}</Text> */}

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg w-full"
        onPress={handleSignUp}
      >
        <Text className="text-center text-white font-bold">Sign Up</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg w-full"
        onPress={socket}
      >
        <Text className="text-center text-white font-bold"> socekt </Text>
      </TouchableOpacity> */}

{/* 
      <Button
      title='settoken'
      onPress={setlocal}
      />
    */}

   {/* <Button
      title='gettoken'
      onPress={getlocal}
      />
         <Button
      title='remove'
      onPress={removetk}
      /> */}

<Text>
  {selectedOption}
</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
  },
});

export default Singup;
