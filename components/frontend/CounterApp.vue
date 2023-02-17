<template>
    <div class="pt-2 pb-2 text-center">
        <h1>{{ count }}</h1>
        <ul>
            <li v-for="{ id, name } in users" :key="id">
                <h6>{{ id }} - {{ name }}</h6>
            </li>
        </ul>

        <button @click="countHandler">Count</button>
        <button @click="nameChangeHandler">Name Change</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                users: [
                    {
                        id: 1,
                        name: "John",
                    },
                    {
                        id: 2,
                        name: "Doe",
                    },
                ]
            }
        },

        methods: {
            countHandler() {
                this.count++
            },

            nameChangeHandler() {
                this.users[0].name = "Uzzal"
                this.users[1].name = "Hossain"
            }
        },

        /* watch: {
            count() {
                console.log('message from count change')
                this.nameChangeHandler()
            },
            users: {
                handler(newValue, oldValue) {
                    console.log(newValue, oldValue)
                },
                deep: true,
            }
        }, */
    }
</script>
