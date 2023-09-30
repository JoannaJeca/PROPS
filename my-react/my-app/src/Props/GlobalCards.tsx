import { styled } from "styled-components";
import {BsArrowRightCircle} from "react-icons/bs"

interface iProps {
    Pic: string
    Title: string
    Category: string
}

const Minicards = ({Pic, Title, Category}:iProps) =>{ 
    return (
        <div>
        <Wrapper>
            <ImageHolder>
                <Curtain><BsArrowRightCircle/></Curtain>
                <img src={Pic} alt=""/>
            </ImageHolder>
            <TextHolder>
                <h2>{Title}</h2>
                <p>{Category}</p>
            </TextHolder>
        </Wrapper>
        </div>
    )
}

export default Minicards;

const Curtain = styled.div`
position:absolute;
top:0;
width:100%;
height:100%;
border-radius:10px;
background-color:red;
display:flex;
justify-content:center;
align-items:center;
opacity:0;
font-size:39px;
color:white;
&:hover{
    opacity:1;
    transition:all ease-in-out 350ms
}
`

const TextHolder = styled.div`
width: 100%;
height: 45%;
h2{
    margin-bottom:5px;
    font-size:20px;
};
P{
    margin-top:3px;
}

`
const ImageHolder = styled.div`
width: 100%;
height: 50%;
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
border-radius: 10px;
}&:hover{
    border: 3px solid grey;
    background-color: rgba(0,0,0,0.9);
    border-radius: 10px;
};
position:relative;
`
const Wrapper = styled.div`
    width: 250px;
    height: 246px;
    color: white;

`