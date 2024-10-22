import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Chat() {
  const navigation=useNavigation()

  const [token, settoken] = useState();

  useEffect(() => {
    
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

     getlocal()
  }, []);

    const chatlist=[
      '639283176','5346543446','545645656','639283176',
       
    ]

//     const gochat=(item)=>{
//       // navigation.navigate('ctt')
//      try {
// console.warn(item.number)
//       navigation.navigate('ctt',{'number',item.number})

//      } catch (error) {
//       console.warn(error)
//      }
//     }

const adduser=()=>{
    chatlist.push('9898828571')
    console.warn(chatlist)
}

  return (
<>

<View className=' my-2'>
   {/* <Text>this is chat here  plese typing now</Text>



 <Text>

  {token}
 </Text> */}




{/* <View className=' '>
<View className='   w-[55] flex justify-center  items-center bg-red-200 h-[71] overflow-hidden  rounded-full'>

<Image
 className=' my-4 w-[44] h-[52] rounded-md'
        source={require('../publice/user.png')}
      />

    
</View>
<Button
title='go'
onPress={navigation.navigate('fchat')}
/>
</View> */}
 

</View>
<TouchableOpacity onPress={adduser} className=' ml-[80%] w-[55] bg-red-500 ' >
        <Text className=' text-2xl text-white'>add  </Text>
      </TouchableOpacity>

<ScrollView>
{
  chatlist.map((item)=>{
    return (
      <>
      <View>
      <View className='   w-[55] flex justify-center  items-center bg-red-200 h-[71] overflow-hidden  rounded-full'>

<Image
 className=' my-4 w-[44] h-[52] rounded-md'
        source={require('../publice/user.png')}
      />

    
</View>
        <Text>
          {item}
        </Text>
      
        <Button
        title='go chat'
        onPress={()=>navigation.navigate('ctt',{number:item.number,name:item.name})}
        />
      </View>
      </>
    )
   
  })
}
</ScrollView>
</>  )
}

export default Chat


