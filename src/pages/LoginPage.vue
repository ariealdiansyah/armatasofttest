<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col justify-center" align="center">
            <div class="text-h6">Login</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="q-pa-md">
          <div class="q-gutter-md" style="max-width: 300px">
            <q-input outlined dense v-model="username" label="Username" />
            <q-input outlined dense v-model="password" type="password" label="Password" />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center" class="justify-center">
        <q-btn color="primary" label="Login" @click="checkUser" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { mapGetters } from 'vuex';

const $q = useQuasar();

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('login', {
      listUser: 'getListUser',
    }),
  },
  methods: {
    checkUser() {
      const found = this.listUser.find((el) => el.username === this.username);
      if (found) {
        if (found.password === this.password) {
          this.$q.notify({
            color: 'positive',
            message: 'Sukses Login',
            position: 'top',
            timeout: Math.random() * 5000 + 3000,
          });
          this.$store.commit('user/setUser', found);
          this.$router.push('/');
        } else {
          this.$q.notify({
            color: 'negative',
            icon: 'report_problem',
            message: 'Password Salah',
            position: 'top',
            timeout: Math.random() * 5000 + 3000,
          });
        }
      } else {
        this.$q.notify({
          color: 'negative',
          icon: 'report_problem',
          message: 'User Tidak Ditemukan',
          position: 'top',
          timeout: Math.random() * 5000 + 3000,
        });
      }
    },
  },
};
</script>

<style></style>
