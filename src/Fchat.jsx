import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'

function Socket({route }) {
    const { number,name} = route.params
    console.warn(number)

    const img = {uri: 'data:image/jpeg;base64,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'};

  return (
<View>
<ImageBackground       source={img} className='  h-[99%]'
 resizeMode="cover" >
  

  <ScrollView>

  <Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>
<Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>
<Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>
<Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>
<Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>
<Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>
<Text style={styles.text}>Inside</Text>

<Text className=' text-2xl text-black'>
  {name}
</Text>
<Text className=' text-black text-2xl'>
  {number}
</Text>

  </ScrollView>
    </ImageBackground>

<Image
 className=' my-4 w-[44] h-[52] rounded-md'
        source={require('../publice/user.png')}
      />
    <Text className='  text-green-500  text-2xl'>
{number} 

{/* {fsad
    `this is name${namee} this is your phone number${phone}`
} */}

    </Text>

</View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Socket