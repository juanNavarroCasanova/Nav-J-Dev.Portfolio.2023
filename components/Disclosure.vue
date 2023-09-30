<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex items-center w-full justify-between rounded-lg border-2 border-black px-2 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-pink-600 focus-visible:ring-opacity-75"
        >
            <div class="flex flex-col">
                <span class="text-lg">{{ course }}</span>
            </div>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-auto w-12 text-pink-600"
          />
        </DisclosureButton>
        <DisclosurePanel class="flex flex-col px-4 pt-4 pb-2 text-sm text-gray-500">
            <span class="text-lg lg:text-xl font-bold">{{ major }}</span>
            <span class="text-md lg:text-lg font-bold ">{{ provider }}</span>
            <span class="text-md lg:text-lg font-semibold italic">{{ location }}</span>
            <span class="text-md lg:text-lg italic">{{ date }}</span>
            <ul class="list-disc lg:text-lg pl-4 py-2">
                <li v-for="unit in units">{{ unit }}</li>
            </ul>
        </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup lang="ts">
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { ChevronUpIcon } from '@heroicons/vue/20/solid'

    const props = defineProps({
        course: String,
        major: String,
        provider: String,
        location: String,
        date: String,
        units: Array<String>
    });

  </script>