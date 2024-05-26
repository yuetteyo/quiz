import { Interface } from "readline";

export default interface ButtonProps {
    value: string;
    onClick: (a: unknown) => void; // Function
    colorScheme: string;
    variant: string; 
    className?: string;
    disabled?: string; //any
    width?: string;
}