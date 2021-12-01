import React, {useState} from "react";
import ScheduleIcon from '@material-ui/icons/Schedule';

function Time(){
  setInterval(changeTime,1000);
  const time = new Date().toTimeString().split(" ")[0];
  const [currentTime, setCurrentTime] = useState(time);

  function changeTime(){
    const newTime = new Date().toTimeString().split(" ")[0];
    setCurrentTime(newTime);
  }

  return <div className="time"><span className="pink"><ScheduleIcon fontSize="large"/>  {currentTime}</span></div>;
}

export default Time;
