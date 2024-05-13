import React from 'react'
import ProfileTop from '../../components/shared/profiletop/ProfileTop'
import PostCards from '../../components/shared/PostCards/PostCards'
import { ScrollView } from 'react-native'

const Discover = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: "#fff", paddingTop: 50,paddingHorizontal:30}}>
         {/* <ProfileTop/> */}
   <PostCards/>
    </ScrollView>
  
   
  )
}

export default Discover