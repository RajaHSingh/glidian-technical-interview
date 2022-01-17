<template>
  <b-container>
    <h1>Users List</h1>
    <b-row class="pb-3">
      <b-col cols="2" offset="10">
        <b-button @click="addUser">Add User</b-button>
      </b-col>
    </b-row>

    <b-row style="text-align: left">
      <b-table
        :items="users"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        sort-icon-left
        stacked="sm"
        small
      >
        <template #cell(edit)="row">
          <b-button
            size="sm"
            style="min-width: 75px"
            variant="primary"
            @click="edit(row.item.id)"
            >Edit</b-button
          >
        </template>
        <template #cell(delete)="row">
          <b-button
            variant="danger"
            style="min-width: 75px"
            size="sm"
            @click="deleteUser(row.item.id)"
            >Delete</b-button
          >
        </template>
      </b-table>
    </b-row>
    <!--- Pagination and Views per page -->
    <b-row>
      <b-col cols="4">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="4"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-5"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="mb-5"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { deleteUser } from "../modules/api";
export default {
  name: "Users",
  props: {
    users: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    users(val) {
      this.totalRows = val.length;
    },
  },
  data() {
    return {
      currentPage: 1,
      fields: [
        { key: "id", label: "ID", sortable: true },
        {
          key: "name",
          label: "Name",
          sortable: true,
        },
        { key: "username", label: "User Name", sortable: true },
        { key: "isActivated", label: "Active", sortable: true },
        { key: "isBanned", label: "Banned", sortable: true },
        {
          key: "edit",
          label: "",
          sortable: false,
        },
        {
          key: "delete",
          label: "",
          sortable: false,
        },
      ],

      perPage: 5,
      pageOptions: [5, 10, 15, 20, 50, 100],
      totalRows: 1,
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    edit(_userId) {
      // TODO: edit user
    },
    // eslint-disable-next-line no-unused-vars
    async deleteUser(_userId) {
      const response = await deleteUser(_userId);
      if (response.error) {
        this.$emit("error", response.error);
      }
      if (response.status === 200) {
        this.$emit("updateUsers");
      }
    },
    // eslint-disable-next-line no-unused-vars
    addUser() {
      // TODO: add user
    },
  },
};
</script>
