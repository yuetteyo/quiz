import { MouseEvent, useState } from 'react';

import { Appbutton, Appspinner, QuestionCard } from '@/components/index';
import { totalQuestions } from '@/constants/index';
import { AnswerObject } from '@/interface/index';
import { Question } from '@/interface/question.interface';
import { getQuestionList } from '@/services/fetchquestions';
import { Box, Divider, Heading } from '@chakra-ui/react';

import "./index.css"

const Homepage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [startQuiz, setStartQuiz] = useState(false);
    const [loading, setLoading] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);

    const checkAnswer = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (gameOver) return;
        const choosenAnswer = e.currentTarget.innerText;
        const correct = questions[questionNumber].correct_answer === choosenAnswer;
        if (correct) setScore((previous) => previous + 1);
        if (userAnswer.length != questionNumber) {
            if (!correct) setScore((previous) => previous - 1);
            const lastIndex = userAnswer.length - 1;
            if (lastIndex >= 0) {
                userAnswer.splice(lastIndex, 1);
                const AnswerObject = {
                    question: questions[questionNumber]?.question,
                    answer: choosenAnswer,
                    correct,
                    correctAnswer: questions[questionNumber]?.correct_answer,
                };
                setUserAnswer((previous) => [...previous, AnswerObject]);
            }
            return;
        }
        const AnswerObject = {
            question: questions[questionNumber]?.question,
            answer: choosenAnswer,
            correct,
            correctAnswer: questions[questionNumber]?.correct_answer,
        };
        setUserAnswer((previous) => [...previous, AnswerObject]);
    };

    const startQuizGame = async () => {
        const questionListing = await getQuestionList(
            // totalQuestions, Difficulty.HARD
        );
        console.log(questionListing);
        setQuestions(questionListing.results) // TODO: CHANGE THE TYPE
        setLoading(false);

        setStartQuiz(true);
    }

    const nextQuestion = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const nextQuestion = questionNumber + 1;
        if (totalQuestions === nextQuestion) {
            setGameOver(true);
            return;
        }
        setQuestionNumber(nextQuestion);
    };

    const replayQuiz = (): void => {
        // console.log("replay");
        setStartQuiz(false);
        setGameOver(false);
        setQuestionNumber(0);
        setScore(0);
        setUserAnswer([]);
    };

    return (
        <div>
            {userAnswer.length === questionNumber && !gameOver && !loading && !startQuiz ? (
                <>
                    <div className="greeting-box">
                        <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
                            <Heading as="h1" size="lg" mb={2}>
                                Hi there!
                            </Heading>
                            <p>
                                You are presented with {totalQuestions} questions to answer.
                            </p>
                            <Appbutton
                                colorScheme="purple"
                                variant="solid"
                                onClick={startQuizGame}
                                value="Start Quiz Game" />
                        </Box>
                    </div>
                </>
            ) : null}

            {loading && (
                <Appspinner
                    speed="0.65"
                    emptyColor="gray.200"
                    color="purple"
                    size="lg"
                    thickness="5px"
                />
            )}
            {!loading && !gameOver && startQuiz && (
                <>
                    <QuestionCard
                        questions={questions[questionNumber].question}
                        category={questions[questionNumber].category}
                        callback={checkAnswer}
                        totalQuestions={totalQuestions}
                        questionNumber={questionNumber}
                    />

                    <Appbutton
                        disabled={
                            userAnswer.length === questionNumber + 1 && questionNumber !== totalQuestions
                        }
                        colorScheme="purple"
                        variant="solid"
                        onClick={nextQuestion}
                        value="Next Question"
                        className="next-button"
                        width="full"
                    />

                </>
            )}
            {gameOver && (
                <>
                    <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
                        <Box mb={4}>
                            <Box fontWeight="bold" as="h3" fontSize="4xl">
                                Game over!
                            </Box>
                            <Box as="h3" fontSize="xl">
                                Your score is {score}/{totalQuestions}.
                            </Box>
                        </Box>
                        <Divider />
                        {userAnswer.map((answer, index) => (
                            <Box key={index}>
                                <div className="answer-list">
                                    <Box fontSize="md" fontWeight="bold">
                                        Q: {answer.question}
                                    </Box>
                                    <ul>
                                        <li>You answered: {answer.answer}</li>
                                        <li>Correct answer: {answer.correctAnswer}</li>
                                    </ul>
                                </div>
                            </Box>
                        ))}
                        <Appbutton
                            colorScheme="purple"
                            variant="solid"
                            onClick={replayQuiz}
                            value="Replay Quiz"
                            width="full"
                        />
                    </Box>
                </>
            )}
        </div>
    );
};

export default Homepage;