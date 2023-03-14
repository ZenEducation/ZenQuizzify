/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCalendar = /* GraphQL */ `
  subscription OnCreateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onCreateCalendar(filter: $filter) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCalendar = /* GraphQL */ `
  subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onUpdateCalendar(filter: $filter) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCalendar = /* GraphQL */ `
  subscription OnDeleteCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onDeleteCalendar(filter: $filter) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreateQuizCategory = /* GraphQL */ `
  subscription OnCreateQuizCategory(
    $filter: ModelSubscriptionQuizCategoryFilterInput
  ) {
    onCreateQuizCategory(filter: $filter) {
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
export const onUpdateQuizCategory = /* GraphQL */ `
  subscription OnUpdateQuizCategory(
    $filter: ModelSubscriptionQuizCategoryFilterInput
  ) {
    onUpdateQuizCategory(filter: $filter) {
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
export const onDeleteQuizCategory = /* GraphQL */ `
  subscription OnDeleteQuizCategory(
    $filter: ModelSubscriptionQuizCategoryFilterInput
  ) {
    onDeleteQuizCategory(filter: $filter) {
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
