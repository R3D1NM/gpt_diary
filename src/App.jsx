import { useState } from "react"
import { CallGPT } from "./api/gpt"

function App() {
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAPICall= async () =>{
    try {
      setIsLoading(true)
      const message = await CallGPT()
      setData(message)
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <>
      <div> 
        <button onClick={handleAPICall}>GPT API CALL</button>
      </div>
      <div>
        {data}
      </div>
      <div>
      {isLoading?"loading...":"done"}
      </div>
    </>
  )
}

export default App
