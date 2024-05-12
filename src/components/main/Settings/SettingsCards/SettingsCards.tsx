import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SettingsIcon from '../SettingsIcons/SettingsIcons';

const SettingsCard = ({ title, iconName, onPress }:any) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <SettingsIcon iconName={iconName} />
            <Text style={styles.option}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
      },
      cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
      },
      option: {
        fontSize: 18,
        marginLeft: 10,
      },

})

export default SettingsCard