import { View, Text, ActivityIndicator, FlatList, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useGetAllJobsQuery } from '../redux/jobApi'
import { useColorScheme } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

const Jobs = () => {

  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()

  const { data: jobs, isLoading, isSuccess, isError, error } = useGetAllJobsQuery()

  console.log(jobs)

  let content;

  const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)

  if(isLoading){
    content = <ActivityIndicator size="large" color={colorScheme === 'dark' ? 'orange' : 'maroon'} />
  }else if(isSuccess){
    content = <FlatList
        data={jobs}
        renderItem={({ item }) => {
          return (
            <Pressable className="w-[100%]" onPress={()=> navigation.navigate("JobDetails", { ...item })}>
              <AnimatedImageBackground sharedTransitionTag={`backgroundimage-${item._id}`} className="w-[95%] h-[125px] m-2 self-center justify-end" imageStyle={{borderRadius: 8, width: '100%'}}  source={{ uri: item.images[0].url }}>
                <View className="bg-black/30 rounded-b-md h-[100%] justify-end">
                  <Text className="text-gray-200 text-xl p-1">{item.location}</Text>
                </View>
              </AnimatedImageBackground>
              </Pressable>
            
          )
        }}
        // keyExtractor={item => item._id}
    />
  }

  return (
    <View className="flex-1 pt-14 android:pt-12 bg-gray-200 dark:bg-gray-900">
      <Text className="text-2xl text-neutral-600 dark:text-gray-200 ml-4">Jobs</Text>
      <View>
        {content}

      </View>
    </View>
  )
}

export default Jobs