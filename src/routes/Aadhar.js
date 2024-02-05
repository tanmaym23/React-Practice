import React from 'react'
import { useParams } from "react-router-dom";
function Aadhar() {
    const params=useParams();
  return (
    <div>
        <h1>{params.usedID} and params.{Aadhar}</h1>
    </div>
  )
}

export default Aadhar