import React from 'react'
import styled from 'styled-components'
import { DARKTHEME } from '../constants/colors'

const SpacerBody = styled.div`
    width: 100%;
    min-height: 10px;
    background-color: ${DARKTHEME.background};
`

function Spacer() {
    return (
        <SpacerBody></SpacerBody>
    );
}

export default Spacer;
