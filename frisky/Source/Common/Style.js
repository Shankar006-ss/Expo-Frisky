import { StyleSheet } from "react-native";
import { color } from "../Utility/Constants";

export const globalstyles = StyleSheet.create({
  //all screen parent styles
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  //all screen imagebackground styles
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  //all screen header styles
  header: {
    color: color.WHITE,
    fontWeight: "bold",
    fontSize: 30,
  },
  //all screen logo image styles
  image: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
  //all screen button text styles
  buttonText: {
    fontSize: 25,
    color: color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 3,
  },
  //all screen error message styles
  Errormsg: {
    color: color.RED,
    textAlign: "center",
    marginTop: 5,
  },
});
