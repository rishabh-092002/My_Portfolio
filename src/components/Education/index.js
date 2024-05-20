import React from 'react'
import styled from 'styled-components'
import TimeLine from '@mui/lab/Timeline';
import TimeLineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const Education = () => {
  return (
    <Container id="education">
        <Wrapper>
            <Title>Education</Title>
            <Desc>
               My Eduaction has been journey of self-discovery and growth.
               My Educational Details are as follows.
            </Desc>
            <TimeLineSection>
                <TimeLine>
                    {education.map((education , index) => (
                        <TimeLineItem>
                            <TimelineContent sx={{py:"12px" , px:2}}>
                                <EducationCard education={education}/>
                            </TimelineContent>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' color='secondary'/>
                                {index !== education.length - 1 && 
                                <TimelineConnector style = {{background : "#854CE6"}}/>}
                            </TimelineSeparator>
                        </TimeLineItem>
                    ))}
                </TimeLine>
            </TimeLineSection>
        </Wrapper>
    </Container>
  )
}

export default Education