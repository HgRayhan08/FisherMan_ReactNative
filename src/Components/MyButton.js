import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // alignItems: "left",
    borderBottomWidth: 1,
    shadowRadius: 5,
    shadowColor: "red",
    marginVertical: 10,
    paddingVertical: 15,
    paddingLeft: 20,
  },
  text: {
    fontSize: 20,
  },
});
