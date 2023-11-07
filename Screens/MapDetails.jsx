import { View, Text, Image, Button, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MapDetails = ({ route }) => {

  const navigation = useNavigation()

  const job = route.params

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

  return (
    <View className="flex-1 bg-gray-200 dark:bg-gray-900">
      <Animated.Image sharedTransitionTag={`image-${job._id}`} className="w-[100%] h-[270px]" source={{ uri: job.images[0].url }} />
      <Animated.Text entering={FadeInLeft.springify(5).delay(300)} className="text-neutral-600 dark:text-gray-200 text-2xl ml-4 pt-2">{job.location}</Animated.Text>
      <Animated.Text entering={FadeInLeft.springify(5).delay(400)} className="text-neutral-400 dark:text-gray-400 text-lg ml-4 italic">{job.city}</Animated.Text>

      <AnimatedPressable entering={FadeInLeft.springify().delay(500)} className="bg-white/60 p-[5px] rounded-md absolute top-12 left-4 items-center" style={{ borderColor: 'orange', borderWidth: 2 }} onPress={()=> navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={30} color="black" />
        </AnimatedPressable>

        <Animated.View entering={FadeInDown.springify().delay(500)} className="bg-white dark:bg-gray-600 w-11/12 self-center rounded-md p-3 self-center mt-4">
          <Text className="text-xl text-neutral-600 dark:text-gray-200">Notes: {job.notes}</Text>
        </Animated.View>
      
    </View>
  )
}

export default MapDetails