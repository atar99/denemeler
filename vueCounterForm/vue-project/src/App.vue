<script setup>
import Header from './components/scripts/header.vue';
import Registerform from './components/scripts/registerForm.vue';
import Users from './components/scripts/users.vue';
</script>

<script>
    export default {
  data() {
    return {
      user: [
        {
                    isim:"isim",
                    sifre:"sifre",
                    tarih:"tarih",
                    resim:"resim",
        },
      ],
    };
  },
};

</script>

<template>
    <Header/>
 <Registerform :user="user" />
 <Users :user="user" />
</template>

