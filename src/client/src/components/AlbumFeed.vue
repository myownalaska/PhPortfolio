<template>
  <div class="feed">
    <nav class="header">
      <a class="nav-link" href="#">Menu</a>
      <h1 class="title">News Feed</h1>
      <a class="nav-link" href="#">Contacts</a>
    </nav>
    <section class="year-albums" v-for="year in orderedYears" :key="year">
      <h2 class="year">{{ year }}</h2>
      <div class="albums">
        <AlbumPreview v-for="album in byYear[year]" :key="album.id" :album="album"/>
      </div>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import AlbumPreview from "./AlbumPreview";

export default {
  name: "AlbumFeed",
  components: {
    AlbumPreview
  },
  data() {
    return {
      albums: [],
    }
  },
  apollo: {
    albums: gql`{
      albums {
        id,
        name,
        date,
        location,
      }
    }`
  },
  computed: {
    byYear() {
      return this.albums.reduce((acc, album) => {
        const year = new Date(album.date).getFullYear();
        if (!acc[year]) return { ...acc, [year]: [album] };
        return { ...acc, [year]: [...acc[year], album] };
      }, {});
    },
    orderedYears() {
      return Object.keys(this.byYear).sort((a, b) => b - a);
    }
  }
};
</script>

<style scoped>
/* TODO: Share header or header styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 48px;
}

.nav-link {
  padding: 0 16px;
  color: black;
  font-family: "Abril Fatface";
  font-size: 24px;
  text-decoration: none;
}

.title {
  margin: 0;
  font-size: 24px;
}

.year-albums {
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
}

.year {
  width: 372px;
  margin: 0;
  padding-left: 72px;
  font-size: 72px;
}

.albums {
  flex: 1;
  display: grid;
  /* TODO: Responsibility */
  grid-gap: 32px 128px;
  grid-template-columns: repeat(auto-fill, 242px);
  margin-right: 72px;
}
</style>
