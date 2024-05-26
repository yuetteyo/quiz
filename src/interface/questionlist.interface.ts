export default interface QuestionProps {
    question: string;
    category: string;
    callback: Function; //Function 
    totalQuestions: number;
    questionNumber: number;
    correct_answer: string;

}