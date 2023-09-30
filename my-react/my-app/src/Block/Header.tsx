import styled from "styled-components"

const Footer = ()=>{
    return(
        <div>
            <Container>
                <p>Header</p>
            </Container>
        </div>
    )
};
export default Footer;

const Container = styled.footer`
width:100%;
display:flex;
padding:5.5px 0px;
background-color:#b077d8;
color:silver;
justify-content:center;

`