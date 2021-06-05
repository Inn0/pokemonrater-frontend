import React from 'react'
import styled from 'styled-components'

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

const temp = styled.p`
    margin: 0;
`

function Stats(props) {
    return (
        <StatsContainer>
            <StatsRow>
                <temp>HP: </temp>
                <temp>{props.stats[0].value}</temp>
            </StatsRow>
            <StatsRow>
                <temp>Atk: </temp>
                <temp>{props.stats[1].value}</temp>
            </StatsRow>
            <StatsRow>
                <temp>Def: </temp>
                <temp>{props.stats[2].value}</temp>
            </StatsRow>
            <StatsRow>
                <temp>SpA: </temp>
                <temp>{props.stats[3].value}</temp>
            </StatsRow>
            <StatsRow>
                <temp>SpD: </temp>
                <temp>{props.stats[4].value}</temp>
            </StatsRow>
            <StatsRow>
                <temp>Spe: </temp>
                <temp>{props.stats[5].value}</temp>
            </StatsRow>
            <StatsRow>
                <temp><b>Total</b>: </temp>
                <temp><b>{props.stats[0].value + props.stats[1].value + props.stats[2].value + props.stats[3].value + props.stats[4].value + props.stats[5].value}</b></temp>
            </StatsRow>
        </StatsContainer>
    );
}

export default Stats;
