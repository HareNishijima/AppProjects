<script setup lang="tsx">
interface Props {
  id: number;
  name: string;
  email: string;
  point: number;
  note?: string;
}

const props = defineProps<Props>();

const localPoint = ref(props.point);
const localNote = computed((): string => {
  if (!props.note) return "---";
  return props.note;
});

const pointUp = (): void => {
  localPoint.value++;
};
</script>

<template>
  <section class="box">
    <h4>{{ name }}</h4>
    <dl>
      <dt>ID</dt>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ localPoint }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button v-on:click="pointUp">ポイント加算</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
