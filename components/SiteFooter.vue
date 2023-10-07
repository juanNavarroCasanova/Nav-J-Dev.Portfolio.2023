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
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 class="text-xl lg:text-3xl font-semibold uppercase leading-6 text-gray-900" id="modal-title">C⊕ntλcτ M∊</h3>
                    <div class="mt-2 space-y-3">
                      <p class="text-sm lg:text-xl text-gray-700">
                        Hey there! Got something on your mind? I'm all ears! Whether it's a cool project, a crazy idea,
                         or just a friendly chat, don't hesitate to get in touch. Let's connect and make things happen!
                      </p>
                      <div
                        class="flex justify-start items-center text-lg space-x-3">
                        <EnvelopeIcon class="w-8 h-auto text-black lg:w-20"/>
                        <p class="text-black font-semibold lg:text-xl">navakasa1979@gmail.com</p>
                      </div>
                      <div
                        class="flex justify-start items-center text-lg space-x-3">
                        <PhoneIcon class="w-8 h-auto text-black lg:w-20"/>
                        <p class="text-black font-semibold lg:text-xl">+61411694841</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 flex justify-end sm:px-6">
                <button
                  @click="isOpen = false" 
                  type="button" 
                  class="inline-flex uppercase justify-center rounded-md bg-pink-600 px-3 py-2 w-25 lg:w-[120px] lg:h-[60px] lg:text-lg items-center text-sm font-semibold text-white shadow-sm hover:scale-120">
                    Got you!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-end gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href"  @click.prevent="link.name === 'Contact' ? setIsOpen(true) : null">
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
})

const isOpen = ref(false)

function setIsOpen(value) {
  isOpen.value = value
}

</script>