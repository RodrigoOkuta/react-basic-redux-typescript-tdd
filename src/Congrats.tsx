import React from "react";
import { ICongrats } from "./types/Congrats";

const renderMessage = () => {
  return (
    <span data-test="congrats-message">
      Congratulations! You guessed the word!
    </span>
  );
};

const Congrats: React.FunctionComponent<ICongrats> = ({ success }) => {
  return (
    <React.Fragment>
      <div data-test="component-congrats">{success && renderMessage()}</div>
    </React.Fragment>
  );
};

export default Congrats;
