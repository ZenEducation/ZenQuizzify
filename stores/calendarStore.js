import { API, graphqlOperation } from 'aws-amplify';
import { defineStore } from "pinia";
import { getCalendar, listCalendars } from '~~/graphql/queries';
import { createCalendar, updateCalendar, deleteCalendar } from '~~/graphql/mutations';

export const state = () => ({
  calendars: null,
  loading: true
});

const getters = {};

export const actions = {
  async loadCalendars() {
    try {
      const calendars = await API.graphql(graphqlOperation(listCalendars));
      console.log('listCalendars', calendars);
      const items = calendars.data.listCalendars.items;
      this.calendars = items;
      return items;
    } catch (error) {
      console.log(error);
      this.calendars = null;
    }
  },

  async addCalendar(calendar) {
    const createCalendarInput = {
      input: calendar
    };
    try {
      this.setLoading(true);
      const result = await API.graphql(graphqlOperation(createCalendar, createCalendarInput));
      console.log("in store", result);
      this.calendars.push(result.data.createCalendar)
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      console.log(error);
    }
    
  },
  
  async updateCalendar(calendar) {
    const updateCalendarInput = {
      input: calendar
    };
  
    const result = await API.graphql(graphqlOperation(updateCalendar, updateCalendarInput));
    console.log(result);
  },

  async deleteCalendar(calendar) {
    if(!calendar.hasOwnProperty('id')) return false;
    const deleteCalendarInput = {
      input: {
        id: calendar.id
      }
    };
    try {
      console.log("delete");
      this.setLoading(true);
      const result = await API.graphql(graphqlOperation(deleteCalendar, deleteCalendarInput));
      this.calendars = this.calendars.filter(calendar => calendar.id !== result.data.deleteCalendar.id)
      console.log(result);
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      console.log(error);
    }
  },

  setLoading(status) {
    this.loading = status;
  }
};

export const useCalendarStore = defineStore("calendarStore", {
  state,
  getters,
  actions,
});
