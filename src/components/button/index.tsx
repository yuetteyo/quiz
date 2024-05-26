import React, { MouseEvent } from 'react';

import { Button } from '@chakra-ui/react';

interface AppbuttonProps {
    value: string;
    onClick: (evt: MouseEvent<HTMLButtonElement>) => void; // Function
    colorScheme: string;
    variant: string;
    className?: string;
    disabled?: boolean; //any
    width?: string;
}

const Appbutton: React.FC<AppbuttonProps> = ({
    value,
    onClick,
    colorScheme,
    variant,
    className,
    disabled,
    width,
}) => {
    return (
        <>
            <Button
                onClick={onClick}
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