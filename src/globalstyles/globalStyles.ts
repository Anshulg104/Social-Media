import { Dimensions, StyleSheet, useColorScheme } from "react-native";

export const globalStyle = () => {
  return StyleSheet.create({
    formFooter: {
      fontSize: 15,
      fontWeight: "500",
      color: "black",
      textAlign: "center",
    },
    form: {
      marginBottom: 24,
    },
    formAction: {
      marginVertical: 24,
    },

    /** Input */
    input: {
      marginBottom: 16,
      paddingVertical: 10,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: "600",
      color: "#222",
      marginBottom: 8,
    },
    inputControl: {
      height: 44,
      backgroundColor: "#f1f5f9",
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: "500",
      color: "#222",
      paddingVertical: 10,
    },
    /** Button */
    btn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: "black",
    },
    btnText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: "600",
      color: "#fff",
    },
  });
};

export const globalStyles = globalStyle();
