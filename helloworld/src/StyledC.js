import React from 'react'
import styled from 'styled-components'

const Box=styled.div`
background-color:green;
padding:50px;
border-radius:20px;
`;

function StyledC(){
    return <Box>
        <h3>This is Styled components</h3>
    </Box>
}
export default StyledC;