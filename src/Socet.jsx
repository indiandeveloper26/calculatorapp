import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, FlatList, TouchableOpacity, ScrollView, View, Alert } from 'react-native';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Update to your server's URL

const Socet = ({route }) => {
  const { item } = route.params; // Extract the item from route.params


    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const roomName = 'myRoom'; // Example room name

    let caht2=[
      'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',
      'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',
      'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',
      'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',
      'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',  'sahil how u ',

    ]
    let caht1=[
                'akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya',
'akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya',
'akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya',
'akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya',
'akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya','akku u are chhutiya',
    ]


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
       <Text  className=' ' >
        data
        {item}
       </Text>

        
 <ScrollView className=''>
<View className=' flex-row'>
<View className='  ml-9  '>
      
      {
              
        caht1.map((Tt)=>{
          return(

            <>
            <Text  className='   text-black  my-4 p-2 bg-green-200'>{Tt}</Text>
            </>
          )
        })
      
      }
    
  </View>
  <View className=' ml-[22%]'>

{
    
caht2.map((Tt)=>{
return(

  <>
  <Text  className=' bg-pink-400 my-4 text-white'>{Tt}</Text>
  </>
)
})

}

</View>
</View>

 </ScrollView>
           

       

      
        <View className=' flex-row border-2  rounded-md      p-2   stroke-red-500   '>
        <TextInput className='  '
                placeholder="Type a message"
                value={message}
                onChangeText={setMessage}
               
            />
                       <TouchableOpacity className='  flex rounded-md justify-center items-center w-[22%] bg-green-300 rounded-e-md ml-[42%]  ' > 
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