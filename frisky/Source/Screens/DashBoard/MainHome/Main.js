import { StyleSheet, View } from "react-native";
import NavBar from "../BottomNavigation/BottomNavigation";
import HSB from "../Header/Header";
import { color } from "../../../Utility/Constants";

export default function MainScreen() {
  return (
    <View style={styles.main}>
      <HSB />
      <NavBar />
    </View>
  );
}
const styles = StyleSheet.create({
  //parent styles
  main: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
});
