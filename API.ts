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

export type ModelCalendarFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCalendarFilterInput | null > | null,
  or?: Array< ModelCalendarFilterInput | null > | null,
  not?: ModelCalendarFilterInput | null,
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

export type ModelCalendarConnection = {
  __typename: "ModelCalendarConnection",
  items:  Array<Calendar | null >,
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
