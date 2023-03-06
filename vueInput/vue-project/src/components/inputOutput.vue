<template>
  <h1>Bişey yaz</h1>
  <input type="text" @input="yazdir" />

  <h1>Yazdığın : {{ a }}</h1>
</template>

<script>
export default {
  data() {
    return {
      a: null,
    };
  },
  methods: {
    yazdir(e) {
      this.a = e.target.value;
      console.log(e.target.value);
    },
  },
};
</script>
