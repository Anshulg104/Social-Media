import React, { useState } from "react";
import {
  
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../../components/main/post/uploadImage/UploadImage";
import Button from "../../components/shared/button/Button"; 
import ProfileTop from "../../components/shared/profiletop/ProfileTop";

export default function PostCreationPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>New Post</Text>
      <ProfileTop/>
     
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Say About something about  this photo"
        multiline
      />
      <UploadImage />
      <Button text="Post" onPress={() => console.log("Posting...")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex:1 ,
    paddingHorizontal:30,
    paddingTop:48,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#e77e7e",
    marginBottom: 20,
    
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom:10,
    width: "100%",
  }
});
