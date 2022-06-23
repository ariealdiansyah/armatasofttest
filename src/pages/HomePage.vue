<template>
  <q-page class="bg-white q-px-xl q-py-lg">
    <div class="q-col-gutter-md">
      <div class="row">
        <div class="col-12">
          <q-table :rows="data" :columns="columns" dense>
            <template v-slot:header="props">
              <q-tr :props="props" class="bg-blue-4 text-white">
                <q-th style="`font-weight: bold; text-align: center; font-size: 14px">
                  No
                </q-th>
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  :style="`font-weight:bold;text-align:${
                    col.align || 'center'
                  };font-size:14px`"
                >
                  {{ col.label }}
                </q-th>
                <q-th style="`font-weight: bold; text-align: center; font-size: 14px">
                  Comment
                </q-th>
              </q-tr>
            </template>
            <template v-slot:body="lists">
              <q-tr :lists="lists">
                <q-td class="text-center"> {{ lists.rowIndex + 1 }} </q-td>
                <q-td
                  v-for="col in lists.cols"
                  :key="col"
                  :lists="lists"
                  :style="`text-align:${col.align || 'center'}`"
                >
                  {{ col.value || '-' }}
                </q-td>
                <q-td>
                  <q-btn color="primary" label="Comment" @click="findComment(lists)" />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      columns: [
        {
          name: 'title',
          align: 'center',
          label: 'title',
          field: 'title',
          sortable: true,
        },
        { name: 'post', align: 'center', label: 'post', field: 'body', sortable: true },
      ],
    };
  },
  computed: {
    ...mapGetters('user', {
      userId: 'getUserId',
      data: 'getData',
    }),
  },
  mounted() {
    this.$store.dispatch('user/getData', this.userId);
  },
  methods: {
    findComment(v) {
      console.log(v);
    },
  },
};
</script>

<style></style>
