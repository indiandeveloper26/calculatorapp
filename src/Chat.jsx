import React, { useEffect, useState } from 'react'
import {   Text, Pressable,Modal, Image, ScrollView,  TouchableOpacity, View, StyleSheet, TextInput, Alert, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userimg } from './Url';


function Chat() {
  const navigation = useNavigation()
  const [phone, setPhone] = useState('');

  const [token, settoken] = useState();



  const [modalVisible, setModalVisible] = useState(false);

  const [chatlistt, setchatlistt] = useState([
    '639283176888', '5346543446', '545645656', '639283176', '545645656', '639283176',

  ]);

  //     const gochat=(item)=>{
  //       // navigation.navigate('ctt')
  //      try {
  // console.warn(item.number)
  //       navigation.navigate('ctt',{'number',item.number})

  //      } catch (error) {
  //       console.warn(error)
  //      }
  //     }

  // useEffect(() => {

  //   const getlocal = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('adduser');
  //       settokenn(value)
  //       console.warn('toekn',value.adduser)
  //     } catch (error) {
  //       // Error saving data
  //       console.warn(error)
  //     }
  //   }

  //   getlocal()
  // }, []);
  const adduser = async() => {
    setchatlistt([...chatlistt, phone])
    setModalVisible(!modalVisible)
    Alert.alert('user added')
    // try {
    //   await AsyncStorage.setItem('adduser',...tokenn,JSON.stringify(phone));
    //   console.warn('settoken')
    // } catch (error) {
    //   // Error saving data
  
    //   console.warn(error)
    // }
  }

  return (
    <>
 


      {/* <View className='  flex-row gap-4 justify-center items-center'>
       
        <Pressable className=' my-4'
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}> add new</Text>
      </Pressable>
      </View> */}


      <ScrollView>
        {
          chatlistt.map((itemm) => {
            return (
              <>
                <TouchableOpacity onPress={()=>navigation.navigate('soc',{"data":itemm})} className=' bg-white   py-4 flex-row'>
                  <View className='3 ml-3 flex justify-center items-center   w-[9%]  rounded-full'>

                  {/* <Image className='  w-[122%] h-14' source={require('../publice/iconn.png')} /> */}
   
                  </View>
              <View className='  '>
              <Text className=' text-black my-4 ml-[11%]'>
                  {itemm}
                </Text>
                <Text>
                  this is u title dsfsdafsd
                </Text>
              </View>
                </TouchableOpacity>
                <View style={styless.line} ></View>

             

              </>
            )
          })
        }
      </ScrollView>


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
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        maxLength={10}
      />
        <View className=' flex-row'>
        <Pressable className=' mx-4'
              style={[styles.button, styles.buttonClose]}
              onPress={adduser }>
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

      {/* <View className=' h-12 bg-red-700'>
<Text>
for bnner adds
</Text>      
</View> */}

<Pressable className=' w-[15%] mx-[45%] my-4'
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}> add new</Text>
      </Pressable>


    </>)
}

const styless = StyleSheet.create({
  line: {
    height: 1,               // Line thickness
    backgroundColor: '#000', // Line color
    marginVertical: 10,      // Spacing above and below the line
  },
});
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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

export default Chat


