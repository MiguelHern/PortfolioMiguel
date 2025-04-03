<script setup>
import Education from '@/components/common/EducationComponent.vue';
import Experience from '@/components/common/ExperienceComponent.vue';
import Projects from '@/components/common/ProjectsComponent.vue';
import Technologies from '@/components/common/TechnologiesComponent.vue';
import Button from '@/components/ui/ButtonComponent.vue';
import { Download, Github, Linkedin } from 'lucide-vue-next';


</script>

<template>
  <main class="mx-auto max-w-5xl p-6 lg:px-8 mt-14">
    <section class="text-white space-y-3" id="section_about">
      <div>
        <p class="text-xl text-title">Hola, soy Miguel Hernández</p>
        <h1 class="bg-gradient-to-r from-yellow-500 via-white to-yellow-600 bg-clip-text text-transparent">
          Full-StackDeveloper</h1>
      </div>
      <p>Me especializo en el desarrollo de aplicaciones web modernas, combinando diseño y funcionalidad para ofrecer
        experiencias de usuario fluidas. Con un enfoque en la eficiencia y la escalabilidad, he trabajado en proyectos
        que optimizan procesos, centralizan información y mejoran la accesibilidad.</p>
      <ul class="flex gap-2">
        <li>
          <Button text="Descargar CV" :iconRight="Download" />
        </li>
        <li>
          <Button :icon="Github" />
        </li>
        <li>
          <Button :icon="Linkedin" />
        </li>
      </ul>
    </section>

    <Experience />
    <Projects />
    <Technologies />
    <Education />
  </main>
</template>
