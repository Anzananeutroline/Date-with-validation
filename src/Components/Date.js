import React,{useState} from 'react';
import "./Date.css";

const DateValidation = () => {
    const currentDate = new Date();
    const fullYear = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getUTCDate();
    const cdate = `${fullYear}-0${month + 1}-${day}`;
    const [userDate, setUserDate] = useState(currentDate);
   
    const onDateInput = e => {
        setUserDate(e.target.value);
    }

    const onSubmit = () => {
        console.log("Current date", currentDate);
        console.log("User Date", userDate);
        console.log("Cdate", cdate);
        if (cdate === userDate) {
           alert("Matched");
        } else {
            alert("Not matched")
        }
    }

  return (
      <div className='wrapper'>
          <label htmlFor="date">Enter date</label>
          <input type="date" name="date" id="date" onChange={onDateInput} value={userDate } />
          <button onClick = {onSubmit} type = "submit">Save</button>
    </div>
  )
}

export default DateValidation;