<template>
    <!-- For each row of the results array -->
    <div v-for="row in results" class="columns is-mobile">
        <!-- For each number in the row, create a bulma column -->
        <div v-for="number in row" class="column">
            <!-- Display the number -->
            <div :class="props.danger ? 'bad-square' : 'square'">{{ number }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
const props = defineProps(['results', 'danger']);
// Convert the "results" array prop into a 2D array with 3 columns
const results = computed(() => {
    const results = props.results;
    const results2D = [];
    for (let i = 0; i < results.length; i += 3) {
        results2D.push(results.slice(i, i + 3));
    }
    return results2D;
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

// Margins before columns start
.columns {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.column {
    // Center contents of the column
    display: flex;
    justify-content: center;
    align-items: center;
}

// Square with max side length of 100px
.square {
    // Ensure that the square is always a square (max size of 100px)
    width: 100%;
    aspect-ratio: 1/1;
    max-width: 100px;
    max-height: 100px;
    // Vertically align the text in the middle of the square
    display: flex;
    align-items: center;
    justify-content: center;
    // Shape the square's corners
    border-radius: 20px;
    // Set contrasting background and text colors
    background-color: $primary;
    color: $text;
    // Mono font that scales to the size of the square
    font-family: 'Roboto Mono', monospace;
    font-size: 2.5rem;
    // Add a shadow to the square
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

// Bad square inherits from square and has danger color
.bad-square {
    @extend .square;
    background-color: $danger;
}
</style>