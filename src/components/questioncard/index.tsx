import React, { MouseEvent } from 'react';

import Appbutton from '@/components/button';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

interface QuestionCardProps {
    questions: string;
    category: string;
    totalQuestions?: number;
    questionNumber: number;
    callback: (e: MouseEvent<HTMLButtonElement>) => void; // TODO: check how to fix
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
                <Box fontSize="sm" mb={1}>
                    {category}
                </Box>
                <Heading as="h1" size="lg">
                    <Box mb={6}>{questions}</Box>
                </Heading>

                <Flex direction="column">
                    <Box w="100%" mb={4}>
                        <Appbutton
                            colorScheme="purple"
                            variant="outline"
                            value="False"
                            width="full"
                            onClick={callback}
                        />
                        </Box>
                        <Spacer />
                        <Box w="100%" mb={4}>
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