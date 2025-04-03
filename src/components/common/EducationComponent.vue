<template>
  <section class="py-10" id="section_education">
    <h2 class="text-title">Formación Académica</h2>
    <div class="grid grid-cols-3 gap-3">
      <div v-for="(education, index) in educations" :key="index" class="">
        <div class="box relative border border-border bg-card-bg p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">

          <div class="flex justify-between">
            <h3 class="text-base font-bold text-title mb-2">{{ education.title }}</h3>
            <span class="inline-block px-2 py-1 rounded-full text-subtitle text-xs font-medium mb-2">
              {{ education.timeline }}
            </span>
          </div>

          <p class="text-sm text-subtitle mb-2">{{ education.description }}</p>
          <div class="flex items-center gap-1 text-subtitle text-xs">
            <MapPin class="w-3 h-3 text-primary" />
            <span>{{ education.location }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { MapPin } from 'lucide-vue-next';

const educations = [
  {
    timeline: "2020-2024",
    title: "Engineering Systems",
    description: "Bachelor's degree with focus on software development.",
    location: "University of Technology"
  },
  {
    timeline: "2018-2020",
    title: "Computer Science",
    description: "Associate degree covering fundamentals of programming.",
    location: "Community College"
  },
  {
    timeline: "2017-2018",
    title: "Web Development",
    description: "Intensive 6-month program focused on web technologies.",
    location: "Tech Academy"
  }
];
</script>
