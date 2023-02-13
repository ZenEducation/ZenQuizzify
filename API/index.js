import { API, graphqlOperation } from 'aws-amplify';
import { getCalendar, listCalendars, getQuestion, listQuestions, listQuizCategories, getQuizCategory } from '~~/graphql/queries';
// import { deleteCalendar } from '~~/graphql/mutations';

export const state = () => ({
  calendars: null,
  loading: true
});

const getters = {};

const fetchApi = async (query) => {
  try {
    const result = await API.graphql(graphqlOperation(query));
    console.log("api result", result);
    return result.data;
  } catch (error) {
    console.log(error);
    return null
  }
}

export const loadCalendars = async () => {
  const result = await fetchApi(listCalendars);
  return result;
}

export const loadQuizCategory = async () => {
  const result = await fetchApi(listQuizCategories);
  return result.listQuizCategories.items;
}

export const loadQuestions = async (id) => {
  const condition = {
    filter: {
      quizcategoryID: {eq: id}
    },
    limit: 10,
  }
  const result = await API.graphql(graphqlOperation(getQuizCategory, {id: id}));
  return result.data.getQuizCategory;
}
