import { InputHTMLAttributes } from "react";
import BaseInput from ".";

Interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string
}

export default function 