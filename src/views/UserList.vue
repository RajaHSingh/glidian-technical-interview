<template>
  <div class="groupSelection">
    <b-row>
      <b-col offset="5" cols="2">
        <b-form-select
          v-model="groupId"
          :options="options"
          class="mb-3"
          value-field="id"
          text-field="name"
          @input="getUsers()"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { getListgroups, getGroupOfUsers } from "../modules/api";
export default {
  name: "Home",
  data() {
    return {
      groupId: null,
      error: "",
      options: [],
    };
  },
  async created() {
    const response = await getListgroups();
    if (response.error) {
      this.error = response.error;
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
  methods: {
    async getUsers() {
      this.error = "";
      const response = await getGroupOfUsers(this.groupId);
      if (response.data) {
        this.users = response.data;
      }
      if (response.error) {
        this.error = response.error;
      }
    },
  },
};
</script>
