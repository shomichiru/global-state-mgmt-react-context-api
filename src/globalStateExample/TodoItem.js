import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import TodoContext from "./todoContext";

export const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);

  const handleChange = () => {
    dispatch({
      type: todo.isComplete ? "UNDO_TODO" : "DONE_TODO",
      id: todo.id
    });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 40,
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Checkbox.Android
        status={todo.isComplete ? "checked" : "unchecked"}
        onPress={handleChange}
      />
      <Text>{todo.task}</Text>
    </View>
  );
};
