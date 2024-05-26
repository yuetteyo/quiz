import {Button} from "@chakra-ui/react";
import {ButtonProps} from "@/interface/index";
import React from "react";

const Appbutton: React.FC<ButtonProps> = ({
    value,
    onClick,
    colorScheme,
    variant, 
    className,
    disabled,
    width,
}) => {
    return(
        <>
        <Button
        onClick={(evt) => onClick(evt)}
        colorScheme={colorScheme}
        variant={variant}
        className={className}
        disabled={disabled}
        w={width}
        >
            {value}

        </Button>
        </>
    )
}

export default Appbutton;