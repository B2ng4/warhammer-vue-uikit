<template>
  <button
      :class="[color, size]"
      :disabled="disabled">
    {{label}}
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Label'
  },
  color: {
    validator(value, props) {
      return ['primary', 'secondary', 'ghost', 'destructive'].includes(value);
    },
    default: 'primary'
  },
  size: {
    validator(value, props) {
      return ['auto', 'small','medium', 'big', 'full'].includes(value);
    },
  }
});
</script>

<style scoped>
button {
  border: none;
  padding: 12px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:active {
  filter: opacity(0.7);
}

button[disabled] {
  filter: opacity(0.9);
  cursor: not-allowed;
}

/*colors*/
.primary {
  background: rgb(169, 31, 31);
  color: white;
}

.secondary {
  background: rgb(31, 27, 24);
  color: white;
}

.ghost {
  background: rgb(255, 255, 255);
  border: 1px #e2e2e2 solid;
  color: black;
}

.destructive {
  background: rgb(123, 21, 21);
  color: white;
}

/*size*/
.auto {
  width: auto;
}

.small {
  width: 15%;
}

.medium {
  width: 50%;
}

.big {
  width: 75%;
}

.full {
  width: 100%;
}
</style>