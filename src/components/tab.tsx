import { useOutletContext } from "react-router-dom"
import { useEffect, useRef } from "react"
import ABCJS from 'abcjs'

import { Data } from "../types/data"
import { ConverterToAbc } from "../services/converter-to-abc"

const Tab = () => {
  const [ data ] = useOutletContext<[ Data ]>()
  
  const paperRef = useRef<HTMLDivElement>(null)

  const converted_notes = ConverterToAbc(data.notes)

  useEffect(() => {
    if (paperRef.current){
      ABCJS.renderAbc(
        paperRef.current,
        `
          T: ${data.name}
          |: ${converted_notes}
        `,
        {
          tablature: [
            {
              instrument: 'guitar'
            }
          ]
        }
      )
    }
  }, [data.name, converted_notes])
  

  return (
    <div className="m-auto overflow-auto h-full">
      {!paperRef 
        ? <p className="font-semibold text-4xl">Carregando...</p>
        : <div id="paper" ref={paperRef}></div>
      }
    </div>
  )
}

export default Tab