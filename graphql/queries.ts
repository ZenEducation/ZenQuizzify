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
