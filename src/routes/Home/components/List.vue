<template>
    <section class="list">
        <div class="list-date">{{date}}</div>
        <v-article v-for="data in articles" :data="data"></v-article>
    </section>
</template>

<script>
    import vArticle from './Article'
    export default {
        props: {
            'articles': {
                type: Array,
                required: true
            },
            date: {
                type: String,
                default () {
                    return ''
                }
            }
        },
        components: {
            vArticle
        }
    }
</script>
<style>
    .list {
        position: relative;
        padding: 0;
        padding-top: 5rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #ECECEC;
    }
    
    .list-date {
        position: absolute;
        font-size: 2rem;
        text-align: center;
        top: 2rem;
        left: 1rem;
        color: #b2bac2;
        font-weight: 500;
    }
</style>