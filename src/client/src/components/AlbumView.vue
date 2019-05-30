<template>
  <div class="album">
    <div class="info-block">
      <h2 class="name">{{ album.name }}</h2>
      <p class="description">{{ album.description }}</p>
      <p class="date">{{ formattedDate }}</p>
      <p class="model-name">{{ modelName }}</p>
    </div>
    <img v-for="photo in 5" :key="photo" class="photo" src="../assets/katya.jpeg">
    <div class="controls">
      <a class="next" href="#">Next</a>
      <p class="name-secondary">{{ album.name }}</p>
      <p class="model-name">{{ modelName }}</p>
      <p class="location">{{ album.location }}</p>
      <p class="socials">Follow Vladislav</p>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { formatDate } from "../utils/formatDate";

export default {
  name: "AlbumView",
  data() {
    return {
      album: { model: {} }
    };
  },
  apollo: {
    album: {
      query: gql`query Album($id: ID!) {
        album(id: $id) {
          name,
          description,
          date,
          location,
          model {
            firstName,
            lastName
          }
        }
      }`,
      variables() {
        return { id: this.$route.params.id };
      }
    },
  },
  computed: {
    formattedDate() {
      return formatDate(this.album.date);
    },
    modelName() {
      const { model } = this.album;
      return `${model.firstName} ${model.lastName}`;
    }
  },
};
</script>

<style scoped>
.album {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 32px;
  overflow-y: scroll;
}

.info-block {
  display: flex;
  flex-direction: column;
  margin-right: 56px;
}

.name {
  margin: 0;
  font-size: 96px;
}

.description {
  margin: 0;
  color: #b2b1b1;
  font-size: 32px;
}

.date {
  margin: auto 0 0 0;
}

.model-name,
.location {
  margin: 0;
  color: #b2b1b1;
}

.photo {
  max-height: 100%;
  margin-right: 72px;
}

.photo:last-of-type {
  margin-right: 0;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 216px;
}

.next {
  margin-bottom: 16px;
  color: black;
  font-size: 72px;
  text-decoration: none;
}

.name-secondary {
  margin: 0;
  color: black;
  font-size: 24px;
}

.socials {
  margin: auto 0 0 0;
  color: black;
  font-size: 18px;
}
</style>
