import React from 'react'
import styled from 'styled-components'
import Type from './Type'
import { DEFENSECOLORS } from '../../constants/colors'

const DefenseContainer = styled.div`
    width: calc(100vw - 20px);
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const DefenseRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 5px;
`

const FactorContainer = styled.div`
    height: 30px;
    width: 30px;
    margin-left: 0;
    margin-right: 5px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    border-radius: 3px;
    background-color: ${props => props.color};
    border: 1px solid rgba(0,0,0,0.3);
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    color: white;
`

const FactorTitle = styled.p`
    margin: auto;
`

function Defenses(props) {
    return (
        <DefenseContainer>
            {console.log(props)}
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.black}>
                    <FactorTitle>0</FactorTitle>
                </FactorContainer>
                {props.defenses.map(x => {
                    if (x.factor === 0) {
                        return <Type type={x.name}></Type>
                    }
                })}
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.darkRed}>
                    <FactorTitle>&frac14;</FactorTitle>
                </FactorContainer>
                {props.defenses.map(x => {
                    if (x.factor === 0.25) {
                        return <Type type={x.name}></Type>
                    }
                })}
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.red}>
                    <FactorTitle>&frac12;</FactorTitle>
                </FactorContainer>
                {props.defenses.map(x => {
                    if (x.factor === 0.5) {
                        return <Type type={x.name}></Type>
                    }
                })}
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.green}>
                    <FactorTitle>2</FactorTitle>
                </FactorContainer>
                {props.defenses.map(x => {
                    if (x.factor === 2) {
                        return <Type type={x.name}></Type>
                    }
                })}
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.brightGreen}>
                    <FactorTitle>4</FactorTitle>
                </FactorContainer>
                {props.defenses.map(x => {
                    if (x.factor === 4) {
                        return <Type type={x.name}></Type>
                    }
                })}
            </DefenseRow>
        </DefenseContainer>
    );
}

export default Defenses;
