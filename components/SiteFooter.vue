<template>
  <footer>
    <section class="mx-auto max-w-7xl mt-[10vh] lg:mt-[0vh] m:px-14 lg:py-6 text-gray-300 flex flex-col">
      <div class="flex flex-row items-end gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" class="text-pink-600 h-auto w-[3.5rem] sm:w-[5rem]"/>
        </a>
        <div class="flex justify-end lg:items-end w-full cursor-pointer" @click="nextSection()">
          <Icon name="svg-spinners:bouncing-ball" class="text-pink-600 h-auto w-[3.5rem] lg:w-[7rem] -mr-20 lg:mr-0" />
          <div class="flex space-y-2 rotate-90 lg:rotate-0 -mt-14 lg:mt-0">
            <span 
              class="absolute flex text-pink-600 items-center rotate-[-90deg] lg:rotate-0 right-[6.5rem] -top-1 lg:-top-14 lg:-right-[0.5rem] justify-center">
              <ArrowLongRightIcon class="w-12 h-auto lg:w-20"/>
            </span>
            <p class="uppercase text-2xl lg:text-5xl text-black font-semibold">{{ nextButtonText }}</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import { ArrowLongRightIcon} from '@heroicons/vue/24/outline'

const links = [
  { name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/navarrocasanova', icon: 'entypo-social:linkedin-with-circle' },
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
      return 'My-∫tθry'
    case 'about':
      return 'xπr∤∑nc∑'
    case 'work-experience':
      return 'Tr∆∤n∤ng'
    case 'education':
      return 'Prθj∑cts'
    default:
      return 'Gθ B∆ck'
  }
});

</script>