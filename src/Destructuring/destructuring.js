import { useState } from 'react';
const Button = (props) => {
  const [counter, setCounter] = useState(0);
  return <div style={{ color: props.color, textDecoration: props.underline ? 'underline' : undefined }} onClick={() => setCounter((c) => c + props.increment)}>I am a Button {counter}</div>
}
function Destructuring() {
  const props = {
    increment: 3,
    underline: true
  }
  return (
    <div>
      {/* <Button increment={3} underline={true} color="black" />
      <Button increment={3} underline={true} color="red" />
      <Button increment={3} underline={true} color="green" /> */}

      <Button {...props} color="black" />
      <Button {...props} color="red" />
      <Button {...props} color="green" />
    </div>
  );
}

export default Destructuring;
