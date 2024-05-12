import React from 'react'
import Profiledetails from '../../components/main/profile/profileDetails/Profiledetails'
import Profilepost from '../../components/main/profile/profilePost/Profilepost'
import { ScrollView } from 'react-native'


function ProfileScreen() {
  return (
<ScrollView style={{flex:1 ,paddingHorizontal:10,paddingTop:40 ,backgroundColor: "#fff"}}>
<Profiledetails/>
  <Profilepost/>
</ScrollView>

  
   
  )
}



export default ProfileScreen