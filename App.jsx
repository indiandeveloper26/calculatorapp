import React from 'react'
import { Text, View } from 'react-native'
import Cal from './src/Cal';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Sahil from './src/Sahil';
import Calculator from './src/Calcu';

const Stack = createNativeStackNavigator();

function App() {
  return (
<>
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Cal} />
        <Stack.Screen name="cal" component={Calculator} />

        <Stack.Screen name="ss" component={Sahil} />

      </Stack.Navigator>
    </NavigationContainer>
<View>

  <Text className=' bg-red-900 '>

    hwllo tailwcs d cds
  </Text>
</View>

</>
  )
}

export default App