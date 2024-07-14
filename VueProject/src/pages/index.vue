<script setup="ts">
import { ref } from "vue";
const dialog = ref < Boolean > false;
const dialog2 = ref < Boolean > false;
</script>

<template>
  <div class="d-flex w-screen ga-4">
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Open Dialog"
          variant="flat"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
            <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps2 }">
                <v-btn
                  v-bind="activatorProps2"
                  color="surface-variant"
                  text="Open Dialog2"
                  variant="flat"
                ></v-btn>
              </template>

              <template v-slot:default="{ isActive2 }">
                <v-card title="Dialog2">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close Dialog"
                      @click="isActive2.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
