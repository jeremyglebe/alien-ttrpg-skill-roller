<template>
    <div class="incinpcomp">
        <!-- Div with two increment/decrement inputs -->
        <div class="field has-addons">
            <p class="control">
                <button :class="classSet()" @click="add(-1)">-</button>
            </p>
            <p class="control">
                <input class="input" type="text" :placeholder="prompt" @change="onChange" :value="value">
            </p>
            <p class="control">
                <button :class="classSet()" @click="add(1)">+</button>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const props = defineProps(['prompt', 'danger']);
defineExpose({ getValue });

// The current value of the input
const value = ref(null);

function onChange(event) {
    // Update the value property
    value.value = event.target.value;
}

function add(x) {
    value.value += x;
}

function classSet() {
    if (props.danger) {
        return "button is-danger";
    } else {
        return 'button is-primary';
    }
}

function getValue() {
    return value.value;
}
</script>

<style scoped lang="scss">
// Set style of overall component
.incinpcomp {
    // Center the component
    display: flex;
    justify-content: center;
    align-items: center;
    // Margins on top and bottom
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>