import { useState,useEffect } from 'react';


export const Habilidades = ({skills}) => {
  const [isloggin, setIsloggin] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsloggin(true)
    }, 500);
  }, [])
  
  return (
    <>
    <ol>
        {
            skills.map(item =>{
                return <li key={item}>{item}</li>
            })
        }
    </ol>
        {isloggin ? <button>comienza a aprender</button>: <button onClick={()=> setIsloggin(true)}>loggin</button>}
    </>
  )
}
