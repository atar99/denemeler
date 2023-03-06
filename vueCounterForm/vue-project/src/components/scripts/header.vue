<template>
   <div class="header">
   <h1 class="counter__sayi">{{ sayi }}</h1>
    <button class="counter__button" @click="arttir">arttir</button>
    <button class="counter__button" @click="azalt">azalt</button>
    <p>{{ isim }}</p>
</div>
</template>

<script>
export default{
    data(){
 return{
    sayi:0,
 }
    },
methods:{
arttir(){
    this.sayi+=1;
},
azalt(){
    this.sayi-=1;
}
},
props:{

}
}
</script>