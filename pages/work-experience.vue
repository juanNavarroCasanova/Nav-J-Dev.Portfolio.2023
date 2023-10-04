<template>
    <h1 class="text-3xl font-bold mt-4 mb-8">Work Experience</h1>
    <div class="mx-auto w-full pt-4 pl-4">
        <ol class="relative border-l-2 border-black">
            <ExperienceDetails 
                company="Ausloans" 
                role="Software Developer" 
                location="Gold Coast, QLD. Australia"
                date="June to March 2014"
                :technologies="technologies.Ausloans"
                :responsabilities="responsabilities.Ausloans"
                icon="skull"
                
            />
            <ExperienceDetails 
                company="Nav-J Development" 
                role="Software Developer" 
                location="Byron Bay, NSW. Australia"
                date="June to March 2014"
                :technologies="technologies.NavaDev"
                :responsabilities="responsabilities.NavaDev"
                icon="skull"
            />
            <ExperienceDetails 
                company="Efficiency Leaders" 
                role="Software Developer"
                location="Ballina, NSW. Australia" 
                date="June to March 2014"
                :technologies="technologies.EfficiencyLeaders"
                :responsabilities="responsabilities.EfficiencyLeaders"
                icon="skull"
                
            />
            <ExperienceDetails 
                company="Agtrix" 
                role="Junior Software Developer"
                location="Ocean Shores, NSW. Australia"
                date="June to March 2014"
                :technologies="technologies.Agtrix"
                :responsabilities="responsabilities.Agtrix"
                icon="skull"
            />
        </ol>
    </div>
  </template>
  <script setup lang="ts">

    const technologies = {
        Ausloans : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks'
        ],
        NavaDev : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks',
            'Web Development I & II'
        ],
        EfficiencyLeaders : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks'
        ],
        Agtrix : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks',
            'Web Development I & II',
            'Computing project I & II'
        ]
    }

    const responsabilities = {
        Ausloans : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks'
        ],
        NavaDev : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks',
            'Web Development I & II'
        ],
        EfficiencyLeaders : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks'
        ],
        Agtrix : [
            'Object oriented program Development',
            'Programming Mobile Systems',
            'Data Communications and Networks',
            'Web Development I & II',
            'Computing project I & II'
        ]
    }
 
  </script>