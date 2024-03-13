<template>
  <div class="locale-switcher" @mouseleave="showLan = false">
    <div>
      <img
        src="@/assets/img/globe16.png"
        srcset="@/assets/img/globe16.png"
        alt="language selector icon"
        class="langSelector__img"
      />
    </div>
    <div @mouseover="showLan = true" class="current_language">
      <!-- {{ getName($locale) }} -->
    </div>
    <div
      class="md-layout language-panel"
      v-show="showLan"
      @mouseleave="showLan = false"
    >
      <div class="md-layout-item">
        <div
          v-for="number in 9"
          :key="number"
          @click="selLocale(locales[number - 1].code)"
          class="locale-item"
          :class="{ active: isActive(locales[number - 1].code) }"
        >
          {{ locales[number - 1].name }}
        </div>
      </div>
      <div class="md-layout-item">
        <div
          v-for="number in 7"
          :key="number"
          @click="selLocale(locales[number + 8].code)"
          class="locale-item"
          :class="{ active: isActive(locales[number + 8].code) }"
        >
          {{ locales[number + 8].name }}
        </div>
      </div>
      <div class="md-layout-item">
        <div
          v-for="number in 8"
          :key="number"
          @click="selLocale(locales[number + 16].code)"
          class="locale-item"
          :class="{ active: isActive(locales[number + 16].code) }"
        >
          {{ locales[number + 16].name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getSupportedLocales } from "../util/i18n/supported-locales";
import { useRouter } from 'vue-router';

const router = useRouter();
const locales = getSupportedLocales();
const showLan = ref(false);

const getName = (locale) => {
  let name = "";
  for (let i = 0; i < locales.length; i++) {
    if (locales[i].code == locale) {
      name = locales[i].name;
    }
  }
  return name;
};

const selLocale = (locale) => {
  if (locale === "en") {
    router.push(`/`);
  } else {
    router.push(`/${locale}`);
  }
};

const isActive = (locale) => {
  return true ; //  $locale == locale;
};
</script>

<style lang="scss" scoped>
//@import "~vue-material/dist/theme/engine";
.md-layout {
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  width: 450px;
  top: -200px;
  min-height: 200px;
  border-radius: 10px;
  // border: solid 1px;
  z-index: 500;
  background: #fefefe;
  box-shadow: 0 5px 5px 2px #6e6c6c;
}
.locale-item {
  cursor: pointer;
}
</style>

<style scoped>
.locale-switcher {
  margin-top: 10px;
  margin-right: 15px;
  display: flex;
}

.current_language {
  border: none;
  background-color: transparent;
  margin-left: 10px;
}
.current_language {
  cursor: pointer;
}
.active {
  color: #ff7c03;
}
@media (max-width: 640px) {
  .language-panel {
    width: 324px;
    top: -210px;
  }
  .language-panel .md-layout-item {
    padding: 10px;
    margin-top: 0;
  }
  .locale-switcher {
    margin-top: 29px;
  }
}
</style>
