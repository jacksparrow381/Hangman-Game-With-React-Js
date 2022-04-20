import React from "react";
import { HangManGame } from "./hangManGame";
import {Header} from "./Header";

export function HangManHome() {
  return (
    <div>
      <Header />
      <HangManGame />
    </div>
  );
}
