import { QuestionType } from './question-type.enum';

export interface Question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: QuestionType;
}