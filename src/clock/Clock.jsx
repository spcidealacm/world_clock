import styled from "styled-components";
import ClockBackground from "./ClockBackground";
import ClockPointer from "../pointer/ClockPointer";

const Clock = (props) => {
  return <ClockBackground>
    <ClockPointer />

  </ClockBackground>;
};

export default Clock;
