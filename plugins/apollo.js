export default defineNuxtPlugin((nuxtApp) => {
  // access cookie for auth
  const { githubToken } = useRuntimeConfig();
  nuxtApp.hook('apollo:auth', ({ token }) => {
    // apply apollo client token
    token.value = githubToken
  })
})
