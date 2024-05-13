import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const TopicChip = () => {
  return (
   <TouchableOpacity style={{marginRight:10}}>
  <Text style={{
  fontSize: 16,
  backgroundColor: "#e77e7e",
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 20,
  color: "white",
  shadowColor: "#000", // shadow color
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25, // shadow opacity
  shadowRadius: 3.84, // shadow radius
  elevation: 5, // for Android shadow
}}>
  Holiday
</Text>

   </TouchableOpacity>
  )
}

export default TopicChip
