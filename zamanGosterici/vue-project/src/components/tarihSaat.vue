<template>
  <h1>tarih : {{ tarih }}</h1>
  <h1>saat : {{ saat }}</h1>
</template>

<script>
export default {
  data() {
    return {
      saat: null,
      dakka: null,
      saniye: null,
      gun: null,
      ay: null,
      yil: null,
    };
  },
  methods: {
    yazici() {
      setInterval(() => {
        let now = new Date();
        this.saat = now.getHours();
        this.dakka = now.getMinutes();
        this.saniye = now.getSeconds();
        this.gun = now.getDay();
        this.ay = now.getMonth();
        this.yil = now.getFullYear();

        console.log(
          this.saat,
          this.dakka,
          this.saniye,
          this.gun,
          this.ay,
          this.yil
        );
      }, 1000);
    },
  },

  mounted() {
    this.yazici();
  },
};
</script>
