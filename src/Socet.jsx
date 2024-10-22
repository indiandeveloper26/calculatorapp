import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, FlatList, TouchableOpacity, ScrollView, View, Alert } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Update to your server's URL

const Socet = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const roomName = 'myRoom'; // Example room name

    useEffect(() => {
        socket.emit('joinRoom', roomName);

        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const sendMessage = (e) => {
      e.preventDefault();
  socket.emit('sendMessage',message);
      setMessage('');
  };

  let mess=[
    'dsfasdfasd','fsadfasdf','fsdafasdf',     'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
  ]
  let mess1=[
    'dsfasdfasd','fsadfasdf','fsdafasdf',     'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',    'dsfasdfasd','fsadfasdf','fsdafasdf',
  ]

    return (
        <>
    
 <ScrollView className=' bg-slate-200 my-12'>
 <View className=' gap-10  flex-row h-[80%]'>
 
 <View className=' mx-[22%]'>
 {
     mess.map((ms)=>{
       return(<>

       <Text>

         {ms}
       </Text>
       </>
       
       )
     })
   }

 </View>
  
<View>
{
     mess1.map((ms)=>{
       return(<>

       <Text>

         {ms}
       </Text>
       </>
       
       )
     })
   }
</View>
    
</View> 
 </ScrollView>


      
        <View className=' flex-row    border-2 rounded-md  p-2   stroke-red-500   '>
        <TextInput className='  '
                placeholder="Type a message"
                value={message}
                onChangeText={setMessage}
               
            />
                       <TouchableOpacity className=' bg-green-300 rounded-e-md ml-[42%]  w-[16%]' > 
        <Text className=' px my-4' style={{fontSize:18}}>send</Text>
      </TouchableOpacity>
        </View>
     
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
       
        </>
    );
};

export default Socet;


// import React from 'react'
// import { Text } from 'react-native'

// function Socet() {
//   return (
// <>

// <Text>
//   dsfasd
// </Text>
// </>  )
// }

// export default Socet