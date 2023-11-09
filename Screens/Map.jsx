import { View, Text, Image, ActivityIndicator, Pressable, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { useGetAllJobsQuery } from '../redux/jobApi'
import { useColorScheme } from 'nativewind'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import GeoModal from '../Components/GeoModal'

const Map = () => {

  const navigation = useNavigation()

  const [show, setShow] = useState(false)

  const [location, setLocation] = useState([])

  const { colorScheme } = useColorScheme()

  const { data: jobs, isFetching, isSuccess, isError, error } = useGetAllJobsQuery()

  let content;


  if(isSuccess){
    content = jobs?.map((item, index) => (
      <Marker 
        key={index}
        coordinate={{latitude: item.lat, longitude: item.long}}
        
      >
        <Pressable onPress={()=> navigation.navigate("MapDetails", { ...item })} className="">
          <Animated.Image sharedTransitionTag={`image-${item._id}`} source={{ uri: item.images[0].url }} className="w-12 h-12 rounded-full " />

        </Pressable>
      </Marker>
    ))
  }else if(isError){
    <View>
      <Text>Could not fetch jobs</Text>
    </View>
  }

  const longPressHandler = (e) => {
    
        setLocation([e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude])
        console.log(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)
        console.log("location: ", location)
        setShow(!show)
  }

  return (
    <View>
      <MapView
      className="w-[100%] h-[100%]"
      initialRegion={{
        latitude: 41.5075758,
        longitude: -81.6820151,
        latitudeDelta: 0.5022,
        longitudeDelta: 0.1622
      }} 
      onLongPress={(e)=> longPressHandler(e)}
    >
    {content}

    </MapView>

    {/* must be outside of the mapview */}
    <GeoModal show={show} setShow={setShow} location={location} />

    </View>
    
  )
}

export default Map