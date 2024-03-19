/* eslint-disable react/prop-types */
import { Button, Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

function InputForm({isLoading,handleSubmit}) {
    
    const [userInput, setUserInput] = useState("")

    const handleUserInput = (e) =>{
        setUserInput(e.target.value)
    }

    const handleClick = () =>{
        handleSubmit(userInput)
    }

    return (
    <>
    <TextArea value={userInput} onChange={handleUserInput} placeholder='오늘은 무슨 일이 있었나요?'/>
    <Button loading={isLoading} onClick={handleClick}>GPT 회고록 작성하기</Button>
    </>
    )
}

export default InputForm