import { useContext } from 'react'
import { TitleColorContext } from '../context/TitleColorContext'

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext)

  if(!TitleColorContext){
      console.log("algo deu errado no 'useTitleColorContext'");
  }  

  return (
    context
  )
}

export default useTitleColorContext