import { View, Text, Switch } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const Settings = () => {

    const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className="flex-1 pt-14 android:pt-12 bg-gray-200 dark:bg-gray-900">
      <Text className="text-2xl ml-4 text-neutral-600 dark:text-gray-300">Settings</Text>
      <View className="flex-row items-center m-2 ml-4">
        <Text className="pr-2 text-neutral-600 dark:text-gray-300 text-lg">Dark Mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  )
}

export default Settings