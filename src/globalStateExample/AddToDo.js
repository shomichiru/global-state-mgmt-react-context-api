import React, { useState, useContext } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import TodoContext from "./todoContext";

export const AddToDo = () => {
  const dispatch = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleChangeText = () => {
    if (text) {
      dispatch({
        type: "ADD_TODO",
        task: text
      });
    }
    setText("");
  };
  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        label="Add ..."
        returnKeyType="done"
        value={text}
        onChangeText={text => setText(text)}
        keyboardType="default"
        style={{ margin: 5 }}
      />
      <Button mode="contained" onPress={handleChangeText}>
        Add Todo
      </Button>
    </View>
  );
};
