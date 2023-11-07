import { View, Text, Image, Button, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const TentDetails = ({ route }) => {

    const navigation = useNavigation()

    const tent = route.params;

    console.log(tent)

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

  return (
    <View className="flex-1 bg-gray-200 dark:bg-gray-900">

    

    <Animated.Image sharedTransitionTag={`image-${tent._id}`} className="w-[100%] h-[270px]" source={{ uri: tent.image }} />
      <Animated.Text entering={FadeInLeft.springify(5).delay(300)} className="text-neutral-600 dark:text-gray-200 text-2xl ml-4">{tent.product}</Animated.Text>
      <Animated.Text entering={FadeInLeft.springify(5).delay(400)} className="text-neutral-400 dark:text-gray-400 text-lg ml-4 italic">{tent.category}</Animated.Text>

      <AnimatedPressable entering={FadeInLeft.springify().delay(500)} className="bg-white/60 p-[5px] rounded-md absolute top-12 left-4 items-center" style={{ borderColor: 'orange', borderWidth: 2 }} onPress={()=> navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={30} color="black" />
        </AnimatedPressable>
      

          <ScrollView contentContainerStyle={{paddingBottom: 40}}>
      <Animated.View entering={FadeInDown.springify().delay(500)} className="bg-white dark:bg-gray-600 w-11/12 self-center p-3 rounded-md">
            {
                tent.parts.map((part, index) => (
                    <View key={index} className="flex-row items-center my-1" >
                        <BouncyCheckbox
                            size={36}
                            fillColor="orange"
                            iconStyle={{ borderRadius: 8, }}
                            innerIconStyle={{ borderWidth: 1, borderRadius: 8 }}
                        />
                        <View className="flex-row items-center">
                            <Text className="text-neutral-600 dark:text-gray-200 text-xl">{part.quantity} </Text> 
                            <Text className="ml-4 text-neutral-600 dark:text-gray-200 text-xl">{part.item}</Text>
                        </View>
                    </View>
                ))
            }
      </Animated.View>
            </ScrollView>
      
    </View>
  )
}

export default TentDetails