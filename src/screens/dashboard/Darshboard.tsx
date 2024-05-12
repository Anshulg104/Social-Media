import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LoginScreen } from "../auth/login/LoginScreen";
import { ChatScreen } from "../chatScreen/ChatScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SettingsScreen from "../SettingsScreen/SettingsScreen";

const buttons = [
  { screenName: "OtherScreen1", icon: "earth", size: 28 },
  { screenName: "add-circle-outline", icon: "plus-circle-outline", size: 28 },

  { screenName: "profile", icon: "account-circle-outline", size: 28 },
  { screenName: "chat", icon: "message-reply-text-outline", size: 26 },
  { screenName: "settings", icon: "settings", size: 26 },
];

const Dashboard: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>("Home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <LoginScreen />;
      case "OtherScreen1":
        return <LoginScreen />;
      case "add":
        return <LoginScreen />;
      case "profile":
        return <ProfileScreen />;
      case "chat":
        return <ChatScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>{renderScreen()}</View>
      <View style={styles.bottomBar}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveScreen(button.screenName)}
            style={styles.bottomButton}
          >
            {button.icon === "settings" ? (
              <Feather
                name={button.icon}
                size={button.size}
                color={activeScreen === button.screenName ? "#e77e7e" : "black"}
              />
            ) : (
              <MaterialCommunityIcons
                name={button.icon}
                size={button.size}
                color={activeScreen === button.screenName ? "#e77e7e" : "black"}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  screen: { flex: 1 },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "hsl(0, 0%, 97%)",
    borderColor: "white",
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;
