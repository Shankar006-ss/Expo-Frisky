import { StyleSheet } from "react-native";
import { color } from "../Utility/Constants";

export const globalstyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    height: "100%",
    width: "100%"
  },
  header: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,

  },
  image: {
    height: 100,
    width: 100,
  },
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },

});
