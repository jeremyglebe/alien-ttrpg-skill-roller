<template>
  <div class="buttons">
    <button class="button is-large is-primary" @click="handle_RollD3()">Roll D3</button>
    <button class="button is-large is-primary" @click="handle_RollD6()">Roll D6</button>
    <button class="button is-large is-primary" @click="handle_Roll2D6()">Roll 2D6</button>
    <button class="button is-large is-primary" @click="handle_RollD66()">Roll D66</button>
  </div>
  <p>
    <IncrementInput ref="skillDice" prompt="# of Skill Dice"></IncrementInput>
  </p>
  <p>
    <IncrementInput ref="stressDice" prompt="# of Stress Dice" :danger="true"></IncrementInput>
  </p>
  <p>
    <button class="button is-large is-primary" @click="handle_RollPool()">Roll D6 Pool</button>
  </p>
  <!-- Dice Pool with updating array of results -->
  <DicePoolResult :results="results" :danger="false"></DicePoolResult>
  <DicePoolResult :results="stressResults" :danger="true"></DicePoolResult>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import DicePoolResult from '@/components/DicePoolResult.vue';
import IncrementInput from '@/components/IncrementInput.vue';

// References for child elements
const skillDice = ref(null);
const stressDice = ref(null);

// Results of the dice pools
let results = ref([]);
let stressResults = ref([]);

function roll6s(count) {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

function handle_RollD3() {
  results.value = roll6s(1);
  stressResults.value = [];
}

function handle_RollD6() {
  results.value = roll6s(1);
  stressResults.value = [];
}

function handle_Roll2D6() {
  results.value = roll6s(2);
  stressResults.value = [];
}

function handle_RollD66() {
  results.value = roll6s(2);
  stressResults.value = [];
}

function handle_RollPool() {
  // Get current values of the two IncrementInput components
  const skillDiceCount = skillDice.value.getValue();
  const stressDiceCount = stressDice.value.getValue();
  // Roll the skill dice and store them in results
  results.value = roll6s(skillDiceCount);
  // Roll the stress dice and store them in stressResults
  stressResults.value = roll6s(stressDiceCount);
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

// Buttons should be centered
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
