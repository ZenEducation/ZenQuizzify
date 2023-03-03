import { API, DataStore, graphqlOperation } from 'aws-amplify';
import { defineStore } from "pinia";
import { getCalendar, listCalendars } from '~~/graphql/queries';
// import { createCalendar, updateCalendar, deleteCalendar } from '~~/graphql/mutations';
import { addCalendar, deleteCalendar, loadCalendars, updateCalendar } from '~~/API/index.js';

export const state = () => ({
  calendars: [],
  loading: true
});

const getters = {};

export const actions = {
  async loadCalendars() {
    try {
      const calendars = await loadCalendars();
      // const items = calendars.data.listCalendars.items;
      this.calendars = calendars;
      return calendars;
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
      // const result = await API.graphql(graphqlOperation(createCalendar, createCalendarInput));
      const result = await addCalendar(calendar)
      this.calendars.push(result)
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      console.log(error);
    }
    
  },
  
  // async updateCalendar(calendar) {
  //   const updateCalendarInput = {
  //     input: calendar
  //   };
  
  //   // const result = await API.graphql(graphqlOperation(updateCalendar, updateCalendarInput));
  //   const result = updateCalendar()
  // },

  async deleteCalendar(id) {
    if(!id) return false;
    // const deleteCalendarInput = {
    //   input: {
    //     id: calendar.id
    //   }
    // };
    try {
      this.setLoading(true);
      // const result = await API.graphql(graphqlOperation(deleteCalendar, deleteCalendarInput));
      const result = await deleteCalendar(id)
      this.calendars = this.calendars.filter(calendar => calendar.id !== result.id)
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
