<template>
    <section>
        <div class="flex items-start max-w-[96vw] xl:max-w-[85vw] pt-[15vh]">
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