import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import AltFormsPopup from '../../components/AltFormsPopup'
import { DARKTHEME } from '../../constants/colors'

const Container = styled.div`
    display: flex;
`

function AltForms(props) {
    const [popup, setPopup] = useState(false);

    return (
        <Container>
            <Button title="Alternate forms" function={() => { setPopup(true) }} />
            {popup &&
                <AltFormsPopup selected={props.selected} altForms={props.altForms} close={() => { setPopup(false) }} />
            }
        </Container>
    );
}

export default AltForms;
