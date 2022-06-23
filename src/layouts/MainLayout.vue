<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Hello {{ displayName }} </q-toolbar-title>
        <q-btn flat @click="logout">Logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainLayout',
  created() {
    if (!this.displayName || this.displayName === '') {
      this.$router.push('/login');
    } else {
      return;
    }
  },
  computed: {
    ...mapGetters('user', {
      displayName: 'getDisplayName',
      userId: 'getUserId',
    }),
  },
};
</script>
