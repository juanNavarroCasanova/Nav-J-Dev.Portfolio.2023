<template>
  <footer>
    <section class="mx-auto max-w-7xl px-2 mt-[10vh] lg:mt-[0vh] m:px-14 lg:py-6 text-gray-300 flex flex-col">
      <div class="flex flex-row items-end gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" class="text-pink-600 h-auto w-[3.5rem] sm:w-[5rem]" />
        </a>
        <div class="flex justify-end lg:items-end w-full cursor-pointer" @click="nextSection()">
          <Icon name="svg-spinners:bouncing-ball" class="text-pink-600 h-auto w-[3.5rem] lg:w-[7rem] -mr-20 lg:mr-0" />
          <p class="uppercase text-2xl lg:text-5xl text-black font-semibold rotate-90 lg:rotate-0 -mt-14 lg:mt-0">{{ nextButtonText }}</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>

const links = [
  { name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
  { name: 'LinkedIn', href: 'www.linkedin.com/in/navarrocasanova', icon: 'entypo-social:linkedin-with-circle' },
]

const route = useRoute();
const router = useRouter()

function nextSection() {
  switch(route.name) {
    case 'index':
      router.push('/about')
      break
    case 'about':
      router.push('/work-experience')
      break
    case 'work-experience':
      router.push('/education')
      break
    case 'education':
      router.push('/projects')
      break
    default:
      router.push('/')
  }

}

const nextButtonText = computed(() => {
  switch (route.name) {
    case 'index':
      return 'My Story'
    case 'about':
      return 'My Jobs'
    case 'work-experience':
      return 'Training'
    case 'education':
      return 'Projects'
    default:
      return 'Go Back'
  }
});

</script>