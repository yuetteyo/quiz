import axios from 'axios';

import { Questions } from '@/interface/questions.interface';

const baseURL = "https://opentdb.com/api.php?amount=10";


// amount: number,
// difficulty: string,
export const getQuestionList = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    try {
        // const response = await axios.get(`${baseURL}${amount}&difficulty=${difficulty}&type=boolean`);
        setLoading(true);
        const { data } = await axios.get<Questions>(baseURL);
        setLoading(false);
        return data;
    }
    catch (error) {
        throw new Error(`Error fetching the questions. ${error}`);
    }
};