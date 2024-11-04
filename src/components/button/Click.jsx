
import styleButton from  './Click.module.css'
export function Click(props) {
  return (
    <>
      <button className={styleButton.botao} onClick={() => {
        alert('A label desse botão é Baixar CV')
      }}>{props.label}</button>
    </>
  )

}