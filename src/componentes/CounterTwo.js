

export const CounterTwo = ({count,handleincrement}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleincrement}>incrementar</button>
    </div>
  )
}
