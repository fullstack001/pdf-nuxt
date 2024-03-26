<template>
  <md-content class="feature_item">
    <LocalizedLink :to="item.item.name">
      <div class="item-header">
        <img :src="require(`@/assets/feature_img/${item.item.file}`)" />
        <div class="item-title">
          {{ item.item.title }}
        </div>
      </div>
      <p>
        {{ item.item.description }}
      </p>
    </LocalizedLink>
  </md-content>
</template>

<script>
import LocalizedLink from "./LocalizedLink.vue";
export default {
  components: {
    LocalizedLink,
  },
  name: "feature-title",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    redirect(link) {
      this.$router.push({
        pather: link,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.feature_item {
  height: 100% !important;
}
.feature_item:hover {
  background-color: #f5f5fa !important;
}
.feature_item img {
  transition: transform 0.3s ease;
}

.feature_item:hover img {
  transform: scale(1.3); /* Increase size on hover */
}
.md-content {
  padding: 24px;
  text-align: center;
}
a {
  .item-title {
    font-size: 20px;
    font-weight: 600;
    color: #33333b;
    margin: 20px;
  }

  p {
    font-size: 14px;
    margin: 20px 0;
    color: #33333b;
  }
}

img {
  width: 42px;
  height: 42px;
  margin: auto;
}
@media (max-width: 640px) {
  .md-content {
    padding: 9px;
    text-align: left;
  }
  .item-header {
    display: flex;
    img {
      margin: 0px;
      width: 34px;
    }
    .item-title {
      font-size: 15px;
    }
  }
  a p {
    margin: 0px;
    width: 34px;
    width: 100%;
  }
}
</style>
