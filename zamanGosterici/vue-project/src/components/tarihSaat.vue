<template>
  <h1>tarih : {{ gun }} / {{ ay }} / {{ yil }}</h1>
  <h1>saat : {{ saat }} : {{ dakika }} : {{ saniye }}</h1>
</template>

<script>
export default {
  data() {
    return {
      saat: null,
      dakika: null,
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
        this.dakika = now.getMinutes();
        this.saniye = now.getSeconds();
        this.gun = now.getDay();
        this.ay = now.getMonth();
        this.yil = now.getFullYear();

        console.log(
          this.saat,
          this.dakika,
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
