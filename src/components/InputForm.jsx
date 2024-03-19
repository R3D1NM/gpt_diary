/* eslint-disable react/prop-types */
import { Button, Input} from 'antd';
import { useState } from 'react';
import { Title } from './CommonStyles';
import styled from 'styled-components';
const { TextArea } = Input;

function InputForm({isLoading,handleSubmit,messageApi}) {
    const [userInput, setUserInput] = useState("")

    const handleUserInput = (e) =>{
        setUserInput(e.target.value)
    }

    const handleClick = () =>{
        if(userInput){
            messageApi.open({
                type:"success",
                content: "일기를 요청합니다"
            })
            handleSubmit(userInput)
            setUserInput("")
        }else{
            messageApi.open({
                type:"error",
                content: "오늘 하루 있었던 일을 입력해주세요"
            })
        }

    }

    return (
    <>
    <Title>오늘 하루;</Title>
    <TextArea value={userInput} onChange={handleUserInput} placeholder='오늘은 무슨 일이 있었나요?' rows={4}/>
    <ButtonContainer>
        <Button loading={isLoading} onClick={handleClick}>GPT 회고록 작성하기</Button>
    </ButtonContainer>
    </>
    )
}

export default InputForm

const ButtonContainer = styled.div`
    margin-top:20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end
`