import React from 'react'
import { Image, View,StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const PostCards = () => {

    const {width}=useWindowDimensions()
    const postdim=width -20
  return (
   <View>
    <Image
    source={{
        uri:"https://imgs.search.brave.com/7kEA6safva8DeOYafzp7Xy8hdn3_caKsFwLKwVvgy_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzU4LzQ5LzU0/LzM2MF9GXzc1ODQ5/NTQyNl9nWHdBQkxx/MWxUTWlRWW9tVTQw/a3Y0aXFsNGJjMEJL/dy5qcGc"
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


   </View>
  )
}



const styles=StyleSheet.create({
    container: {

    },
    iconstyle:{
       flexDirection:"row",
       alignItems:"center" 
    },
    actionwrapper:{
        flexDirection:"row" ,
        justifyContent:"space-between",
        alignContent:"center",
        paddingVertical:10,
    }
  
})

export default PostCards