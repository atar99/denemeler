<template>
  <div class="MakineDiv">
    <h1>1.sayiyi gir</h1>
    <input type="number" v-model="sayi1" id="" />
    <h1>2.sayiyi gir</h1>
    <input type="number" v-model="sayi2" id="" />
    <button @click="hesapla()">Hesapla</button>
    <h1>Sonuç: {{ sonuc }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sonuc: null,
    };
  },
  methods: {
    hesapla() {
      this.sonuc = this.sayi1 + this.sayi2;
      console.log(this.sayi1, this.sayi2, this.sayi1 + this.sayi2, this.sonuc);
    },
  },
};
</script>
