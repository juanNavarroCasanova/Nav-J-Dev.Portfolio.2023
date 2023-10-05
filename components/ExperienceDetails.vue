<template>              
    <li class="ml-10 lg:w-full">          
        <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -left-6 ring-2 ring-pink-600">
            <img class="rounded-full shadow-lg p-3" :src="iconImagePath"  :alt="`Logo ${company}`" />
        </span>
        <div class="flex flex-col lg:flex-row items-start justify-between px-4 py-2 bg-white">
            <div class="flex flex-col">
                <h3 class="text-black text-3xl font-bold">{{ company }}</h3>
                <span class="mb-1 text-2xl font-semibold italic text-gray-600 sm:order-last sm:mb-0">{{ role }}</span>
                <span class="mb-1 text-md font-semibold italic text-gray-600 sm:order-last sm:mb-0">{{ location }}</span>
                <span class="mb-1 text-md font-normal italic text-gray-600 sm:order-last sm:mb-0">{{ date }}</span>
            </div>
            <div 
             class="flex space-y-3 flex-col lg:flex-row lg:space-x-40 p-3 lg:px-10 my-4 text-xs italic font-normal text-gray-500 border border-gray-400 rounded-lg lg:border-transparent">
                <div class="lg:flex flex-col flex-row lg:space-x-40 p-3 lg:p-10 lg:my-2 lg:border rounded-lg">
                    <Disclosure 
                        title="Technologies"
                        :headerClass="'font-normal flex flex-col items-start h-20 text-gray-600 border-transparent !px-6'"
                        :contentClass="'font-normal !p-0 lg:!m-0'"
                        :items="technologies"
                    />
                </div>
                <div class="lg:flex flex-col flex-row lg:space-x-40 p-3 lg:p-10 lg:my-2 lg:border rounded-lg">
                    <Disclosure 
                        title="Roles"
                        :headerClass="'font-normal flex flex-col items-start h-20 text-gray-600 border-transparent !px-6'"
                        :contentClass="'font-normal !p-0 lg:!m-0'"
                        :items="responsabilities"
                    />
                </div>
            </div>
        </div>
    </li>
  </template>
  
  <script setup lang="ts">
    const props = defineProps({
        title: String,
        company: String,
        role: String,
        icon: String,
        location: String,
        date: String,
        class: String,
        technologies: Array<String>,
        responsabilities: Array<String>
    });

    const iconImagePath = ref<string>('');

    onMounted(async () => {
    if (props.icon) {
        const module = await import(`@/assets/images/${props.icon}.png`);
        iconImagePath.value = module.default;
    }
    });
    
  </script>
