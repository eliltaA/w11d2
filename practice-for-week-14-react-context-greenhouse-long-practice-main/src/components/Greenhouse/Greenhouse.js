import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { ThemeContext, useTheme} from "../../context/ThemeContext";
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
   //custom hook return the provider's value
  const {themeName, setThemeName} = useTheme();
  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === "day" ? dayImage : nightImage}   
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;

