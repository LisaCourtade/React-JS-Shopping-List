import '../styles/ToggleSwitch.css';
import { useTheme } from "../ThemeContext";

export default function ToggleSwitch() {
    
  const {isDarkTheme, toggleTheme} = useTheme();

  return (
    <div className='toggle-switch'>
        <input type="checkbox" id="switch" className="switch" defaultChecked={isDarkTheme} onClick={toggleTheme}/>
        <label htmlFor="switch" className="toggle"></label>
    </div>
  )  
}