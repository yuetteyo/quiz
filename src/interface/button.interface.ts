import { Interface } from "readline";

export default interface ButtonProps {
    value: string;
    onClick: unknown; // Function
    colorScheme: string;
    variant: string; 
    className?: string;
    disabled?: boolean; //any
    width?: string;
}