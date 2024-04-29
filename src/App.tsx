import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Cutie please",
      "Don't do this to me",
      "I am gonna cry",
      "You're breaking my heart",
      "Please",
      "I don't think you are sure",
      "Baby, don't hurt me",
      "Just say yes",
      "I made this especially for you",
      "I love you, please dont say no",
      "You're the best please say yes",
      "Now, you're just testing this",
      "No is not an option",
      "I will cry now",
      "Okay now I'm crying",
      "This will be the death of me",
      "NO is Yes now",
      "This is it please say yes",
      "I am sad now",
      "This is it say yes...",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentiness-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
