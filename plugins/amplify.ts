//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Auth, Amplify } from "aws-amplify";
// import config from '~~/src/aws-exports'
// Amplify.configure(config)
// Auth.configure(config);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
