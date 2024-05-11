import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../../../globalstyles/globalStyles";

const Button = () => {
  return (
    <View style={globalStyles.formAction}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
      >
        <View style={globalStyles.btn}>
          <Text style={globalStyles.btnText}>Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
