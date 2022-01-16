import { useState, useReducer } from "react";

function reducer({ state }) {
  switch (state) {
    case "PRESSED_ONCE":
      return {
        state: "PRESSED_TWO",
      };
    case "PRESSED_TWO":
      return {
        state: "PRESSED_THREE",
      };
    case "PRESSED_THREE":
      return {
        state: "PRESSED_ONCE",
      };
  }
}
const Button = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    state: "PRESSED_ONCE",
  });
  return (
    <>
      <div onClick={() => dispatch()}>I am a Button</div>
      <div>{state.state}</div>
    </>
  );
};
function ReducerHook() {
  return (
    <div>
      <Button color="black" />
    </div>
  );
}

export default ReducerHook;
