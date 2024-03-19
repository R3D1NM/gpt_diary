import { useState } from "react"
import { CallGPT } from "./api/gpt"

const dummy = { 
  title: "하루 일정과 감정의 기록", 
  thumbnail: "https://source.unsplash.com/1600x900/?workout", 
  summary: "하체 운동을 못하고 어깨와 팔 운동을 한 후, GPT 웹 앱 강의를 수강하고 API 과금을 결제함.", 
  emotional_content: "오늘은 발목이 아파 운동을 제대로 못했지만, 어깨와 팔 운동으로 대체했다. 강의를 듣고 API 과금을 결제했을 때의 불안과 기대가 공존한다.", 
  emotional_result: "과금을 결제하며 느꼈던 불안함은 높아진 환율에 대한 불안과 연결되어 있다. 그러나 새로운 도전에 대한 기대와 긍정적인 마음이 함께 느껴진다.", 
  analysis: "안전한 영역을 벗어나 새로운 시도를 하는 것은 두려움과 기대가 공존하는 복잡한 감정을 일으키지만, 이를 통해 성장과 변화가 가능하다. '가장 큰 위험은 위험을 감수하지 않는 것이다.' - William S. Burroughs", 
  action_list: [ "새로운 도전을 할 때, 두려움을 이기기 위해 긍정적인 마인드를 유지하자.", "불안을 느낄 때는 근본적인 이유를 파악하고 긍정적인 측면을 찾아보자.", "자기 발전을 위해 안전한 영역을 벗어나는데 두려움을 느낄 수 있지만, 이는 성장과 발전을 위한 필수적인 과정이다." ] 
}

function App() {
  const [data, setData] = useState(dummy)
  const [isLoading, setIsLoading] = useState(false)

  const handleAPICall= async () =>{
    try {
      setIsLoading(true)
      const message = await CallGPT({prompt:`오늘도 열심히 운동을 다녀왔다. 발목이 아파서 하체 운동은 못하고 어깨와 팔 위주로 했다. 다녀와서는 점심을 먹고 샤워를 했다. 
      이제 일을 해야하는데 무얼할 지 기웃기웃대다가 GPT를 사용한 웹 앱 강의가 있길래 시작해보았다. GPT API 과금을 위해 5$를 결제했다. 명세서를 보니 높아진 환율이 체감된다. 
      비싸지만 해볼만하다 생각한다.`})
      setData(JSON.parse(message))
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
        {JSON.stringify(data)}
      </div>
      <div>
      {isLoading?"loading...":"done"}
      </div>
    </>
  )
}

export default App
