import { useState } from "react"

export const TicButton = ({change}: {change: (text: string) => void}, {text2}: {text2: string}): JSX.Element => {
  /*const [active, setActive] = useState<boolean>(false);

  const toggle = () => {
    console.log({text2})
    if (text2 === "Player X Turn" ) {
      change("Player O Turn");
    } else {
      change("Player X Turn");
    }
    setActive(!active);
  }*/

  const flip = () =>  {
    if(text2 === "Player O Turn"){
        change("Player X Turn")
    }
    else{
      change("Player Y Turn")
    }

  }

  return <button className = "space" onClick={() => flip()}></button>
}