import React from "react";
import { View } from "react-native";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <View>
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </View>
  );
};
