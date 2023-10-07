<template>
    <Disclosure as="nav" v-slot="{ open }">
      <div class="mx-auto max-w-7xl py-4 lg:py-8">
        <div class="relative flex h-26 items-center justify-between h-20">
          <div class="absolute inset-y-0 flex flex-row items-center lg:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center p-1 border-2 border-pink-600 rounded-full focus:ring-inset">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-12 lg:h-14 w-auto text-pink-600" aria-hidden="true" />
              <XMarkIcon v-else class="block h-12 lg:h-14 w-auto text-pink-600 " aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-end lg:items-stretch lg:justify-between">
            <div class="flex flex-shrink-0 items-center">
              <span class="font-sans text-3xl sm:text-4xl xl:text-5xl font-semibold"> Nav-J Dev</span>
              <span class="font-sans text-5xl xl:text-7xl font-bold text-pink-600 border-gray-400 sm:ml-3 xl:pt-0">/></span>
            </div>
            <div class="hidden lg:block">
              <!-- Desktop  -->
              <div class="flex items-center h-full space-x-4 uppercase">
                <a 
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[route.name === item.href.slice(1) || (route.name === 'index' && item.href === '/') ? 
                  'border-b-4 border-pink-600 text-black text-xl hover:scale-110' :
                  'text-lg text-black hover:border-b-2 hover:border-black hover:border-b-4 hover:scale-110',
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
  
      <DisclosurePanel class="lg:hidden">
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
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

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