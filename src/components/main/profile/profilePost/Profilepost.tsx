import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const images = [
  { id: 1, uri: 'https://images.pexels.com/photos/6200234/pexels-photo-6200234.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, uri: 'https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 3, uri: 'https://images.pexels.com/photos/20068318/pexels-photo-20068318/free-photo-of-a-man-in-a-brown-jacket-standing-in-the-middle-of-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 4, uri: 'https://images.pexels.com/photos/23279639/pexels-photo-23279639/free-photo-of-a-solar-eclipse-is-seen-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 5, uri: 'https://images.pexels.com/photos/20555579/pexels-photo-20555579/free-photo-of-castillo-de-valdecorneja.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 6, uri: 'https://images.pexels.com/photos/20555579/pexels-photo-20555579/free-photo-of-castillo-de-valdecorneja.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  
];

const Profilepost = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity key={image.id} style={[styles.imageContainer, index === 0 ? styles.firstImage : index === 4? styles.fourthImage : index===5? styles.fifthImage :null]}>
          <Image source={{ uri: image.uri }} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom:70
  },
  imageContainer: {
    width: windowWidth / 3.2, // Assuming 3 images per row
    height: windowWidth / 3, // Square images
    padding: 1, // Adjust spacing as needed
  },
  firstImage: {
    width: (windowWidth / 3.2) * 2, 
    height: (windowWidth / 3) * 2, 
  },
  fourthImage: {
 marginTop: - (windowWidth / 3) 
  },
  fifthImage:{
marginLeft: (windowWidth / 3.2) * 2,
marginTop: - (windowWidth / 3) 
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Profilepost;
