import React from "react";
import TextCounter from "./components/textCounter";
import TrafficLight from "./components/trafficLight";
import ToDoList from "./components/toDoList";
import Cart from "./components/cart";
import RegisterForm from "./components/registerform";

function App() {
  return (
    <div>
      <TextCounter />
      <TrafficLight />
      <ToDoList />
      <Cart />
      <RegisterForm />
    </div>
  );
}

export default App;
