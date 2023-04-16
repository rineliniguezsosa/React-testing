import { useState } from 'react';


export const Habilidades = ({skills}) => {
  const [isloggin, setIsloggin] = useState(false)
  return (
    <>
    <ol>
        {
            skills.map(item =>{
                return <li key={item}>{item}</li>
            })
        }
    </ol>
    </>
  )
}
