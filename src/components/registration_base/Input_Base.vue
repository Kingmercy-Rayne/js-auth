<template>
  <span class="input--group">
    <label :for="id">{{ label }}</label>
    <input
      v-model="value"
      @input="updateValue"
      :type="type"
      :id="id"
      :autocomplete="autocomplete"
    />
  </span>
</template>

<script>
export default {
  name: 'InputBase',
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    autocomplete: {
      type: [String, Boolean],
      default: true,
    },
    disabled: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    updateValue() {
      this.$emit('updateValue', this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/registration_form.styl';
</style>
