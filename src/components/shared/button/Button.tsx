import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { globalStyles } from "../../../globalstyles/globalStyles";

const Button = ({text,handlebutton}:any) => {
 
  return (
    <View style={globalStyles.formAction}>
      <TouchableOpacity
        onPress={() => {
          handlebutton();
          
        }}
      >
        <View style={globalStyles.btn}>
          <Text style={globalStyles.btnText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
