<script setup lang="ts">
interface Member {
  id: number;
  name: string;
  email: string;
  point: number;
  note?: string;
}

const memberListInit = new Map<number, Member>();
memberListInit.set(10000, {
  id: 10000,
  name: "taro",
  email: "taro@example.com",
  point: 10,
});
memberListInit.set(20000, {
  id: 20000,
  name: "jiro",
  email: "jiro@example.com",
  point: 20,
});

const memberList = ref(memberListInit);

const totalPoint = computed((): number => {
  let total = 0;
  for (const member of memberList.value.values()) {
    total += member.point;
  }
  return total;
});

const onIncrementPoint = (id: number): void => {
  const member = memberList.value.get(id);
  if (member != undefined) {
    member.point++;
  }
};
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoint }}</p>
    <OneSection
      v-for="[id, member] in memberList"
      :key="id"
      :id="id"
      :name="member.name"
      :email="member.email"
      :point="member.point"
      :note="member.note"
      @incrementPoint="onIncrementPoint"
    ></OneSection>
  </section>
</template>
