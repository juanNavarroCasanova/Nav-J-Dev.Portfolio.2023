<template>
    <Disclosure as="nav" v-slot="{ open }">
      <div class="mx-auto max-w-7xl py-4 lg:py-8">
        <div class="relative flex h-26 items-center justify-between h-20">
          <div class="absolute inset-y-0 flex flex-row items-center lg:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton 
              class="bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-800 relative inline-flex items-center justify-center bg-emerald-300 p-1 rounded-lg focus:ring-inset">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars2Icon v-if="!open" class="block h-14 font-bold lg:h-14 w-auto text-emerald-900" aria-hidden="true" />
              <XMarkIcon v-else class="block h-12 lg:h-14 font-bold w-auto text-emerald-900" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-end lg:items-stretch lg:justify-between">
            <div class="flex flex-shrink-0 items-center">
              <span class="uppercase text-3xl sm:text-4xl xl:text-5xl font-semibold from-gray-300 via-gray-400 to-gray-600 bg-gradient-to-r bg-clip-text text-transparent">N∆∨-J D∉∨</span>
            </div>
            <div class="hidden lg:block">
              <!-- Desktop  -->
              <div class="flex items-center h-full space-x-4 uppercase">
                <a 
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[route.name === item.href.slice(1) || (route.name === 'index' && item.href === '/') ? 
                  'border-b-4 border-emerald-400 from-white to-gray-400 bg-gradient-to-r bg-clip-text text-transparent text-xl hover:scale-110' :
                  'text-lg hover:border-b-2 from-white to-gray-300 bg-gradient-to-r bg-clip-text text-transparent hover:border-gray-400 hover:border-b-4 hover:scale-110',
                  'px-3 py-2 font-medium']" 
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
        <div class="space-y-1 px-2 pb-3 pt-2 bg-black bg-opacity-20 mx-1 rounded-md">
          <DisclosureButton 
            v-for="item in navigation"
            :key="item.name" 
            as="a" 
            :href="item.href" 
            :class="[
              route.name === item.href.slice(1) || (route.name === 'index' && item.href === '/') 
              ? 'text-emerald-300' : 'text-gray-300',
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
  import { Bars2Icon, XMarkIcon } from '@heroicons/vue/24/outline'

  const route = useRoute();
  
  const navigation = [
    { name: 'Home', href: '/', current: route.name == 'index' },
    { name: 'My story', href: '/about', current: route.name == 'about' },
    { name: 'Work experience', href: '/work-experience', current: route.name == 'work-experience' },
    { name: 'Training', href: '/education', current: route.name == 'education' },
    { name: 'My own projects', href: '/projects', current: route.name == 'projects' }
  ]

  // Watch for route changes and update the 'current' property
  watch(() => route.name, (newRouteName) => {
    navigation.forEach(item => {
      item.current = item.href.slice(1) === newRouteName
    });
  })

  </script>