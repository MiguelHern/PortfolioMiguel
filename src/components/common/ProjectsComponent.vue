<template>
  <section class="text-title" id="section_projects">
    <h2 class="text-title">Proyectos</h2>
    <div class="grid grid-cols-2">
      <div class="border border-border rounded-md overflow-hidden box relative bg-card-bg"
        v-for="(project, index) in projects" :key="index">
        <div class="w-full aspect-video h-56">
          <img :src="project.image" :alt="project.title" class="object-cover h-full transition-transform w-full">
        </div>
        <div class="p-4 space-y-2">
          <div>
            <span class="text-subtitle text-xs">{{ project.title }}</span> - <span class="text-subtitle text-xs">{{
              project.progress }}</span>
            <h3 class="text-md text-title">{{ project.subtitle }}</h3>
          </div>
          <p class="text-subtitle text-xs">{{ project.description }}</p>
          <ul class="flex gap-3 *:border *:border-border text-xs">
            <li v-for="(tech, index) in project.technologies" :key="index"
              class="py-0.5 px-1 rounded-md bg-inner-bg text-subtitle">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "FisioLabs",
    image: "https://res.cloudinary.com/djfokdod6/image/upload/v1737587742/ob6w8i1rapxxir9v1kn9.png",
    progress: "En proceso",
    description: "Sistema para transformar expedientes físicos en digitales, con manejo de citas y horarios.",
    technologies: ["Vue.js", "TailwindCSS", "JavaScript", "C#", ".NET"],
    subtitle: "Expediente clínico digital"
  }
]
</script>

<style scoped></style>
