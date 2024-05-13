import { Dimensions, StyleSheet, useColorScheme } from "react-native";

export const globalStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 40,
      paddingHorizontal:10
      
    },
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
    appBar: {
      backgroundColor: 'white', // Customize as needed
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomColor: '#ddd', // Customize as needed
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: "#e77e7e",
      marginBottom: 12,
    },
    avatarContainer: {
      paddingHorizontal: 10,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'lightgray', // Default background color
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)', // Replace with your gradient
    },
  });
};

export const globalStyles = globalStyle();
