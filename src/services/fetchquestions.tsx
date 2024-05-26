import axios from "axios";

import { Questions } from '@/interface/questions.interface';

const baseURL = "https://opentdb.com/api.php?amount=10";


// amount: number,
// difficulty: string,
export const getQuestionList = async (
) => {
    try {
        // const response = await axios.get(`${baseURL}${amount}&difficulty=${difficulty}&type=boolean`);
        const { data } = await axios.get<Questions>(baseURL);
        return data;
    }
    catch (error) {
        throw new Error(`Error fetching the questions. ${error}`);
    }
};