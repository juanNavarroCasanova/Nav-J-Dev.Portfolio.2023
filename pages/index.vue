<template>
    <section>
        <div class="flex items-start w-[90vw] lg:max-w-[60vw] pl-0 pt-[15vh]">
            <Typewriter :data="data"/>
        </div>
    </section>
</template>
<script setup>
const data = [
  'Hi, I am Juan Navarro Casanova',
  'Software Developer focusing on Vue, TypeScript & Tailwind',
  'With experience in React, Angular 6/7, Node Js and Laravel',
  'Versatile developer ready to tackle a wide range of challenges',
];
</script>