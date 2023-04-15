

export const Habilidades = ({skills}) => {
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
