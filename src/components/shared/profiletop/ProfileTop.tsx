import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet,
  } from "react-native";

const ProfileTop = () => {
  return (
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
  )
}

const styles = StyleSheet.create({

    profileTitle: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 32,
        color: "#1d1d1d",
        marginBottom: 6,
      },
      image: {
        width: 200,
        height: 200,
        marginTop: 20,
      },
      avatar: {
        position: "relative",
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
      profileTop: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 16,
      },
      profileBody: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingLeft: 16,
        paddingTop:16,
      },
})

export default ProfileTop