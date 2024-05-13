import React from 'react'
import { Image, View,StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const PostCards = () => {

    const {width}=useWindowDimensions()
    const postdim=width -20
  return (
   <View>

<View style={styles.profileTop}>
    <View style={styles.avatar}>
      <Image
        alt=""
        source={{
          uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
        }}
        style={styles.avatarImg}
      />

      <View style={styles.avatarNotification} />
    </View>

    <View style={styles.profileBody}>
      <Text style={styles.profileTitle}>{"Nickolas Miller"}</Text>

      
    </View>
  </View>


    
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
    },
     profileTop: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 16,
      },
      avatarImg: {
        width: 60,
        height: 60,
        borderRadius: 9999,
      },
      avatarNotification: {
        position: "absolute",
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: "#fff",
        bottom: 0,
        right: -2,
        width: 21,
        height: 21,
        backgroundColor: "#22C55E",
      },
      profileBody: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingLeft: 16,
        paddingTop:16,
      },

})

export default PostCards