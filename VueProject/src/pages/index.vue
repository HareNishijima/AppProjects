<script setup="ts">
import { ref } from "vue";
const dialog = ref(false);
const dialog2 = ref(false);
</script>

<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true"> Open Dialog </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
        <v-btn
          class="ms-auto"
          text="Open Dialog"
          @click="dialog2 = true"
        ></v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <v-btn class="ms-auto" text="Ok" @click="dialog2 = false"></v-btn>
        <v-btn
          class="ms-auto"
          text="All Ok"
          @click="
            dialog2 = false;
            dialog = false;
          "
        ></v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
