<template>
  <section class="py-10" id="section_experience">
    <h2 class="text-title">Experiencia</h2>

    <div class="relative">
      <!-- Línea vertical -->
      <div class="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>

      <div class="space-y-16">
        <div v-for="(education, index) in educations" :key="index" class="relative pl-8 group">
          <!-- Punto en la línea -->
          <div
            class="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-gray-300 dark:group-hover:bg-primary transition-colors duration-300">
          </div>

          <!-- Línea horizontal -->
          <div
            class="absolute left-0 top-1.5 w-6 h-px bg-gray-300 dark:group-hover:bg-primary transition-colors duration-300">
          </div>

          <div class="space-y-2">
            <span class="text-xs font-medium text-primary">{{ education.timeline }}</span>
            <h3 class="text-lg font-semibold text-title dark:group-hover:text-primary transition-colors duration-300">
              {{ education.title }}
            </h3>
            <p class="text-subtitle">{{ education.description }}</p>
            <div class="flex items-center gap-2 text-subtitle text-sm">
              <MapPin class="w-3 h-3 text-primary" />
              <span>{{ education.location }}</span>
            </div>
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
    timeline: "2025 - Actualidad",
    title: "Engineering Systems",
    description: "Bachelor's degree with focus on software development and system architecture. Graduated with honors.",
    location: "Universidad Autónoma de Campeche"
  },
  {
    timeline: "Junio 2024 - Diciembre 2024",
    title: "Computer Science",
    description: "Associate degree covering fundamentals of programming, algorithms, and data structures.",
    location: "Community College"
  },
  {
    timeline: "2017-2018",
    title: "Web Development",
    description: "Intensive 6-month program focused on modern web technologies and frameworks.",
    location: "Tech Academy"
  }
];
</script>
