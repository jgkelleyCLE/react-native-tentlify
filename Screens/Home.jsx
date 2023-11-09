import { View, Text, ActivityIndicator, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { useGetAllTentsQuery } from '../redux/tentApi'
import { useColorScheme } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

const Home = () => {

  const {colorScheme} = useColorScheme() 
  const navigation = useNavigation()

    const { data: tents, isLoading, isSuccess, isError, error } = useGetAllTentsQuery()

    // console.log(tents)

    let content;

    if(isLoading){
      content = <ActivityIndicator size="large" color={colorScheme === 'dark' ? 'orange' : 'maroon'} />
    }else if(isSuccess){
      content = <FlatList
            data={tents}
            renderItem={({ item })=> {
              return (
                <Pressable className="bg-white dark:bg-gray-700 p-[3px] rounded-md m-2 flex-row items-center justify-between" onPress={()=> navigation.navigate("TentDetails", { ...item })}>
                  <Animated.Image sharedTransitionTag={`image-${item._id}`} className="w-[125px] h-[75px] rounded-md" source={{ uri: item.image }} />
                  <View>
                    <Text className="text-xl text-neutral-600 dark:text-gray-200 pr-2">{item.product}</Text>
                  </View>
                </Pressable>
              )
            }}
      />
    }

  return (
    <View className="flex-1 pt-14 android:pt-12 bg-gray-200 dark:bg-gray-900">
      <Text className="ml-4 text-2xl text-neutral-600 dark:text-gray-200">Home</Text>
      {content}
    </View>
  )
}

export default Home