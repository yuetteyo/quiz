import React, { MouseEvent } from 'react';

import Appbutton from '@/components/button/index';
import { Box, Flex, Heading } from '@chakra-ui/react';

interface QuestionCardProps {
    questions: string;
    category: string;
    totalQuestions?: number;
    questionNumber: number; //?:
    callback: (e: MouseEvent<HTMLButtonElement>) => void; // Function
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    questions,
    callback,
    category,
    totalQuestions,
    questionNumber
}) => {
    return (
        <>
            <Box bg="white" width="100%">
                <Box mb={6} fontSize={"md"} fontWeight={"bold"} textTransform={"uppercase"}>
                    Your progress: {questionNumber}/{totalQuestions}
                </Box>
                <Box>
                    {category}
                </Box>
                <Heading>
                    <Box>{questions}</Box>
                </Heading>

                <Flex>
                    <Box>
                        <Appbutton
                            colorScheme="purple"
                            variant="outline"
                            value="False"
                            width="full"
                            onClick={callback}
                        />
                        <Appbutton
                            colorScheme="purple"
                            variant="outline"
                            value="True"
                            width="full"
                            onClick={callback}
                        />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
// to check fontSize

export default QuestionCard;