import React from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'

const Profiledetails = () => {
  return (
    <View style={styles.container}>
    <View style={{ flexDirection:"row",justifyContent:'space-between',alignItems:"center",paddingHorizontal: 5}}>
         
        <View style={{width:75,alignItems:'center',marginTop:40}}>
        <Text style={{fontSize:24,fontWeight:600}}>100</Text>
        <Text style={{fontSize:16,fontWeight:400}}>followers</Text>
        </View>

        <View style={styles.header}>
      <View style={styles.avatar}>
        <Image
          style={styles.profileIcon}
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
          }} 
        />

          <View style={styles.avatarNotification} />
        </View>
      </View>
          
        <View style={{width:75,alignItems:'center',marginTop:40}}>
        <Text style={{fontSize:24,fontWeight:600}}>100</Text>
        <Text style={{fontSize:16,fontWeight:400}}>following</Text>
        </View>
       
        </View>
        <Text style={styles.username}>JohnDoe</Text>
     
      <View style={styles.userInfo}>
        <Text style={{fontSize:18,fontWeight:"600",marginBottom:5}}>
          Bio
        </Text>
        <Text style={styles.bio}>
        Adventurous soul with an eye for beauty in simplicity. 
        Constantly seeking inspiration and growth in life's small wonders.
        </Text>
        <Text style={{fontSize:18,fontWeight:"600",marginBottom:5}}>
          Gallery
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    
    },
    header: {
      alignItems: "center",
      paddingTop: 20,
    },
    profileIcon: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    avatar:{
        position:"relative",
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
    userInfo: {
      paddingHorizontal: 5,
      marginTop: 20,
    },
    username: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
      textAlign:"center"
    },
    bio: {
      fontSize: 16,
      marginBottom: 20,
    },
    followers: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

export default Profiledetails