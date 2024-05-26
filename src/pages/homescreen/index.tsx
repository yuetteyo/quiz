import { useState, useEffect } from "react";
import { getQuestionList } from "@/services/fetchquestions";
import { QuestionProps } from "@/interface/index"
import { QuestionCard } from "@/components/index"

const Homepage = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    );
};

export default Homepage;