<template>
  <article>
    <a :href="albumLink">
      <img class="preview-image" alt="Album Cover" src="../assets/katya.jpeg"/>
    </a>
    <p class="date">{{ formattedDate }}</p>
    <h3 class="title">{{ title }}</h3>
  </article>
</template>

<script>
import { formatDate } from "../utils/formatDate";

export default {
  name: "AlbumPreview",
  props: ["album"],
  computed: {
    albumLink() {
      return `/albums/${this.album.id}`;
    },
    title() {
      return `${this.album.name}, ${this.album.location}`.toUpperCase();
    },
    formattedDate() {
      return formatDate(this.album.date);
    }
  }
};
</script>

<style scoped>
.preview-image {
  max-width: 100%;
  margin-bottom: 32px;
}

.date {
  display: block;
  margin-bottom: 8px;
  line-height: 1em;
  font-size: 18px;
  font-family: "Mukta Mahee", sans-serif;
}

.title {
  margin: 0;
  color: #b2b1b1;
  line-height: 1em;
  font-size: 18px;
  font-family: "Mukta Mahee", sans-serif;
}
</style>
