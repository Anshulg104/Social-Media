import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import {StyleSheet } from 'react-native';

const SettingsIcon = ({ iconName }:any) => {
    return <Feather name={iconName} size={24} color="black" style={styles.icon} />;
  };

  const styles = StyleSheet.create({

    icon: {
        marginRight: 10,
        color:"#e77e7e"
      },
  })

export default SettingsIcon