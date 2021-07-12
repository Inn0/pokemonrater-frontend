/* eslint-disable array-callback-return */
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
`

const FactorContainer = styled.div`
    height: 30px;
    min-width: 30px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    border-radius: 3px;
    background-color: ${props => props.color};
    border: 1px solid rgba(0,0,0,0.3);
    text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
    color: white;
    margin: 5px;
`

const FactorTitle = styled.p`
    margin: auto;
`

const TypeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.p`
    font-size: 18px;
    font-weight: 550;
    margin: 0;
    margin-left: calc(50% - 70px);
    margin-right: calc(50% - 70px);
    margin-bottom: 5px;
    padding: 0;
    width: 140px;
`

function Defenses(props) {
    return (
        <DefenseContainer>
            <Title>Type weaknesses</Title>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.darkRed}>
                    <FactorTitle>4</FactorTitle>
                </FactorContainer>
                <TypeContainer>
                    {props.defenses.map(x => {
                        if (x.factor === 4) {
                            return <Type key={x.id} type={x.name}></Type>
                        }
                    })}
                </TypeContainer>
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.red}>
                    <FactorTitle>2</FactorTitle>
                </FactorContainer>
                <TypeContainer>
                    {props.defenses.map(x => {
                        if (x.factor === 2) {
                            return <Type key={x.id} type={x.name}></Type>
                        }
                    })}
                </TypeContainer>
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.green}>
                    <FactorTitle>&frac12;</FactorTitle>
                </FactorContainer>
                <TypeContainer>
                    {props.defenses.map(x => {
                        if (x.factor === 0.5) {
                            return <Type key={x.id} type={x.name}></Type>
                        }
                    })}
                </TypeContainer>
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.brightGreen}>
                    <FactorTitle>&frac14;</FactorTitle>
                </FactorContainer>
                <TypeContainer>
                    {props.defenses.map(x => {
                        if (x.factor === 0.25) {
                            return <Type key={x.id} type={x.name}></Type>
                        }
                    })}
                </TypeContainer>
            </DefenseRow>
            <DefenseRow>
                <FactorContainer color={DEFENSECOLORS.black}>
                    <FactorTitle>0</FactorTitle>
                </FactorContainer>
                <TypeContainer>
                    {props.defenses.map(x => {
                        if (x.factor === 0) {
                            return <Type key={x.id} type={x.name}></Type>
                        }
                    })}
                </TypeContainer>
            </DefenseRow>
        </DefenseContainer>
    );
}

export default Defenses;
