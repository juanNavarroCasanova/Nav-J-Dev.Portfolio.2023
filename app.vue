<template>
  <div class="flex flex-col min-h-screen px-2 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-700 to-slate-900">
    <SiteHeader/>
    <main class="mx-auto max-w-7xl grow items-start">
      <NuxtPage />
    </main>
    <SiteFooter/>
  </div>
</template>
<script setup>
// get token from runtime config
const { githubToken } = useRuntimeConfig();

// init cookie for github token
const cookie = useCookie("github-token");

// set cookie value if not set
cookie.value = cookie.value || githubToken;
</script>
