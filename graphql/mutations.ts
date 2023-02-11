/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCalendar = /* GraphQL */ `
  mutation CreateCalendar(
    $input: CreateCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    createCalendar(input: $input, condition: $condition) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCalendar = /* GraphQL */ `
  mutation UpdateCalendar(
    $input: UpdateCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    updateCalendar(input: $input, condition: $condition) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteCalendar = /* GraphQL */ `
  mutation DeleteCalendar(
    $input: DeleteCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    deleteCalendar(input: $input, condition: $condition) {
      id
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createQuizCategory = /* GraphQL */ `
  mutation CreateQuizCategory(
    $input: CreateQuizCategoryInput!
    $condition: ModelQuizCategoryConditionInput
  ) {
    createQuizCategory(input: $input, condition: $condition) {
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
export const updateQuizCategory = /* GraphQL */ `
  mutation UpdateQuizCategory(
    $input: UpdateQuizCategoryInput!
    $condition: ModelQuizCategoryConditionInput
  ) {
    updateQuizCategory(input: $input, condition: $condition) {
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
export const deleteQuizCategory = /* GraphQL */ `
  mutation DeleteQuizCategory(
    $input: DeleteQuizCategoryInput!
    $condition: ModelQuizCategoryConditionInput
  ) {
    deleteQuizCategory(input: $input, condition: $condition) {
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
