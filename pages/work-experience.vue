<template>
    <h1 class="text-4xl from-emerald-400 to-gray-700 bg-gradient-to-r bg-clip-text py-1 text-transparent font-semibold uppercase mt-4 mb-8">Wθrk xπr∤∉nc∈</h1>
    <div class="mx-auto pt-4 pl-4">
        <ol class="relative border-l-[3.5px] border-solid border-emerald-400 text-gray-700 lg:w-[55vw]">
            <ExperienceDetails 
                company="Ausloans" 
                role="Software Developer" 
                location="Gold Coast, QLD. Australia"
                date="Apr 2022 to Present"
                :technologies="technologies.Ausloans"
                :responsabilities="responsabilities.Ausloans"
            />
            <ExperienceDetails 
                company="Navakasa-J Dev" 
                role="Software Developer" 
                location="Byron Bay, NSW. Australia"
                date="November 2021 - Mar 2022"
                :technologies="technologies.NavaDev"
                :responsabilities="responsabilities.NavaDev"
            />
            <ExperienceDetails 
                company="Efficiency Leaders" 
                role="Software Developer"
                location="Ballina, NSW. Australia" 
                date="Nov 2017 - Feb 2019"
                :technologies="technologies.EfficiencyLeaders"
                :responsabilities="responsabilities.EfficiencyLeaders" 
            />
            <ExperienceDetails 
                company="Agtrix" 
                role="Junior Software Developer"
                location="Ocean Shores, NSW. Australia"
                date="Mar 2016 to Feb 2017"
                :technologies="technologies.Agtrix"
                :responsabilities="responsabilities.Agtrix"
            />
        </ol>
        <div class="relative lg:w-[55vw] h-10">
            <AcademicCapIcon
                class="h-auto w-14 -left-[1.7rem] absolute text-emerald-400 p-1 "
              />
        </div>
    </div>
  </template>
  <script setup lang="ts">
  import { AcademicCapIcon } from '@heroicons/vue/24/outline';

    const technologies = {
        Ausloans : [
            'JS frameworks: Vue 2 & 3.',
            'Vue frameworks: Nuxt 2 & 3.',
            'CSS frameworks: Tailwind, Vuetify, Vue Material.',
            'State Management: Vuex, Pinia.',
            'Others: Jira, Git, Bitbucket, Laravel, Node JS, Hubspot, Google analytics, Smartlook.'
        ],
        NavaDev : [
            'PHP',
            'Wordpress',
            'Html5, CSS'
        ],
        EfficiencyLeaders : [
            'JS frameworks: Angular 6 & 7.',
            '.Net Technologies with C#.',
            'CSS frameworks: Bootstrap.',
            'Version Control: Git, Bitbucket.',
            'Others: Typescript, SASS.'
        ],
        Agtrix : [
            'Xamarin',
            'C#',
            'HTML 5, CSS',
            'Others: Kento UI, Aurelia, Visual studio.',
        ]
    }

    const responsabilities = {
        Ausloans : [
            'Product Owner of the Wallet app.',
            'Collaborating closely with cross-functional teams, including developers, Graphic designers for Wallet and Consumer Apps.',
            'Testing and developing new features integrated into Consumer, Zink and Wallet.',
            'Identifying areas for enhancement and modification within Wallet and leading the development of these modifications.',
            'In summary, my role involves not only the strategic direction and ownership of the Wallet app but also hands-on involvement in the development and improvement of the Zink and Consumer platforms.'
        ],
        NavaDev : [
            'Creation of customized apps and sites using Wordpress templates.',
            'Refactoring and upgrading of modules to improve performance.',
            'Modify code and customise features - PHP, HTML5, CSS.',
            'Recommending futures software purchases/upgrades for current applications.'
        ],
        EfficiencyLeaders : [
            'Adding and testing of features and bug fixes to the Rapid product.',
            'Analyse bug reports from users and fixing them.',
            'Modify Controllers and Models when was required with C#.',
            'Analyse bug reports from users and fixing them.',
            'Adding and modifying components using typescript and Angular 6/7.'
        ],
        Agtrix : [
            'Adding new features and improvement of layout of mobile App.',
            'Testing new changes & updates on Mobile App.',
            'Xamarin Forms – Cross Platform (Win-IOS- Android).',
            'Release of Mobile App (Win-Android-IOS).',
            'Analyse bug reports from users and fixing them.'
        ]
    }
 
  </script>