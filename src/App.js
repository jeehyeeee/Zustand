import "./index.css";
// import useStore from "./store";
import People from "./components/People";
import Input from "./components/Input";
import { useEffect } from "react";
import { useSettingsStore } from "./store";

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);
  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);
  const People = useSettingsStore((state) => state.people);
  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>People</p>
      <Input />
      <People />
    </div>
  );
}

export default App;
