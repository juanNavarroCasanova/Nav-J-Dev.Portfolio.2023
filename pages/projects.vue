<template>
    <h1 class="text-4xl from-emerald-400 to-gray-700 bg-gradient-to-r bg-clip-text py-1 text-transparent font-semibold uppercase mt-4 mb-8">Prθj∑cts</h1>
    <p v-if="data" class="text-lg mb-8 font-semibold text-gray-300">Here are some of my projects on GitHub.</p>
    <section class="grid lg:grid-cols-2 gap-10">
      <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
        class="p-8 border-2 my-4 rounded-lg hover:bg-black hover:bg-opacity-30 border-emerald-400 max-w-[94vw]">
        <a :href="project.url" target="_blank">
          <h2 class="text-2xl text-gray-300 font-semibold mb-2">{{ project.name }}</h2>
        </a>
        <p class="text-gray-400">{{ project.description }}</p>
        <div class="mt-4 flex items-center w-full justify-start space-x-4">
          <Icon name="fontisto:star" size="1.2rem" class="text-emerald-400"/> 
            <span class="text-gray-400">{{ project.stargazers.totalCount }}</span>
          <Icon name="system-uicons:branch" size="1.2rem" class="text-emerald-400 font-bold" />
            <span class="text-gray-400">Forks: {{ project.forks.totalCount }}</span>
          <Icon name="system-uicons:eye" size="1.2rem" class="text-emerald-400" /> 
          <span class="text-gray-400">Watchers: {{project.watchers.totalCount }}</span>
        </div>
      </div>
      <div v-for="project in upcomingProjects"
        class="p-8 border-2 my-4 rounded-lg hover:bg-black hover:bg-opacity-30 border-emerald-400 max-w-[94vw]">
          <h2 class="text-2xl text-gray-300 font-semibold mb-2">{{ project.name }}</h2>
        <p class="text-gray-400">{{ project.description }}</p>
        <div class="mt-4">
          <h2 class="text-xl text-emerald-400 font-semibold">In progress...</h2>
        </div>
      </div>
    </section>
    <div v-if="error" class="flex justify-start text-emerald-400 text-left font-bold w-full">
      <p class="py-4 rounded-lg ">Error fetching data from Github... Try later to see all my projects !</p>
    </div>
</template>

<script setup>

const upcomingProjects = [
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

const query = gql` 
{
  viewer {
    repositories(first:8, orderBy: {field:CREATED_AT,direction:DESC}) {
      totalCount
      nodes {
          id
        	name
          createdAt
          description
          url
        	forks {
            totalCount
          }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`
const { data, error } = await useAsyncQuery(query)

</script>