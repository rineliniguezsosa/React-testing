import { useState } from 'react';


export const useCounter = (cuentainicial = 0) => {
  const [count, setCount] = useState(cuentainicial)

  const increment = () =>{
    setCount(count+1)
  }

  const decrement = () =>{
    setCount(count-1)
  }
  return {

  }
}
