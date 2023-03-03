import { API, graphqlOperation } from 'aws-amplify';
import { getCalendar, listCalendars, getQuestion, listQuestions, listQuizCategories, getQuizCategory } from '~~/graphql/queries';
import { DataStore } from '@aws-amplify/datastore'
import { Calendar, Question, QuizCategory } from '../models'
// import { deleteCalendar } from '~~/graphql/mutations';

const fetchApi = async (query) => {
  try {
    const result = await API.graphql(graphqlOperation(query));
    return result.data;
  } catch (error) {
    console.log(error);
    return null
  }
}

// export const loadCalendars = async () => {
//   const result = await fetchApi(listCalendars);
//   return result;
// }

// export const loadQuizCategory = async () => {
//   const result = await fetchApi(listQuizCategories);
//   return result.listQuizCategories.items;
// }

// export const loadQuestions = async (id) => {
//   const condition = {
//     filter: {
//       quizcategoryID: {eq: id}
//     },
//     limit: 10,
//   }
//   const result = await API.graphql(graphqlOperation(getQuizCategory, {id: id}));
//   return result.data.getQuizCategory;
// }

export const loadCalendars = async () => {
  const result = await DataStore.query(Calendar)
  return result;
}

export const addCalendar = async (data) => {
  const result = await DataStore.save(new Calendar(data))
  console.log("datastore add:", result);
  return result;
}

// export const updateCalendar = async (data) => {
//   const result = await DataStore.save(new Calendar(data))
//   console.log("datastore update:", result);
//   return result;
// }

export const deleteCalendar = async (id) => {
  const calendar = await DataStore.query(Calendar, id)
  const result = await DataStore.delete(calendar)
  console.log("datastore delete:", result);
  return result;
}
