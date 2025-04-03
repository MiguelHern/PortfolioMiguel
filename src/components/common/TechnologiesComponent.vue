<template>
  <section class="text-title" id="section_technologies">
    <h2 class="">{{ $t("technologies") }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="box relative border border-border rounded-md bg-card-bg p-5" v-for="(tech, index) in technologies"
        :key="index">
        <div class="flex items-center gap-6 mb-6">
          <div class="p-3 rounded-md bg-inner-bg text-primary">
            <component :is="tech.icon" />
          </div>
          <div>
            <h3 class="text-title">{{ tech.title }}</h3>
            <span class="text-subtitle">{{ tech.description }}</span>
          </div>
        </div>
        <div class="*:border *:border-border *:p-1 *:bg-inner-bg *:rounded-md space-x-2 text-xs text-subtitle">
          <span v-for="(skill, index) in tech.skills" :key="index">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { AppWindow, Server } from "lucide-vue-next";

const { t } = useI18n();

const technologies = computed(() => [
  {
    title: t("technologies.frontend.title", "Frontend"),
    description: t("technologies.frontend.description", "Desarrollo web"),
    icon: AppWindow,
    skills: ["Vue.js", "Tailwind", "React", "Next.js"]
  },
  {
    title: t("technologies.backend.title", "Backend"),
    description: t("technologies.backend.description", "Desarrollo web"),
    icon: Server,
    skills: ["Python", "DRF"]
  },
  {
    title: t("technologies.tools.title", "Herramientas"),
    description: t("technologies.tools.description", "Herramientas de desarrollo"),
    icon: Server,
    skills: ["Figma", "Docker", "Git", "GitHub", "GitLab"]
  }
]);

</script>
