<template>
  <nuxt-link :to="getTo()">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: ["to"],

  methods: {
    getTo() {
      if (typeof this.to !== "string") {
        return this.to;
      }

      const locale = this.$route.params.locale;
      const path =
        locale === undefined
          ? `/${this.to.replace(/^\/|\/$/g, "")}`
          : `/${locale}/${this.to.replace(/^\/|\/$/g, "")}`;
      return path;
    },
  },
};
</script>
