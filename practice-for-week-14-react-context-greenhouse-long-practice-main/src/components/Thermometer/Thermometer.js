import ReactSlider from "react-slider";
import './Thermometer.css';
import {ClimateContext, useClimate} from "../../context/ClimateContext"; 
import { useState, useEffect } from "react";

function Thermometer() {
  const {temperature, setTemperature} = useClimate();
  // console.log(useClimate())
  const [targetTemp, setTargetTemp] = useState(temperature);

  
  useEffect(()=>{
    if (targetTemp !== temperature) {
      // trigger the setTimeOut
      const setTemp = setTimeout(()=> {
        if(targetTemp > temperature){
          setTemperature(prev => prev + 1)
        }else{
          setTemperature(prev => prev - 1)
        }
      }, 1000)
      // return () => clearTimeout(setTemp);
    }
  },[targetTemp, temperature, setTemperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={targetTemp}
        onAfterChange={(val) => {setTargetTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;