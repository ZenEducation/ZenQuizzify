/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCalendarInput = {
  id?: string | null,
  date: string,
  owner: string,
};

export type ModelCalendarConditionInput = {
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCalendarConditionInput | null > | null,
  or?: Array< ModelCalendarConditionInput | null > | null,
  not?: ModelCalendarConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Calendar = {
  __typename: "Calendar",
  id: string,
  date: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCalendarInput = {
  id: string,
  date?: string | null,
  owner?: string | null,
};

export type DeleteCalendarInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  text: string,
  choices: Array< string >,
  correctChoiceIndex: number,
  quizcategoryID: string,
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null,
  choices?: ModelStringInput | null,
  correctChoiceIndex?: ModelIntInput | null,
  quizcategoryID?: ModelIDInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  text: string,
  choices: Array< string >,
  correctChoiceIndex: number,
  quizCategory?: QuizCategory | null,
  quizcategoryID: string,
  createdAt: string,
  updatedAt: string,
};

export type QuizCategory = {
  __typename: "QuizCategory",
  id: string,
  name: string,
  description?: string | null,
  questions?: ModelQuestionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  choices?: Array< string > | null,
  correctChoiceIndex?: number | null,
  quizcategoryID?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateQuizCategoryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelQuizCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelQuizCategoryConditionInput | null > | null,
  or?: Array< ModelQuizCategoryConditionInput | null > | null,
  not?: ModelQuizCategoryConditionInput | null,
};

export type UpdateQuizCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteQuizCategoryInput = {
  id: string,
};

export type ModelCalendarFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCalendarFilterInput | null > | null,
  or?: Array< ModelCalendarFilterInput | null > | null,
  not?: ModelCalendarFilterInput | null,
};

export type ModelCalendarConnection = {
  __typename: "ModelCalendarConnection",
  items:  Array<Calendar | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  choices?: ModelStringInput | null,
  correctChoiceIndex?: ModelIntInput | null,
  quizcategoryID?: ModelIDInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelQuizCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelQuizCategoryFilterInput | null > | null,
  or?: Array< ModelQuizCategoryFilterInput | null > | null,
  not?: ModelQuizCategoryFilterInput | null,
};

export type ModelQuizCategoryConnection = {
  __typename: "ModelQuizCategoryConnection",
  items:  Array<QuizCategory | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCalendarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCalendarFilterInput | null > | null,
  or?: Array< ModelSubscriptionCalendarFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  choices?: ModelSubscriptionStringInput | null,
  correctChoiceIndex?: ModelSubscriptionIntInput | null,
  quizcategoryID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionQuizCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuizCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuizCategoryFilterInput | null > | null,
};

export type CreateCalendarMutationVariables = {
  input: CreateCalendarInput,
  condition?: ModelCalendarConditionInput | null,
};

export type CreateCalendarMutation = {
  createCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCalendarMutationVariables = {
  input: UpdateCalendarInput,
  condition?: ModelCalendarConditionInput | null,
};

export type UpdateCalendarMutation = {
  updateCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCalendarMutationVariables = {
  input: DeleteCalendarInput,
  condition?: ModelCalendarConditionInput | null,
};

export type DeleteCalendarMutation = {
  deleteCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuizCategoryMutationVariables = {
  input: CreateQuizCategoryInput,
  condition?: ModelQuizCategoryConditionInput | null,
};

export type CreateQuizCategoryMutation = {
  createQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuizCategoryMutationVariables = {
  input: UpdateQuizCategoryInput,
  condition?: ModelQuizCategoryConditionInput | null,
};

export type UpdateQuizCategoryMutation = {
  updateQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuizCategoryMutationVariables = {
  input: DeleteQuizCategoryInput,
  condition?: ModelQuizCategoryConditionInput | null,
};

export type DeleteQuizCategoryMutation = {
  deleteQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCalendarQueryVariables = {
  id: string,
};

export type GetCalendarQuery = {
  getCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCalendarsQueryVariables = {
  filter?: ModelCalendarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalendarsQuery = {
  listCalendars?:  {
    __typename: "ModelCalendarConnection",
    items:  Array< {
      __typename: "Calendar",
      id: string,
      date: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      choices: Array< string >,
      correctChoiceIndex: number,
      quizCategory?:  {
        __typename: "QuizCategory",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      quizcategoryID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuestionsByQuizcategoryIDQueryVariables = {
  quizcategoryID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionsByQuizcategoryIDQuery = {
  questionsByQuizcategoryID?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      choices: Array< string >,
      correctChoiceIndex: number,
      quizCategory?:  {
        __typename: "QuizCategory",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      quizcategoryID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuizCategoryQueryVariables = {
  id: string,
};

export type GetQuizCategoryQuery = {
  getQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuizCategoriesQueryVariables = {
  filter?: ModelQuizCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizCategoriesQuery = {
  listQuizCategories?:  {
    __typename: "ModelQuizCategoryConnection",
    items:  Array< {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCalendarSubscriptionVariables = {
  filter?: ModelSubscriptionCalendarFilterInput | null,
};

export type OnCreateCalendarSubscription = {
  onCreateCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCalendarSubscriptionVariables = {
  filter?: ModelSubscriptionCalendarFilterInput | null,
};

export type OnUpdateCalendarSubscription = {
  onUpdateCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCalendarSubscriptionVariables = {
  filter?: ModelSubscriptionCalendarFilterInput | null,
};

export type OnDeleteCalendarSubscription = {
  onDeleteCalendar?:  {
    __typename: "Calendar",
    id: string,
    date: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    choices: Array< string >,
    correctChoiceIndex: number,
    quizCategory?:  {
      __typename: "QuizCategory",
      id: string,
      name: string,
      description?: string | null,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quizcategoryID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuizCategorySubscriptionVariables = {
  filter?: ModelSubscriptionQuizCategoryFilterInput | null,
};

export type OnCreateQuizCategorySubscription = {
  onCreateQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuizCategorySubscriptionVariables = {
  filter?: ModelSubscriptionQuizCategoryFilterInput | null,
};

export type OnUpdateQuizCategorySubscription = {
  onUpdateQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuizCategorySubscriptionVariables = {
  filter?: ModelSubscriptionQuizCategoryFilterInput | null,
};

export type OnDeleteQuizCategorySubscription = {
  onDeleteQuizCategory?:  {
    __typename: "QuizCategory",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        text: string,
        choices: Array< string >,
        correctChoiceIndex: number,
        quizcategoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
