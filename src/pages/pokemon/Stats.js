import React from 'react'
import styled from 'styled-components'
import { STATCOLORS } from '../../constants/colors'

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100vw - 20px);
    margin-left: 10px;
    margin-right: 10px;
`

const StatsRow = styled.div`
    line-height: 30px;
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Text = styled.p`
    margin: 0;
    min-width: 50px;
    text-align: center;
`

const StatBar = styled.div`
    width: 100%;
    height; 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.2);
`

const StatValue = styled.div`
    background-color: ${(props) => {
        if(props.value < 50){
            return STATCOLORS.low
        } else if (props.value < 80) {
            return STATCOLORS.medium
        } else if (props.value < 120) {
            return STATCOLORS.high
        } else { return STATCOLORS.super }
    }};
    width: ${props => (props.value / 255) * 100}%;
    max-height: 7px;
    min-height: 7px;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.2);
`

function Stats(props) {
    return (
        <StatsContainer>
            <StatsRow>
                <Text>HP: </Text>
                <StatBar>
                    <StatValue value={props.stats[0].value}></StatValue>
                </StatBar>
                <Text>{props.stats[0].value}</Text>
            </StatsRow>
            <StatsRow>
                <Text>Atk: </Text>
                <StatBar>
                    <StatValue value={props.stats[1].value}></StatValue>
                </StatBar>
                <Text>{props.stats[1].value}</Text>
            </StatsRow>
            <StatsRow>
                <Text>Def: </Text>
                <StatBar>
                    <StatValue value={props.stats[2].value}></StatValue>
                </StatBar>
                <Text>{props.stats[2].value}</Text>
            </StatsRow>
            <StatsRow>
                <Text>SpA: </Text>
                <StatBar>
                    <StatValue value={props.stats[3].value}></StatValue>
                </StatBar>
                <Text>{props.stats[3].value}</Text>
            </StatsRow>
            <StatsRow>
                <Text>SpD: </Text>
                <StatBar>
                    <StatValue value={props.stats[4].value}></StatValue>
                </StatBar>
                <Text>{props.stats[4].value}</Text>
            </StatsRow>
            <StatsRow>
                <Text>Spe: </Text>
                <StatBar>
                    <StatValue value={props.stats[5].value}></StatValue>
                </StatBar>
                <Text>{props.stats[5].value}</Text>
            </StatsRow>
            <StatsRow>
                <Text><b>Total</b>: </Text>
                <Text><b>{props.stats[0].value + props.stats[1].value + props.stats[2].value + props.stats[3].value + props.stats[4].value + props.stats[5].value}</b></Text>
            </StatsRow>
        </StatsContainer>
    );
}

export default Stats;
