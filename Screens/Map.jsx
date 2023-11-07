import { View, Text, Image, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { useGetAllJobsQuery } from '../redux/jobApi'
import { useColorScheme } from 'nativewind'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const Map = () => {

  const navigation = useNavigation()

  const { colorScheme } = useColorScheme()

  const { data: jobs, isFetching, isSuccess, isError, error } = useGetAllJobsQuery()

  let content;

  const markerList = jobs?.map((item, index) => (
    <Marker 
      key={index}
      coordinate={{latitude: item.lat, longitude: item.long}}
      
    >
        <Image source={{ uri: item.images[0].url }} className="w-12 h-12 rounded-full" />
    </Marker>
  ))

  if(isSuccess){
    content = jobs?.map((item, index) => (
      <Marker 
        key={index}
        coordinate={{latitude: item.lat, longitude: item.long}}
        
      >
        <Pressable onPress={()=> navigation.navigate("MapDetails", { ...item })} className="">
          <Animated.Image sharedTransitionTag={`image-${item._id}`} source={{ uri: item.images[0].url }} className="w-12 h-12 rounded-full border-2 border-orange-500" />

        </Pressable>
      </Marker>
    ))
  }else if(isError){
    <View>
      <Text>Could not fetch jobs</Text>
    </View>
  }

  

  return (
    
      <MapView
      className="w-[100%] h-[100%]"
      initialRegion={{
        latitude: 41.5075758,
        longitude: -81.6820151,
        latitudeDelta: 0.5022,
        longitudeDelta: 0.1622
      }}
    >
    {content}
    {/* {markerList} */}

    </MapView>
    
    
  )
}

export default Map