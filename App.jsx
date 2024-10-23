import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Sahil from './src/Sahil';
import Singup from './src/Singup';
import Chat from './src/Chat';
import Call from './src/Cal';
import Socket from './src/Socet';
import Loging from './src/Loging';
import Fchat from './src/Fchat';
import Socet from './src/Socet';
// import icon from 'react-native-vector-icons/FontAwesome'
// import icon2 from 'react-native-vector-icons/AntDesign'
const Stack = createNativeStackNavigator();

function App() {
  return (
<>

<NavigationContainer>
      <Stack.Navigator>
      

      <Stack.Screen name="call" component={Call} />
      <Stack.Screen name="socket" component={Socket} />
      <Stack.Screen name="loging" component={Loging} />


        <Stack.Screen name="log" component={Singup} />
        <Stack.Screen name="chat" component={Chat} />
        <Stack.Screen name="soc" component={Socet} />

        <Stack.Screen name="ctt" component={Fchat} />

      </Stack.Navigator>
    </NavigationContainer>
{/* <View>

  <Text>
    fsdafsda
  </Text>
</View> */}

</>
  )
}

export default App