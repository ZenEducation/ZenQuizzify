/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCalendar = /* GraphQL */ `
  query GetCalendar($id: ID!) {
    getCalendar(id: $id) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCalendars = /* GraphQL */ `
  query ListCalendars(
    $filter: ModelCalendarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalendars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      choices
      correctChoiceIndex
      quizCategory {
        id
        name
        description
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      quizcategoryID
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        choices
        correctChoiceIndex
        quizCategory {
          id
          name
          description
          createdAt
          updatedAt
        }
        quizcategoryID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionsByQuizcategoryID = /* GraphQL */ `
  query QuestionsByQuizcategoryID(
    $quizcategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByQuizcategoryID(
      quizcategoryID: $quizcategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        choices
        correctChoiceIndex
        quizCategory {
          id
          name
          description
          createdAt
          updatedAt
        }
        quizcategoryID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuizCategory = /* GraphQL */ `
  query GetQuizCategory($id: ID!) {
    getQuizCategory(id: $id) {
      id
      name
      description
      questions {
        items {
          id
          text
          choices
          correctChoiceIndex
          quizcategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQuizCategories = /* GraphQL */ `
  query ListQuizCategories(
    $filter: ModelQuizCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
