<template>
  <main class="main">
    <section>
      <h2>Welcome home </h2>
      <InputBar />
      <Card />
    </section>
  </main>
</template>

<script>
import Card from '../components/Card';
import InputBar from '../components/InputBar';
export default {
  components: { InputBar, Card },
  setup() {},
};
</script>

<style>
.main {
  color: rgba(164, 142, 150, 0.9);
  background: hsl(225, 6%, 13%);
  text-align: left;
  height: 100vh;
}
</style>
