<template>
    <h1 class="text-3xl font-bold my-8">Projects</h1>
    <p class="text-lg mb-8 font-semibold italic">Here are some of my projects on GitHub.</p>
    <section class="grid lg:grid-cols-2 gap-10">
      <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
        class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50 border-gray-300">
        <a :href="project.url" target="_blank">
          <h2 class="text-2xl text-black font-semibold mb-2 hover:text-3xl">{{ project.name }}</h2>
        </a>
        <p>{{ project.description }}</p>
        <div class="mt-4">
          <Icon name="fontisto:star" size="1.1rem" class="text-pink-600" /> Stars: {{ project.stargazers.totalCount }}
          <Icon name="system-uicons:branch" size="1.1rem" class="text-pink-600" /> Forks: {{ project.forks.totalCount }}
          <Icon name="system-uicons:eye" size="1.1rem" class="text-pink-600" /> Watchers: {{
            project.watchers.totalCount }}
        </div>
      </div>
    </section>
</template>

<script setup>

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
let data = null;

try {
  const result = await useAsyncQuery(query);
  data = result.data;
} catch (error) {
  console.error("An error occurred:", error);
}

</script>