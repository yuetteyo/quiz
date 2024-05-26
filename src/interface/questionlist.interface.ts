export default interface QuestionProps {
    question: string;
    category: string;
    callback: () => void; //Function 
    totalQuestions: number;
    questionNumber: number;
    correct_answer: string;

}