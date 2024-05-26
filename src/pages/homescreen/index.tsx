import React, { useState, useEffect } from "react";
import { Difficulty, totalQuestions } from "@/constants/index";
import { getQuestionList } from "@/services/fetchquestions";
import { QuestionProps, AnswerObject } from "@/interface/index"
import { QuestionCard } from "@/components/index"
import { Appspinner, Appbutton } from "@/components/index"

import { Box, Heading, Divider } from "@chakra-ui/react"


const Homepage = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [startQuiz, setStartQuiz] = useState(false);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);


    useEffect(()=> {
        const fetchQuestions = async () =>{
            const questionListing = await getQuestionList(
                totalQuestions, Difficulty.HARD
            );
            setQuestions(questionListing) // TODO: CHANGE THE TYPE
            setLoading(false);
        };
        fetchQuestions();
    }, []);

    const checkAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(gameOver) return;
        const choosenAnswer = e.currentTarget.innerText;
        const correct = questions[questionNumber].correct_answer === choosenAnswer;
        if(correct) setScore((previous) => previous + 1);
        if(userAnswer.length != questionNumber) {
            console.log("more than 1 clicked");
        }
        const AnswerObject = {
            question: questions[questionNumber]?.question,
            answer: choosenAnswer,
            correct,
            correctAnswer: questions[questionNumber]?.correct_answer,
        }
    };

    const startQuizGame = (): void => {
        // console.log("start quiz game");
        setStartQuiz(true);
    }

    const nextQuestion = () => {
        console.log("next question");
    }

    const replayQuiz = () => {
        console.log("replay");
    }


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
                                value="Start Quiz Game"/>
                        </Box>
                    </div>
                </>
            ) : null }

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
                        userAnswer.length === questionNumber + 1 && questionNumber !== totalQuestions ? "" : "disabled"
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
            {!startQuiz && <>Start</>}
        </div>
    );
};

export default Homepage;