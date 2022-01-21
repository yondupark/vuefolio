<template>
  <div class="skeletonWrap">
    <div class="card" v-for="i in 6" :key="i">
      <div class="card__image">
        <Skeletor height="200" />
      </div>

      <div class="card__slim">
        <div class="card__avatar">
          <Skeletor circle size="48" class="post__avatar" />
        </div>

        <div class="card__meta">
          <h2>
            <Skeletor width="220" pill />
          </h2>

          <p>
            <Skeletor width="180" pill />
            <Skeletor width="200" pill />
            <Skeletor width="100%" pill />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";

export default {
  name: "Skeleton",

  components: {
    Skeletor,
  },
};
</script>

<style>

.skeletonWrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row !important;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.card {
  width: 30%;
  margin-bottom: 2rem;
}

.card__image {
  width: 100%;
  margin-bottom: 12px;
  border-radius: 10px;
  overflow: hidden;
}

.card__slim {
  display: flex;
  margin-bottom: 12px;
}

.card__avatar {
  margin-right: 12px;
}

.card__meta {
  flex-grow: 1;
}

.card__meta p,
.card__meta h2 {
  margin: 0;
}
.card__meta p {
  text-align: left;
}
.card__text {
  margin-bottom: 12px;
}

.card__actions {
  display: flex;
  justify-content: flex-end;
}
</style>