import { Click } from "../button/Click";
import { Card } from "../card/card";

export function Core() {

  const style = {
    color:'blue',
    textTransform: 'uppercase'
  }

  return (

    <>
      <main>
        <Card
          style={style}
          title={'Emanuel Fortes'}
          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit explicabo consequuntur, voluptates, sequi corrupti voluptate neque quas, ipsam deleniti commodi sit beatae! Voluptatum provident facere, aut exercitationem molestiae eos!'}
        />
        <Card
          style={style}
          title={'Tiago Fortes'}
          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit explicabo consequuntur, voluptates, sequi corrupti voluptate neque quas, ipsam deleniti commodi sit beatae! Voluptatum provident facere, aut exercitationem molestiae eos!'}
        />
        <Click label={'Baixa CV'}/>
      </main>
    </>

  )
}