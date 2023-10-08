<template>              
    <li class="ml-10 lg:w-full">          
        <span class="absolute flex items-center justify-center w-12 p-1 h-12 bg-emerald-400 rounded-full -left-6">
            <BriefcaseIcon />
        </span>
        <div class="flex flex-col lg:flex-row items-start justify-between py-5">
            <div class="flex flex-col">
                <h3 class="text-gray-100 text-3xl font-bold">{{ company }}</h3>
                <span class="mb-1 text-xl font-semibold italic text-gray-200 sm:order-last sm:mb-0">{{ role }}</span>
                <span class="mb-1 text-md font-semibold italic text-gray-300 sm:order-last sm:mb-0">{{ location }}</span>
                <span class="mb-1 text-md font-normal italic text-gray-400 sm:order-last sm:mb-0">{{ date }}</span>
            </div>
            <div 
             class="flex flex-col xl:flex-row items-start xl:space-x-40 xl:px-[8rem]">
                    <Disclosure 
                        title="Technologies"
                        :headerClass="'font-normal text-gray-200'"
                        :contentClass="'font-normal'"
                        :items="technologies"
                    />
                    <span></span>
                    <Disclosure 
                        title="Duties"
                        :headerClass="'font-normal flex flex-col text-gray-200'"
                        :contentClass="'font-normal'"
                        :items="responsabilities"
                    />
            </div>
        </div>
    </li>
  </template>
  
  <script setup lang="ts">
  import { BriefcaseIcon } from '@heroicons/vue/24/outline';
    const props = defineProps({
        title: String,
        company: String,
        role: String,
        location: String,
        date: String,
        class: String,
        technologies: Array<String>,
        responsabilities: Array<String>
    });

  </script>
