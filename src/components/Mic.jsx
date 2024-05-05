import { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Mic() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [onListening, setOnListening] = useState(false);
  useEffect(() => {
    if (listening) {
      setOnListening(true);
    } else {
      setOnListening(false);
    }
  }, [listening]);

  function clickStartListening() {
    SpeechRecognition.startListening({ language: "id" });
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col items-center my-3">
      <p>Microphone: {onListening ? "On" : "Off"}</p>
      <div className="flex justify-center gap-5">
        <button onClick={clickStartListening}>Start</button>
        <button onClick={SpeechRecognition.abortListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <p>{transcript}</p>
    </div>
  );
}
export default Mic;
