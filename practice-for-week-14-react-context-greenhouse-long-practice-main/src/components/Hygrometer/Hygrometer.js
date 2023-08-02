import ReactSlider from "react-slider";
import "./Hygrometer.css";
import {useState, useEffect} from "react";
import {ClimateContext, useClimate} from "../../context/ClimateContext"

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();
  const [targethum, setTargethum] = useState(humidity);

  
  useEffect(()=>{
    if (targethum !== humidity) {
      // trigger the setTimeOut
      const setTemp = setTimeout(()=> {
        if(targethum > humidity){
          setHumidity(prev => prev + 2)
        }else{
          setHumidity(prev => prev - 2)
        }
      }, 1000)
      // return () => clearTimeout(setTemp);
    }
  },[targethum, humidity, setHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={targethum}
        onAfterChange={(val) => {setTargethum(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;