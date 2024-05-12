import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
// import Color from "../../../constants/Color";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../globalstyles/globalStyles";
import { useNavigation } from "expo-router";
// import { logo } from "../../../assets";

export default function SignUPScreen() {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("login");
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.header}>
            {/* <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={logo}
            /> */}

            <Text style={styles.title}>Let's Get Started!</Text>

            <Text style={styles.subtitle}>
              Fill in the fields below to get started with your new account.
            </Text>
          </View>

          <View style={globalStyles.form}>
            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Full Name</Text>

              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(name) => setForm({ ...form, name })}
                placeholder="John Doe"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                value={form.name}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Email Address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                value={form.email}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Confirm Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(confirmPassword) =>
                  setForm({ ...form, confirmPassword })
                }
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                secureTextEntry={true}
                value={form.confirmPassword}
              />
            </View>

            <View style={globalStyles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={globalStyles.btn}>
                  <Text style={globalStyles.btnText}>Get Started</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleNavigate}
            style={{ marginTop: "auto" }}
          >
            <Text style={globalStyles.formFooter}>
              Already have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container2: {
        padding: 20,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
      title: {
        fontSize: 31,
        fontWeight: "700",
        color: "#1D2A32",
        marginBottom: 6,
      },
      subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#929292",
      },
      /** Header */
      header: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
      },
      headerImg: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 26,
      },
})