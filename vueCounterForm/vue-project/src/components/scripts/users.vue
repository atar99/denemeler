<template>
<h1>selamalekim</h1>
<div v-for="item,index in user" class="users__card__div">
    <img class="user__card__resim" :src="item.resim" alt="">
    <h1 class="users__card__isim">{{ item.isim }}</h1>
    <h1 class="user__card__sifre">{{ item.sifre }}</h1>
    <h1 class="user__card__tarih">{{ item.tarih }}</h1>
</div>
</template>

<script>
export default{
    data(){
 return{
 }
    },
    props:{
        user:Array,
    }
}
</script>