import { Question } from './question.interface';

export interface Questions {
    response_code: number;
    results: Question[];
}