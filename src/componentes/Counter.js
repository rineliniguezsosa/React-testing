import { useState } from 'react';


export const Counter = () => {
  const [cuenta, setCuenta] = useState(0)
  return (
    <div>
        <h1>{cuenta}</h1>
        <button onClick={()=> setCuenta(cuenta+1)}>incrementar</button>
    </div>
  )
}
