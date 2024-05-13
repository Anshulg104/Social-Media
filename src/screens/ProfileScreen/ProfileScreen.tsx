import React from 'react'
import Profiledetails from '../../components/main/profile/profileDetails/Profiledetails'
import Profilepost from '../../components/main/profile/profilePost/Profilepost'
import { ScrollView } from 'react-native'
import { globalStyles } from '../../globalstyles/globalStyles'


function ProfileScreen() {
  return (
<ScrollView style={[globalStyles.container,{paddingHorizontal:10}]}>
<Profiledetails/>
  <Profilepost/>
</ScrollView>

  
   
  )
}



export default ProfileScreen