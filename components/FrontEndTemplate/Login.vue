<template>
  <div class="bg-[#111] rounded-md flex justify-end w-full lg:max-w-[476px]">
    <div class="w-full py-[60px] px-5 md:px-[56px] rounded-md">
      <h2 class="text-left text-white font-bold text-[34px] mb-[36px]">
        Login
      </h2>

      <form @submit.prevent="submitform" class="w-full">
        <div>
          <label for="name">Username or Email</label>
          <input
            class="w-full my-2"
            type="text"
            placeholder="Username or Email"
            id="name"
            v-model="registration.name"
          />
        </div>

        <div class="mt-4">
          <label for="password">Password</label>
          <input
            class="w-full my-2"
            type="password"
            placeholder="Password"
            id="password"
            v-model="registration.password"
          />
        </div>

        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center">
            <input class="mr-2" type="checkbox" name="" id="rememberme" />
            <label for="rememberme">Remember me</label>
          </div>

          <label>Lost your password?</label>
        </div>

        <div class="w-full flex justify-center">
          <button
            class="w-full text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-12"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
data(){
return{
    registration: {
    name: '',
    password: '',
}
}
},

methods: {
    submitform(){
        console.log('Registration', this.registration);
    }
}
}
</script>

<style scoped>
label {
  color: white;
}
.icon {
  color: rgb(0, 173, 255);
}

.bg {
  background-image: url(/images/bg/become-a-teache-bg.jpg);
}

input,
textarea {
  padding: 10px 20px;
  background-color: #222;
  border: solid 0.5px #333;
  border-radius: 3px;
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #696969;
}
</style>