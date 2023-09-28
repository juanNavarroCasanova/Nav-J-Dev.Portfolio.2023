<template>
    <section>
        <div class="h-[100vh] flex items-center w-[100vw]">
            <Typewriter class="pb-[40vh]" :data="data"/>
        </div>
    </section>
    <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4">
            <h2 class="text-5xl font-bold mt-20">My Story</h2>
            <p class="text-lg py-2">
                I am a Front-end Software Developer with experience using Angular 5/6,
                HTML5, CSS3,C# technologies. Moreover, I was a part of the development
                team (have contributed on the development of) for Mobile Applications
                for IOS and Android using Xamarin
            </p>
            <p class="text-lg py-2">
                I do enjoy learning new programing
                languages and web tools. For instance, I have been working on pet
                projects using high-end libraries/languages such as ReactJS, Bootstrap
                (with SASS), and GIT. Furthermore, I have also accepted proposals from
                local businesses and individuals to build applications for different
                purposes using my own code on different Ecommerce and Bookings
                frameworks; moreover, I took advantaged of this acquired knowledge to
                develop them.
            </p>
            <p class="text-lg py-2">
                Working at the moment on my own projects on React and as
                a freelancer improving CMS performance and creating new personalised
                features. I am open to having discussions about any opportunities to
                grow to be part of a great team of developers
            </p>
        </div>
        <img src="~/assets/images/laptop.jpg" class="w-1/2 md:max-w-sm py-8 mx-auto">
    </section>
    <section>
        <h2 class="text-3xl font-bold mt-8">View more</h2>
        <p class="text-base text-gray-900 p-2 italic">TODO</p>
    </section>
</template>
<script setup>
const data = [
  'Hi, I am Juan Navarro Casanova',
  'Built with Vue 3, TypeScript, & Tailwind'
];
</script>