<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-6">
    <div class="text-center">
      <date-picker
        v-model="date"
        mode="dateTime"
        :timezone="timezone"
        :is-dark="styleStore.darkMode"
        :disabled-dates='{ weekdays: [1, 7] }'
      />
      <BaseButton
        class="mt-4"
        color="success"
        small
        label="Add"
        :outline="true"
        @click.prevent="addCalendar"
      />
      <!-- <BaseButton
          color="primary"
          small
          label="Update"
          :outline="true"
          @click.prevent="()=>updateCalendar(calendar)"
        /> -->
    </div>
    <div>
      <div class="flex gap-4 mb-4" v-for="calendar in calendars" :key="calendar.id">
        {{ new Date(calendar.date).toISOString() }}
        <BaseButton
          color="danger"
          small
          label="Delete"
          :outline="true"
          @click.prevent="()=>deleteCalendar(calendar.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from "vue-router";
import { useStyleStore } from "@/stores/style.js";
import { useCalendarStore } from "@/stores/calendarStore.js";
import { useAuthStore } from "@/stores/authStore";
import BaseButton from "@/components/Buttons/BaseButton.vue";

const styleStore = useStyleStore();
const authStore = useAuthStore();
const calendarStore = useCalendarStore();
let date = new Date();
const  timezone = '';
const router = useRouter();

calendarStore.loadCalendars();

const user = authStore.user
// const { user } = storeToRefs(authStore);

if(user === null) {
  router.push('/auth/login')
}

const { calendars } = storeToRefs(calendarStore);

const addCalendar = () => {
  const calendar = {
    date: date.toISOString(),
    owner: user.username
  }
  calendarStore.addCalendar(calendar)
}

const updateCalendar = (calendar) => {
  calendarStore.addCalendar(calendar)
}

const deleteCalendar = (id) => {
  calendarStore.deleteCalendar(id)
}
</script>