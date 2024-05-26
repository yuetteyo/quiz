import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=5&type=boolean";

export const getQuestionList = async (
    amount: number,
    difficulty: string,
): Promise<unknown> => {
    try{
        const response = await axios.get(`${baseURL}${amount}&difficulty=${difficulty}&type=boolean`);
        return response.data.result;
    }
    catch(error){
        throw new Error(`Error fetching the questions. ${error}`);
    }
};