import { View, Text, Modal, Button, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geocoder from 'react-native-geocoding';

const GeoModal = ({ show, setShow, location }) => {

    

    const [lat, setLat] = useState(location[0])
    const [long, setLong] = useState(location[1])
    const [title, setTitle] = useState('')

    const submitHandler = () => {
        console.log({title, lat, long })
    }

    console.log("location: ", location)
    

    Geocoder.init('AIzaSyAeQRBqWFXHqud3B8330d8_V22m9_c1U18')
    // const address = Geocoder.from([lat, long]);
    // console.log("address: ", address)

    // const myApiKey="AIzaSyAeQRBqWFXHqud3B8330d8_V22m9_c1U18"

    

  return (
    <Modal visible={show} onRequestClose={()=> setShow(false)} animationType='slide' presentationStyle='pageSheet'>
        <View className="items-center mt-6">
            {/* <Text className="text-xl">{location[0]},</Text>
            <Text className="text-xl">{location[1]}</Text> */}
            {/* <Text className="text-xl">{address}</Text> */}
            
            <TextInput 
                className="w-11/12 border border-gray-400 p-2 rounded-md mb-1 text-2xl" 
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
             />
             <Text className="text-2xl">Lat: {location[0]}</Text>
             <Text className="text-2xl">Long: {location[1]}</Text>
            {/* <TextInput 
                className="w-11/12 border border-gray-400 p-2 rounded-md mb-1 text-2xl" 
                value={location[0]}
                editable={false}
                />


            <TextInput 
                className="w-11/12 border border-gray-400 p-2 rounded-md mb-1 text-2xl" 
                value={location[1]}
                editable={false}
            /> */}
            

        <Pressable className="bg-red-800 rounded-md items-center w-11/12 p-2 self-center" onPress={submitHandler}>
            <Text className="text-white text-2xl">Submit</Text>
        </Pressable>

        {/* <Pressable className="bg-green-800 rounded-md items-center w-11/12 p-2 self-center mt-2" onPress={getAddressFromCoordinates}>
            <Text className="text-white text-2xl">Get Address</Text>
        </Pressable> */}
        
            
        </View>

        <Pressable className="bg-orange-500 rounded-md items-center w-11/12 p-2 self-center absolute bottom-8" onPress={()=> setShow(false)}>
            <Text className="text-white text-2xl">Close</Text>
        </Pressable>
        
    </Modal>
  )
}

export default GeoModal