import { Joystick } from "react-joystick-component";

export default function UI() {
  return (
    <Joystick
      size={100}
      baseColor="rgba(227,227,227,0.4)"
      stickColor="rgba(227,227,227,0.6)"
      stickSize={48}
    />
  );
}
