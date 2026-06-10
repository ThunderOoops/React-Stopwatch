import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(0);       // time in milliseconds
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const format = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs  = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  const start = () => {
    if (running) return;
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1000);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="card">
        <div className="timer">{format(time)}</div>
        <div className="status">{running ? "⏱ Running..." : time > 0 ? "⏸ Paused" : "Ready"}</div>
        <div className="buttons">
          <button className="btn start"  onClick={start}  disabled={running}>Start</button>
          <button className="btn stop"   onClick={stop}   disabled={!running}>Stop</button>
          <button className="btn reset"  onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
