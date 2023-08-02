import './LightSwitch.css';
import { ThemeContext, useTheme} from "../../context/ThemeContext";

function LightSwitch() {
  const {themeName, setThemeName} = useTheme();

    // const handleClick = e => {
    //   e.preventDefault();
    //   if (themeName === 'day'){
    //     setThemeName('night');
    //   }else{
    //     setThemeName('day');
    //   }
    // }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={() => setThemeName('day')}>DAY</div>  
      <div className="off" onClick={() => setThemeName('night')}>NIGHT</div>
    </div>
  );
}
export default LightSwitch;