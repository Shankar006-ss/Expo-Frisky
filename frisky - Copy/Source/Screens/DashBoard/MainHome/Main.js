import { StyleSheet, View } from "react-native";
import NavBar from "../BottomNavigation/BottomNavigation";
import HSB from "../Header/Header";

export default function MainScreen() {
  return (
    <View style={styles.main}>
      <HSB />

      <NavBar />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
