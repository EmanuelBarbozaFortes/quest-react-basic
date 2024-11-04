
import './Click.module.css'
export function Click(props) {
  return (
    <>
      <button onClick={() => {
        alert('A label desse botão é Baixar CV')
      }}>{props.label}</button>
    </>
  )

}