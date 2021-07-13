import React, { useState } from 'react'
import styled from 'styled-components'
import { DARKTHEME } from '../../constants/colors'
import TierIndicator from '../../components/TierIndicator'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin: 5px;
`

const RatingTitle = styled.p`
    margin: auto;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: ${DARKTHEME.textColor};
`

const RatingNumber = styled.p`
    margin: auto;
    display: flex;
    font-size: 16px;
    color: ${DARKTHEME.textColor};
`

function Ratings(props) {
    return (
        <Container>
            <Row>
                <RatingContainer>
                    <RatingTitle>Physical Tank</RatingTitle>
                    <TierIndicator rating={props.ratings.physicalTank}></TierIndicator>
                    <RatingNumber>{props.ratings.physicalTank}</RatingNumber>
                </RatingContainer>
                <RatingContainer>
                    <RatingTitle>Setup</RatingTitle>
                    <TierIndicator rating={props.ratings.setup}></TierIndicator>
                    <RatingNumber>{props.ratings.setup}</RatingNumber>
                </RatingContainer>
                <RatingContainer>
                    <RatingTitle>Special Tank</RatingTitle>
                    <TierIndicator rating={props.ratings.specialTank}></TierIndicator>
                    <RatingNumber>{props.ratings.specialTank}</RatingNumber>
                </RatingContainer>
            </Row>
            <Row>
                <RatingContainer>
                    <RatingTitle>Physical Attacker</RatingTitle>
                    <TierIndicator rating={props.ratings.physicalAttacker}></TierIndicator>
                    <RatingNumber>{props.ratings.physicalAttacker}</RatingNumber>
                </RatingContainer>
                <RatingContainer>
                    <RatingTitle>Special Attacker</RatingTitle>
                    <TierIndicator rating={props.ratings.specialAttacker}></TierIndicator>
                    <RatingNumber>{props.ratings.specialAttacker}</RatingNumber>
                </RatingContainer>
            </Row>
        </Container>
    );
}

export default Ratings;
