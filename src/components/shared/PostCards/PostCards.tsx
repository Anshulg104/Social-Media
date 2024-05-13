import React from 'react'
import { Image, View,StyleSheet, Text, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const PostCards = () => {

    const {width}=useWindowDimensions()
    const postdim=width
  return (
   <View style={{
  marginBottom:50
   }}>
    <Image
    source={{
        uri:"https://images.pexels.com/photos/19674420/pexels-photo-19674420/free-photo-of-woman-in-a-red-sequin-dress-standing-against-a-pillar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }}
    style={{width:postdim,height:postdim }}
    />
<View  style={styles.actionwrapper} >
    <View style={styles.iconstyle}>
        <Feather name='heart' style={{marginRight:10}} size={24} color="black"/>
<Feather name='message-square' style={{marginRight:10}} size={24} color="black"/>
<Feather name='send' size={24} style={{marginRight:10}} color="black"/>
    </View>
    
<Feather name='bookmark' size={24} color="black"/>
</View>
<View style={{width:"90%",paddingLeft:15}}>
    <Text style={{fontWeight:"700",marginBottom:5}}>
        1200 Likes
    </Text>
<Text>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni cum consectetur distinctio.
</Text>
</View>

   </View>
  )
}



const styles=StyleSheet.create({
    container: {

    },
    iconstyle:{
       flexDirection:"row",
       alignItems:"center" ,
       gap:10

    },
    actionwrapper:{
        flexDirection:"row" ,
        justifyContent:"space-between",
        alignContent:"center",
        paddingVertical:10,
        paddingHorizontal:15
    }
  
})

export default PostCards