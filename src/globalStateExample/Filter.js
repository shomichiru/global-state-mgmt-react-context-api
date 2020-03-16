import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export const Filter = ({ dispatch }) => {
  const handleShowAll = () => {
    dispatch({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatch({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: "SHOW_INCOMPLETE" });
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 10
      }}
    >
      <Button onPress={handleShowAll}>All</Button>
      <Button onPress={handleShowComplete}>Complete</Button>
      <Button onPress={handleShowIncomplete}>Incomplete</Button>
    </View>
  );
};
