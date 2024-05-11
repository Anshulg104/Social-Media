import React from 'react'
import { View, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

const Profilepost = () => {

    const { width } = Dimensions.get('window');
    const itemWidth = width / 3;

    const data = [
        { id: '1', image: 'https://plus.unsplash.com/premium_photo-1669802766533-85e0624ff1bd?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: '2', image: 'https://images.unsplash.com/photo-1715250552640-1882d2250708?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: '3', image: 'https://images.unsplash.com/photo-1715006020546-78544f64c6ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        // Add more image URLs here as needed
      ];
 

    const renderItem = ({ item, index }:any) => {
      if (index === 0) {
        return (
          <View style={[styles.item, { width: itemWidth * 2, height: itemWidth * 2 }]}>
            <Image source={{
                uri: item.image}} style={[styles.image, { flex: 1, width: undefined, height: undefined }]} resizeMode="cover" />
          </View>
        );
      } else {
        return (
          <View style={[styles.item, { width: itemWidth, height: itemWidth }]}>
            <Image source={item.image} style={[styles.image, { flex: 1, width: undefined, height: undefined }]} resizeMode="cover" />
          </View>
        );
      }
    };
  
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.container}
      />
    )
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 8,
    },
    item: {
      margin: 1,
    },
    image: {
      borderRadius: 8,
    },
  });

export default Profilepost