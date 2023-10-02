<template>
    <section>
        <div class="flex items-start w-[90vw] lg:max-w-[60vw] pl-0 pt-[20vh]">
            <Typewriter :data="data"/>
        </div>
    </section>
</template>
<script setup>
const data = [
  'Hi, I am Juan Navarro Casanova',
  'Built with Vue 3, TypeScript, & Tailwind'
];
</script>