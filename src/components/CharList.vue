<template>
    <section class="columns is-multiline">
        <div class="column" v-bind:key="c.id" v-for="c in chars">
            <router-link class="card" v-bind:to="'/char/' + c.id" >
                <div class="card-title-header">
                    {{c.name}}      
                </div>
                <figure class="image is-128x128">
                    <img :src="c.thumbnail.path+'.'+c.thumbnail.extension"/>
                </figure>  

            </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                chars: []
            }
        },
        created() {
            const url = "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=21a0427052be48965f1e24951c943e6f";
            this.$http.get(url).then(function(data) {
                return data.json();
            }).then(function(data){
                const returnedChars = data.data.results;
                this.chars = returnedChars;
            });
        }
    }
</script>