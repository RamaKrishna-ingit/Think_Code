/*
  React.js - The Ultimate Web App Covering Every Concept
  This file includes all essential React concepts explained with a super functional web app.
  Now, integrating Redux Toolkit for advanced state management.
*/

// 1. Importing React and essential hooks
import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  createContext,
  forwardRef
} from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 2. Creating a Context (for global theme management)
const ThemeContext = createContext();

// 3. Redux Toolkit - Creating a slice for counter state management
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

// 4. Configuring Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// 5. Functional Component - Main App
function App() {
  // 6. State Management using useState Hook
  const [theme, setTheme] = useState("light");
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date"]);

  // 7. useEffect Hook (side effects)
  useEffect(() => {
    console.log("Component Mounted or Updated");
  }, []);

  // 8. useContext Hook (accessing global theme state)
  const themeColor = useContext(ThemeContext);

  // 9. useRef Hook (accessing DOM elements)
  const inputRef = useRef();
  function focusInput() {
    inputRef.current.focus();
  }

  // 10. useMemo Hook (optimizing expensive calculations)
  const filteredItems = useMemo(() => items.filter(item => item.includes("a")), [items]);

  // 11. useCallback Hook (memoizing functions)
  const addItem = useCallback(() => {
    setItems((prev) => [...prev, "New Item"]);
  }, []);

  // 12. Redux Toolkit Hooks
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div style={{ background: themeColor, padding: "20px" }}>
      <h1>Super Functional React Web App</h1>
      <p>Redux Count: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Redux Increment</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>Redux Decrement</button>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={addItem}>Add Item</button>
      <h2>Filtered Items:</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 13. Rendering App Component inside Providers
ReactDOM.render(
  <Provider store={store}>
    <ThemeContext.Provider value="lightgray">
      <App />
    </ThemeContext.Provider>
  </Provider>,
  document.getElementById("root")
);
