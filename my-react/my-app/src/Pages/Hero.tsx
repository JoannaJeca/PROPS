import { styled } from "styled-components"
import Minicards from "../Props/GlobalCards"  
import data from '../MYJSON/data.json'


const CardDisplay = () =>{
    return(
         <>
         <Container>
         <Head>FEATURED MOVIES</Head>
       <Wrapper>
       {
            data?.map((props)=>(
                <Minicards Pic={props.Pic} Title={props.Title} Category = {props.Category}/> 
            ))
            }
       </Wrapper>
            
         </Container>

         </>
    )
}

export default CardDisplay

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 90px;
/* background-color: red; */
color: white;
flex-wrap:wrap;
`
const Head = styled.div`
width: 20%;
// background-color:red;
justify-self:center;
margin-left: 135px;
font-size: 20px;
font-weight: 600;
margin-top:11px;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
gap: 50px;
background-color: black;
color: white;
flex-direction: column;
`