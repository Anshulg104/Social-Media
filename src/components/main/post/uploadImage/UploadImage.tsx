import React, { useState } from "react";
import { Button, Image, View, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      multiple: true, // Enable selecting multiple images
    });

    console.log(result);

    if (!result.cancelled) {
      setImages([...images, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick images from camera roll" onPress={pickImage} />
      <View style={{ flexWrap: "wrap", flexDirection: "row", height: 100 }}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
});