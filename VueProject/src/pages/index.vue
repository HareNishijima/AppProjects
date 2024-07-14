<script setup="ts">
import { ref } from "vue";
const btn = ref < Boolean > true;
const btn2 = ref < Boolean > true;
</script>

<template>
  <v-container>
    <v-btn ref="btn" prepend-icon="mdi-variable" width="204">
      Ref Activator
    </v-btn>

    <v-dialog :activator="btn" max-width="340">
      <template v-slot:default="{ isActive }">
        <v-card prepend-icon="mdi-variable" text="1">
          <template v-slot:actions>
            <v-btn
              class="ml-auto"
              text="Close"
              @click="isActive.value = false"
            ></v-btn>
          </template>
          <v-btn ref="btn2" prepend-icon="mdi-variable" width="204">
            Ref Activator
          </v-btn>

          <v-dialog :activator="btn2" max-width="340">
            <template v-slot:default="{ isActive }">
              <v-card prepend-icon="mdi-variable" text="2">
                <template v-slot:actions>
                  <v-btn
                    class="ml-auto"
                    text="Close"
                    @click="isActive.value = false"
                  ></v-btn>
                </template>
              </v-card>
            </template>
          </v-dialog>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>
