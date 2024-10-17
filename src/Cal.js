import React from 'react'
import { Button, Text, View } from 'react-native'

function Cal({navigation}) {
  return (
<>

<View>
    <Text>

    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('cal')}
      />
        hii cal
    </Text>
</View>
</>  )
}

export default Cal