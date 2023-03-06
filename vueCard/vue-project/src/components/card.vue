<template>
    <div class="card" v-for="item in dizi">

        <div class="card__imgDiv">
            <img :src="item.img" alt="" class="card__imgDiv__image">
        </div>
        
        <div class="card__titleDiv">
         <h1 class="card__titleDiv__title">{{ item.title }}</h1>   
        </div>

        <div class="card__textDiv">
            <p class="card__textDiv__text">{{ item.text }}</p>
        </div>

    </div>
</template>

<script>

export default {
data(){
    return{
        dizi:[
            {
            id:0,
            img:"https://picsum.photos/200/300",
            title:"card 1 title",
            text:"card 1 text",
        },
        {
            id:1,
            img:"https://picsum.photos/200/300",
            title:"card 2 title",
            text:"card 2 text",
        },
        {
            id:2,
            img:"https://picsum.photos/200/300",
            title:"card 3 title",
            text:"card 3 text",
        },
        {
            id:3,
            img:"https://picsum.photos/200/300",
            title:"card 4 title",
            text:"card 4 text",
        },
        {
            id:4,
            img:"https://picsum.photos/200/300",
            title:"card 5 title",
            text:"card 5 text",
        },
        {
            id:5,
            img:"https://picsum.photos/200/300",
            title:"card 6 title",
            text:"card 6 text",
        },
        {
            id:6,
            img:"https://picsum.photos/200/300",
            title:"card 7 title",
            text:"card 7 text",
        },
        {
            id:7,
            img:"https://picsum.photos/200/300",
            title:"card 8 title",
            text:"card 8 text",
        },
        {
            id:8,
            img:"https://picsum.photos/200/300",
            title:"card 9 title",
            text:"card 9 text",
        },
        {
            id:9,
            img:"https://picsum.photos/200/300",
            title:"card 10 title",
            text:"card 10 text",
        },
        {
            id:10,
            img:"https://picsum.photos/200/300",
            title:"card 11 title",
            text:"card 11 text",
        },
    ]
    }
}
}

</script>