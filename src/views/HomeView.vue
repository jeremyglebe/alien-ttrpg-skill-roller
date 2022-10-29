<template>
  <div class="buttons">
    <button class="button is-large is-primary" @click="handle_RollD3()">Roll D3</button>
    <button class="button is-large is-primary" @click="handle_RollD6()">Roll D6</button>
    <button class="button is-large is-primary" @click="handle_Roll2D6()">Roll 2D6</button>
    <button class="button is-large is-primary" @click="handle_RollD66()">Roll D66</button>
  </div>
  <p>
    <IncrementInput ref="skillDiceEl" prompt="# of Skill Dice"></IncrementInput>
  </p>
  <p>
    <IncrementInput ref="stressDiceEl" prompt="# of Stress Dice" :danger="true"></IncrementInput>
  </p>
  <p>
    <button class="button is-large is-primary" @click="handle_RollPool()">Roll D6 Pool</button>
  </p>

  <!-- Overall results of a dice roll will be provided in key/value pairs -->
  <h2 class="title">Results</h2>
  <div class="results">
    <div v-for="(value, key) in results" :key="key">
      <span class="key">{{ key }}:</span>
      <span class="value">{{ value }}</span>
    </div>
  </div>

  <!-- Dice pools display the actual results of each individual die -->
  <h3 :hidden="!skillDiceResults.length">Skill Dice</h3>
  <DicePoolResult :results="skillDiceResults" :danger="false"></DicePoolResult>
  <h3 :hidden="!stressDiceResults.length">Stress Dice</h3>
  <DicePoolResult :results="stressDiceResults" :danger="true"></DicePoolResult>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import DicePoolResult from '@/components/DicePoolResult.vue';
import IncrementInput from '@/components/IncrementInput.vue';

// References for child elements
const skillDiceEl = ref(null);
const stressDiceEl = ref(null);

// Overall results to display as an object
const results = ref({});
// Results of the dice pools
let skillDiceResults = ref([]);
let stressDiceResults = ref([]);

function roll6s(count) {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

function handle_RollD3() {
  skillDiceResults.value = roll6s(1);
  stressDiceResults.value = [];
}

function handle_RollD6() {
  skillDiceResults.value = roll6s(1);
  stressDiceResults.value = [];
}

function handle_Roll2D6() {
  skillDiceResults.value = roll6s(2);
  stressDiceResults.value = [];
}

function handle_RollD66() {
  skillDiceResults.value = roll6s(2);
  stressDiceResults.value = [];
}

function handle_RollPool() {
  // Get current values of the two IncrementInput components
  const skillDiceCount = skillDiceEl.value.getValue();
  const stressDiceCount = stressDiceEl.value.getValue();
  // Roll the skill dice and store them in results
  skillDiceResults.value = roll6s(skillDiceCount);
  // Roll the stress dice and store them in stressResults
  stressDiceResults.value = roll6s(stressDiceCount);
  // Count the number of 6s rolled in both pools
  const skillDice6s = skillDiceResults.value.filter((result) => result === 6).length;
  const stressDice6s = stressDiceResults.value.filter((result) => result === 6).length;
  // Calculate the total number of 6s rolled
  const total6s = skillDice6s + stressDice6s;
  // Count the number of 1s rolled in the stress dice pool
  const stressDice1s = stressDiceResults.value.filter((result) => result === 1).length;
  // Update the results to include stress impact and successes
  results.value = {
    "Success Level": total6s,
    "Stress Impact": stressDice1s
  }
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

.title {
  margin-top: 1rem;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.5rem;

  .key {
    font-weight: bold;
  }

  .value {
    margin-left: 0.5rem;
  }
}

h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
