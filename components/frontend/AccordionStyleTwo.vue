<template>
    <ul class="mx-accordion-two">
        <li v-for="(item, index) in items" :key="index" @click="visible=index" class="card">
            <div class="card-header">
                <button class="acc-btn border-0 text-start w-100" :class="{'active' : visible===index}">{{ item.title }}</button>
            </div>
            <div v-show="visible===index" class="card-body">
                <p>{{ item.text }}</p>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: "How can we help?",
                        text: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren’t supposed to be devoured in a short time, you can always access our knowledge base from any device."
                    },
                    {
                        title: "Why would I need a business coach?",
                        text: "Study for a number of courses at the same time is possible as long as you can afford the fee and time for completing them in the proper time. Learn at your own desired timeline and timetable. Maximum up to 5 course at a time for a learner at MaxCoach."
                    },
                    {
                        title: "What is one-on-one coaching?",
                        text: "It’s not just a normal thing to be able to build such a solid online educational system like MaxCoach where your progress is easily tracked and feedback is properly delivered. We promise to keep improving our system for better stability and flexibility."
                    }
                ],
                visible: null
            }
        }
    }
</script>