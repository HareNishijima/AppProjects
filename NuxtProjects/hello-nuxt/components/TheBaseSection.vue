<script setup lang="ts">
import type { Member } from "@/interfaces";

const memberList = useState<Map<number, Member>>("memberList");

const totalPoint = computed((): number => {
  let total = 0;
  for (const member of memberList.value.values()) {
    total += member.point;
  }
  return total;
});
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoint }}</p>
    <OneMember v-for="id in memberList.keys()" :key="id" :id="id" />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
