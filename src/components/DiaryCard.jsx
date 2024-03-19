/* eslint-disable react/prop-types */
import { ActionListItem, CardContainer, CardContent, CardTitle, DiaryContainer, Divider, ResultTitle } from "./CommonStyles"
import { CheckCircleTwoTone, HeartTwoTone, MessageTwoTone, SmileTwoTone, SoundTwoTone } from "@ant-design/icons"
import { Image } from "antd"
import styled from "styled-components"

const ThumbnailImage = styled(Image)`
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
`

const DiaryCard = ({data,isLoading}) => {
    return (
    <DiaryContainer>
        {isLoading&&(
            <>
            loading...
            </>
        )}
        <ResultTitle>{data.title}</ResultTitle>
        <Divider/>
        <CardContainer>
            <CardTitle>
                <CheckCircleTwoTone twoToneColor="#ff9aa2" style={{marginRight: "6px"}}/>
                요약
            </CardTitle>
            <CardContent>{data.summary}</CardContent>
        </CardContainer>
        
        <ThumbnailImage src={data.thumbnail} alt="Thumbnail" />

        <CardContainer>
            <CardTitle>
            <HeartTwoTone twoToneColor="#FFB7B2" style={{ marginRight: "6px" }} />
            감성일기장
            </CardTitle>
            <CardContent>{data.emotional_content}</CardContent>
        </CardContainer>

        <Divider />
        <CardContainer>
            <CardTitle>
            <SmileTwoTone twoToneColor="#FFDAC1" style={{ marginRight: "6px" }} />
            내가 느낀 감정
            </CardTitle>
            <CardContent>{data.emotional_result}</CardContent>
        </CardContainer>

        <Divider />
        <CardContainer>
            <CardTitle>
            <MessageTwoTone
                twoToneColor={"#B5EAD7"}
                style={{ marginRight: "6px" }}
            />
            심리 분석
            </CardTitle>
            <CardContent>{data.analysis}</CardContent>
        </CardContainer>

        <Divider />
        <CardContainer>
            <CardTitle>
            <SoundTwoTone twoToneColor="#C7CEEA" style={{ marginRight: "6px" }} />
            GPT 조언
            </CardTitle>
            <CardContent>
            {data.action_list.map((action, index) => (
                <ActionListItem key={index}>{action}</ActionListItem>
            ))}
            </CardContent>
        </CardContainer>
    </DiaryContainer>
    )
}

export default DiaryCard