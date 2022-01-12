<template>
  <div class="groupSelection">
    <b-row>
      <b-col offset="5" cols="2">
        <b-form-select
          v-model="selected"
          :options="options"
          class="mb-3"
          value-field="id"
          text-field="name"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { getListgroups } from "../modules/api";
export default {
  name: "Home",
  data() {
    return {
      selected: null,
      options: [],
    };
  },
  async created() {
    const response = await getListgroups();
    if (response.error) {
      console.log(response.error);
    }
    if (response.data) {
      const selection = response.data;
      selection.unshift({
        id: null,
        name: "Please make a selection",
        disabled: true,
      });
      this.options = selection;
    }
  },
  computed: {
    selection() {
      return this.options;
    },
  },
};
</script>
