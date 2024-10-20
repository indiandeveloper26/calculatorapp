import React from 'react'
import { Text, View } from 'react-native'

function Socket({route }) {
    const { namee ,phone} = route.params

  return (
<View>

    <Text className='  text-green-500  text-2xl'>


{
    `this is name${namee} this is your phone number${phone}`
}

    </Text>
</View>
  )
}

export default Socket