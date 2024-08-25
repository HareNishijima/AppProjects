<script setup lang="ts">
import type { Member } from "@/interfaces";

useState<Map<number, Member>>("memberList", (): Map<number, Member> => {
  const memberListInit = new Map<number, Member>();
  memberListInit.set(10000, {
    id: 10000,
    name: "taro",
    email: "taro@example.com",
    point: 10,
    note: "初回入会特典あり",
  });
  memberListInit.set(20000, {
    id: 20000,
    name: "jiro",
    email: "jiro@example.com",
    point: 20,
  });
  return memberListInit;
});
</script>

<template>
  <TheBaseSection />
</template>
