
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsCard from '../../components/main/Settings/SettingsCards/SettingsCards';
import { globalStyles } from '../../globalstyles/globalStyles';

// Settings screen component
const SettingsScreen = () => {
  const navigation:any = useNavigation();

  // Function to navigate to different settings screens
  const navigateToScreen = ({screenName}:any) => {
    navigation.navigate(screenName);
  };

 
  

  return (
    <SafeAreaView style={globalStyles.container}>

     <Text style={styles.title}>Settings</Text>
      <SettingsCard
        title="Edit Profile"
        iconName="user"
        onPress={() => navigateToScreen('EditProfile')}
      />
      <SettingsCard
        title="About"
        iconName="info"
        onPress={() => navigateToScreen('About')}
      />
      <SettingsCard
        title="Privacy"
        iconName="lock"
        onPress={() => navigateToScreen('Privacy')}
      />
      <SettingsCard
        title="Blocked"
        iconName="slash"
        onPress={() => navigateToScreen('Blocked')}
      />
      <SettingsCard
        title="Saved"
        iconName="bookmark"
        onPress={() => navigateToScreen('Saved')}
      />
      <SettingsCard
        title="Device Permissions"
        iconName="settings"
        onPress={() => navigateToScreen('DevicePermissions')}
      />
      <SettingsCard
        title="Language"
        iconName="globe"
        onPress={() => navigateToScreen('Language')}
      />
      <SettingsCard
        title="Help"
        iconName="help-circle"
        onPress={() => navigateToScreen('Help')}
      />
      <SettingsCard
        title="Logout"
        iconName="log-out"
        onPress={() => navigateToScreen('Logout')}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex:1 ,
    paddingHorizontal:10,
    backgroundColor: "#fff", 
    paddingTop: 48
    
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#e77e7e",
    marginBottom: 12,
  },
 
});

export default SettingsScreen;
