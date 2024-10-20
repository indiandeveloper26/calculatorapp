import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
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
        {'name':"sonali",'number':'9628988075'},
        {'name':"sahil",'number':'225423534'},
        {'name':"vivek",'number':'69854319'},
        {'name':"sahil",'number':'143523459'},
        {'name':"hariom",'number':'20432523'},
        {'name':"sahil",'number':'223452340'},
        {'name':"sahil",'number':'143523459'},
        {'name':"akkuu",'number':'8565859991'},
       
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
          {item.name}
        </Text>
        <Text>
          {item.number}
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


