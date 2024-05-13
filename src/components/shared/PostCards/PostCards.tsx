import React from 'react'
import { Image, View,StyleSheet, Dimensions, useWindowDimensions,Text } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const PostCards = () => {

    const {width}=useWindowDimensions()
    const postdim=width
  return (
   <View>

    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    <View style={styles.profileTop}>
      <Image
        alt=""
        source={{
          uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
        }}
        style={styles.avatarImg}
      />


      <Text style={styles.profileTitle}>{"Nickolas Miller"}</Text>

  </View>
  <Feather name='more-vertical' size={24} color="black" />
    </View>

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
    profileTitle: {
        fontSize:15,
        fontWeight: "bold",
        color: "#1d1d1d",
        marginBottom: 6,
      },
    actionwrapper:{
        flexDirection:"row" ,
        justifyContent:"space-between",
        alignContent:"center",
        paddingVertical:10,
    },
     profileTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
        gap:10,
      },
      avatar: {
        position: "relative",
      },
      avatarImg: {
        width: 50,
        height: 50,
        borderRadius: 99,
      },
      avatarNotification: {
        position: "absolute",
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: "#fff",
        bottom: 0,
        right: -3,
        width: 21,
        height: 21,
        backgroundColor: "#22C55E",
      },
      profileBody: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingLeft: 16,
        paddingTop:5,
      },

})

export default PostCards