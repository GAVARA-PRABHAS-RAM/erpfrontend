import React, { useState } from 'react';

function Attendencebutton() {
  const [status, setStatus] = useState("Present");
  const [color, setColor] = useState("green");

  function toggleStatus() {
    if (status === "Present") {
      setStatus("Absent");
      setColor("red");
    } else {
      setStatus("Present");
      setColor("green");
    }
  }

  return (
    <button style={{ backgroundColor: color }} onClick={toggleStatus}>
      {status}
    </button>
  );
}

export default Attendencebutton;
