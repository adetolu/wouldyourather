import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getQuestions } from './questions'
import { getUsers } from './users'
import { _saveQuestionAnswer } from "../utils/_DATA"

export function getData() {
    // console.log('getData')
    return async dispatch => {

        const initialData = await Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
            return [users, questions]
        })
        // .then((response) => {
        // console.log(initialData)
        dispatch(getQuestions(initialData[1]));

        dispatch(getUsers(initialData[0]));

        //   });

    }
    // console.log(initialData);
    // return dispatch => {
    //     dispatch(getQuestions(initialData[1]));
    //     dispatch(getUsers(initialData[0]));
    // }
}

export function saveQuestions (authedUser, qid, answer) {
    //    console.log(questions)
        
        let question = {
            authedUser : authedUser,
            qid: qid,
            answer: answer
        }


             return _saveQuestionAnswer(question)
                    
    }


