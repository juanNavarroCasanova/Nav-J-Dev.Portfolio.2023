<template>
    <Disclosure v-model="isOpen" as="div">
        <DisclosureButton
          :class="headerClass"
          class="flex w-full text-left text-sm font-medium py-2"
          @click="toggleDisclosure()"
        >
          <div class="flex space-x-5 items-center">
            <div 
              class='flex flex-col text-emerald-500' 
              v-if="!isOpen && title === 'Technologies'"
              >
                <CommandLineIcon
                  class="h-auto w-9"
                />
            </div>
            <div 
              class='flex flex-col text-emerald-500' 
              v-if="!isOpen && title === 'Duties'"
            >
              <UserCircleIcon
                class="h-auto w-9"
              />
            </div>
            <div 
              class='flex flex-col text-emerald-500' 
              v-if="!isOpen && (title?.includes('Other') || title?.includes('Diploma') || title?.includes('Bachelor'))"
            >
              <SquaresPlusIcon
                class="h-auto w-8 lg:w-10"
              />
            </div>
            <div 
              class='flex flex-col text-emerald-500' 
              v-if="isOpen"
            >
              <XMarkIcon
                class="h-auto w-8 lg:w-10"
              />
            </div>
            <span class="text-lg lg:text-2xl font-semibold italic text-gray-200">{{ title }}</span>
          </div>
        </DisclosureButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel 
            class="flex flex-col pl-10 pb-2 text-sm text-gray-400" 
            :class="contentClass"
          >
            <span class="text-lg lg:text-xl font-bold">{{ major }}</span>
            <span class="text-md lg:text-lg font-bold ">{{ provider }}</span>
            <span class="text-md lg:text-lg font-semibold italic">{{ location }}</span>
            <span class="text-md lg:text-lg italic">{{ date }}</span>
            <ul class="list-disc lg:text-lg py-2 px-4">
                <li v-for="item in items">{{ item }}</li>
            </ul>
          </DisclosurePanel>
        </transition>
    </Disclosure>
  </template>
  
  <script setup lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { XMarkIcon, CommandLineIcon, UserCircleIcon, SquaresPlusIcon } from '@heroicons/vue/20/solid'

    const props = defineProps({
        title: String,
        major: String,
        provider: String,
        location: String,
        date: String,
        headerClass: String,
        contentClass: String,
        items: Array<String>
    });

    const isOpen = ref(false);

    function toggleDisclosure() {
      isOpen.value = !isOpen.value;
    }
    
  </script>