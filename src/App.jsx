import { useState } from "react"
import { CallGPT } from "./api/gpt"
import InputForm from "./components/InputForm"

const dummy = JSON.parse(`{
  "title": "새로운 배움의 시작",
  "thumbnail": "https://source.unsplash.com/1600x900/?learning",
  "summary": "새로운 강의를 시작하며 ChatGPT를 사용한 웹 앱 제작 강의를 듣기 시작했다.",
  "emotional_content": "오늘은 ChatGPT를 사용한 웹 앱을 만드는 강의를 시작했다. 처음 듣는 강사의 강의인데, 화면이 잘 안 보이는 것 빼고는 다 좋은 것 같다. 코딩 스타일이 약간 빠르긴 한데 간단해서 이해도 잘 간다. 나중에 이 분의 다른 강의를 찾아봐야겠다.",
  "emotional_result": "이러한 새로운 학습 경험은 나에게 즐거움을 주고, 호기심을 자극한다. 새로운 도전을 통해 성장할 수 있는 기회를 갖게 되었다.",
  "analysis": "새로운 것을 배우고 도전함으로써 자아실현을 위한 원동력을 얻게 되었다. '열정을 잃지 않는 한, 세계는 당신에게 열릴 것이다.' - 티나 플레이",
  "action_list": ["새로운 것을 배우는 경험을 꾸준히 유지하자.", "자신의 호기심을 살려 다양한 분야에 도전해보자.", "성장을 위한 노력을 아끼지 말고 지속하자."]
}`)

function App() {
  const [data, setData] = useState(dummy)
  const [isLoading, setIsLoading] = useState(false)

  const handleAPICall= async (userInput) =>{
    try {
      setIsLoading(true)
      const message = await CallGPT({prompt:`${userInput}`})
      setData(JSON.parse(message))
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false)
    }
  }

  const handleSubmit = (userInput) => {
    console.log(">>userInput",userInput);
    handleAPICall(userInput)
  }

  return (
    <>
      <div>
        <InputForm isLoading={isLoading} handleSubmit={handleSubmit}/>  
      </div>
      <div>
        {JSON.stringify(data)}
      </div>
    </>
  )
}

export default App
