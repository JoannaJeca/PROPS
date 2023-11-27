import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { HTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder:string,
    type:string
}

export default function BaseInput({placeholder, type}){
    return(
        <Input placeholder={placeholder} type={type}/>
    )
};

const Input = styled.input`
`