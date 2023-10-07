<template>
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
      <div class="mx-auto max-w-7xl py-4 sm:py-8 px-1 sm:px-6 lg:px-8">
        <div class="relative flex h-26 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md focus:ring-inset">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-12 lg:h-14 w-auto text-black" aria-hidden="true" />
              <XMarkIcon v-else class="block h-12 lg:h-14 w-auto text-pink-600 " aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
            <div class="flex flex-shrink-0 items-center">
              <span class="font-sans text-4xl xl:text-5xl font-semibold"> Nav-J Dev</span>
              <span class="font-sans text-5xl xl:text-7xl font-bold text-pink-600 border-gray-400 rounded-full h-20 w-auto ml-3 pt-3 xl:pt-0">/></span>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <!-- Desktop  -->
              <div class="flex items-center h-full space-x-4 uppercase">
                <a 
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[route.name === item.href.slice(1) || (route.name === 'index' && item.href === '/') ? 
                  'border-b-4 border-pink-600 text-black text-2xl hover:scale-110' :
                  'text-xl text-black hover:border-b-2 hover:border-black hover:border-b-4 hover:scale-110',
                  'px-3 py-2 font-medium ']" 
                  :aria-current="route.name === item.href.slice(1) || (route.name === 'index' && item.href === '/') ? 
                  'page' : undefined">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <!-- Mobile menu -->
        <div class="space-y-1 px-2 pb-3 pt-2 border-black border-2 mx-1 rounded-md">
          <DisclosureButton 
            v-for="item in navigation"
            :key="item.name" 
            as="a" 
            :href="item.href" 
            :class="[
              route.name === item.href.slice(1) || (route.name === 'index' && item.href === '/') 
              ? 'bg-black text-pink-600' : 'text-black',
              'block rounded-md px-3 py-2 text-base font-medium']
            " 
            :aria-current="route.name === item.href.slice(1) ? 'page' : undefined"
            >
              {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon, CodeBracketIcon} from '@heroicons/vue/24/outline'

  const route = useRoute();
  
  const navigation = [
    { name: 'Home', href: '/', current: route.name == 'index' },
    { name: 'About me', href: '/about', current: route.name == 'about' },
    { name: 'Work experience', href: '/work-experience', current: route.name == 'work-experience' },
    { name: 'Education', href: '/education', current: route.name == 'education' },
    { name: 'My own projects', href: '/projects', current: route.name == 'projects' }
  ]

  // Watch for route changes and update the 'current' property
  watch(() => route.name, (newRouteName) => {
    navigation.forEach(item => {
      item.current = item.href.slice(1) === newRouteName
    });
  })

  </script>