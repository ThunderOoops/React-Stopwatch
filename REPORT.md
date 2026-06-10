# Report

**Name:** Ràm

**Session by:** Mr. Siddu

**Topics covered:**
- React useState Hook
- React useRef Hook
- setInterval and clearInterval
- Timer formatting logic
- Disabled button states

**Task implementation:**
- `App.jsx` — Stopwatch using `useState` for time (ms) and running state. `useRef` stores the `setInterval` ID so it persists across re-renders without triggering them. Start launches the interval adding 1000ms per tick. Stop clears the interval via the ref. Reset clears the interval and resets time to 0. Time is formatted into HH:MM:SS using a `format()` helper. Buttons are disabled contextually — Start disables when running, Stop disables when paused.
- `App.css` — Dark gradient UI with glowing cyan timer display and color-coded buttons.

**Repository link:** https://github.com/ThunderOoops/React-Stopwatch
