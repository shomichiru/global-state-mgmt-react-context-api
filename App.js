import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import GlobalStateWithReactContext from "./src/globalStateExample";
// Or,
// import GlobalStateWithReactContext from "./src/globalStateExample/matome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GlobalStateWithReactContext />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
