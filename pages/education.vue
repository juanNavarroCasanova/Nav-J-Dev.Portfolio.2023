<template>
    <h1 class="text-3xl font-bold mt-4 mb-8">Welcome to My Education Journey</h1>
    <p class="text-lg">
        Hello there! I'm thrilled to share with you my educational path that has shaped me into the software developer I am today. 
        Education is the foundation upon which I've built my career, and I'm excited to give you a glimpse into my learning journey.
    </p>
    <div class="mx-auto w-full rounded-2xl pt-4">
        <Disclosure 
            course="Bachelor of Information Technology"
            major="Major in Software Development"
            provider="Southern Cross University"
            location="Gold Coast. Australia"
            date="July 2015 to July 2017"
            :units="unitsBachelor"
        />
    </div>
    <div class="mx-auto w-full rounded-2xl pt-4">
        <Disclosure 
            course="Diploma of Information Technology"
            major="Major in Software Development"
            provider="Tafe Queensland"
            location="Gold Coast. Australia"
            date="July 2013 to July 2015"
            :units="unitsTafe"
        />
    </div>
    <div class="mx-auto w-full rounded-2xl pt-4">
        <Disclosure 
            course="Other Courses"
            :units="otherCourses"
        />
    </div>
  </template>
  <script setup lang="ts">
    const unitsBachelor = [
        'Object oriented program Development',
        'Programming Mobile Systems',
        'Data Communications and Networks',
        'Web Development I & II',
        'Computing project I & II',
        'Database Systems I and II',
        'Statistical analysis',
        'Applications Development',
        'Principles of programming',
        'Communications in organisations',
        'Systems analysis and design',
        'Contemporary issues in multimedia and information Technology',
        'Managing software development'
    ];
    const unitsTafe = [
        'Implement and use web services',
        'Create web-based programs',
        'Create dynamic web pages',
        'Create cloud computing services',
        'Applying testing techniques for software development',
        'Apply advanced object-oriented languaje skills',
        'Apply advanced programming skills in another language',
        'Validate an application design against specifications',
        'Deploy an application to a production environment',
        'Debug and monitor applications',
        'Manage a project using software managment tools',
        'Match IT needs with the strategic direction of the enterprise',
        'Gather data to indentify business requirements',
        'Contribute to copyright, ethics and privacy in an IT environment',
    ];
    const otherCourses = [
        'Diploma in project management- Lexis - Byron Bay.',
        'PTE English Exam : Listening 90/90, Reading 82/90, Speaking 84/90, Writing 84/90, taken in 08/08/2020.'
    ];
 
  </script>