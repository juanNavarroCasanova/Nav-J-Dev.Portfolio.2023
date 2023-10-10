<template>
    <h1 class="text-4xl from-emerald-400 to-gray-700 bg-gradient-to-r bg-clip-text py-1 text-transparent font-semibold uppercase mt-4 mb-8">Prθj∑cts</h1>
    <p class="text-lg mb-8 font-semibold text-gray-300">Here are some of my projects on GitHub.</p>
    <section class="grid lg:grid-cols-2 gap-10">
      <div 
        v-for="project in projects"
        class="p-8 border-2 my-4 rounded-lg hover:bg-black hover:bg-opacity-30 border-emerald-400 max-w-[94vw]"
      >
        <a :href="project.url" target="_blank">
        <h2 class="text-2xl text-gray-300 font-semibold mb-2">
          {{ project.name }}
        </h2>
        </a>
        <p class="text-gray-400">{{ project.description }}</p>
        <div class="mt-4">
          <h2 class="text-xl text-emerald-400 font-semibold">In progress...</h2>
        </div>
      </div>
    </section>
</template>

<script setup>

  const projects = [
        {
          name: "Portfolio 2023",
          description: "Portfolio created with Nuxt3, typescript and Tailwind.",
          url: 'https://github.com/juanNavarroCasanova/Nav-J-Dev.Portfolio.2023'
        },
        {
          name: "Portfolio 2022",
          description: "Portfolio created with React, Scss.",
          url: 'https://github.com/juanNavarroCasanova/Nav-J-Dev.Portfolio.2022'
        },
        {
          name: "Dashy",
          description: "Dashboard created with Laravel 6, Vue 2 and Vuex."
        },
        {
          name: "Rushter",
          description: "Application for the quick creation of a roster, using Vue 3, Pinia and Node JS."
        },
        {
          name: "WhatsToday",
          description: "Application to create daily goals."
        }
      ]

</script>