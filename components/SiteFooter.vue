<template>
  <footer>
    <section class="mx-auto max-w-7xl mt-[10vh] lg:mt-[0vh] m:px-14 lg:py-6 text-gray-300 flex flex-col">
      <!-- Contact Email Phone Modal -->
      <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <!--
            Background backdrop, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <!--
              Modal panel, show/hide based on modal state.

              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            -->
            <div class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-black bg-opacity-80 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 class="text-xl lg:text-3xl uppercase leading-6 from-emerald-400 to-gray-900 bg-gradient-to-r bg-clip-text text-transparent font-semibold" id="modal-title">C⊕ntλcτ M∊</h3>
                    <div class="mt-2 space-y-3">
                      <p class="text-sm lg:text-xl text-gray-300">
                        Hey there! Got something on your mind? I'm all ears! Whether it's a cool project, a crazy idea,
                         or just a friendly chat, don't hesitate to get in touch. Let's connect and make things happen!
                      </p>
                      <div
                        class="flex justify-start items-center text-lg space-x-3">
                        <EnvelopeIcon class="w-8 h-auto text-emerald-400 lg:w-20"/>
                        <p class="text-gray-100 font-semibold lg:text-xl">navakasa1979@gmail.com</p>
                      </div>
                      <div
                        class="flex justify-start items-center text-lg space-x-3">
                        <PhoneIcon class="w-8 h-auto text-emerald-400 lg:w-20"/>
                        <p class="text-gray-100 font-semibold lg:text-xl">+61411694841</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-black bg-opacity-80 flex justify-end sm:px-6">
                <button
                  @click="isOpen = false" 
                  type="button" 
                  class="inline-flex uppercase justify-center rounded-md border-2 border-emerald-400 bg-transparent px-3 py-2 w-25 lg:w-[120px] lg:h-[60px] lg:text-lg items-center text-sm font-semibold text-emerald-400 shadow-sm hover:scale-120">
                    Got you!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-end justify-between pl-1 mb-4 mt-2">
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <a v-for="link in links" :key="link.name" :href="link.href"  @click.prevent="link.name === 'Contact' ? setIsOpen(true) : null">
            <div class="text-emerald-100 opacity-90 h-auto w-[3.5rem] sm:w-[5rem]">
              <Icon :name="link.icon" class="text-emerald-300 h-auto w-[3.5rem] sm:w-[5rem]"/>
            </div>
          </a>
        </div>
        <div class="flex flex-col justify-end w-[50vw] cursor-pointer" @click="nextSection()">
            <span 
              class="flex text-emerald-300 items-end lg:rotate-0 -pt-4 justify-end">
              <ArrowLongRightIcon class="w-[50px] h-auto lg:w-20"/>
            </span>
            <p class="uppercase text-2xl text-right lg:text-5xl from-emerald-400 to-gray-700 bg-gradient-to-r bg-clip-text text-transparent font-semibold">{{ nextButtonText }}</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import { ArrowLongRightIcon, EnvelopeIcon, PhoneIcon} from '@heroicons/vue/24/outline'

const links = [
  { name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/navarrocasanova', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Contact', href:'', icon: 'clarity:talk-bubbles-solid-badged' }
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
      return 'My-∫tθry...'
    case 'about':
      return 'Wθrk xπr∤∉nc∈...'
    case 'work-experience':
      return '∈ducat∤θn Jθurn∈y...'
    case 'education':
      return 'My Prθj∑cts...'
    default:
      return 'Gθ B∆ck'
  }
})

const isOpen = ref(false)

function setIsOpen(value) {
  isOpen.value = value
}

</script>