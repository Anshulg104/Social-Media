import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../../components/main/post/uploadImage/UploadImage";

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
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />
      <UploadImage />
      <Button title="Post" onPress={() => console.log("Posting...")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
