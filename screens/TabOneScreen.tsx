import { StyleSheet, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Text, View } from "../components/Themed";
import { decrement, increment, selectCount } from "../store/counterSlice";
import { selectTheme, toggleTheme } from "../store/themeSlice";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  // 11. trigger any action created in the slices using useDispatch hook
  const dispatch = useDispatch();
  // 12. useSelector hook to show the state in UI
  const count = useSelector(selectCount);
  const mode = useSelector(selectTheme);
  const bgColor = mode === "light" ? "black" : "white";
  const textColor = mode === "light" ? "black" : "white";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <TouchableHighlight onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(toggleTheme("dark"))}>
        <Text>Toggle Dark</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(toggleTheme("light"))}>
        <Text>Toggle Light</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
