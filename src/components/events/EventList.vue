<template>
    <section>
        <search-bar v-bind:type="'events'"></search-bar>
        <section class="columns is-multiline is-mobile">
            <div class="column is-12" v-if="!loaded">
                <a class="button is-info is-loading">Loading</a>
            </div>
            <div class="column is-one-quarter-desktop is-half-mobile is-half-tablet" v-bind:key="e.id" v-for="e in events">
                <router-link class="card" v-bind:to="'/event/' + e.id" >
                    <div class="card-title-header">
                        {{e.title}}      
                    </div>
                    <figure class="image">
                        <img :src="e.thumbnail.path+'.'+e.thumbnail.extension"/>
                    </figure>  

                </router-link>
            </div>
        </section>
    </section>
</template>

<script>
    import { bus } from '../../main'
    import SearchBar from '../../components/SearchBar'

    export default {
        components: {
            'search-bar': SearchBar
        },
        data() {
            return {
                events: [],
                loaded: false
            }
        },
        created() {
            bus.$on('searched', (data) => {
                this.events = data;
                this.loaded = true;
            });

            if (!this.loaded) {
                const url = "https://gateway.marvel.com:443/v1/public/events?limit=100&apikey=21a0427052be48965f1e24951c943e6f";
                this.$http.get(url).then(function(data) {
                    return data.json();
                }).then(function(data){
                    const returnedEvents = data.data.results;
                    this.events = returnedEvents;
                    this.loaded = true;
                });
            }
        }
    }
</script>

<style scoped>
figure.image {
    max-height: 150px;
}

figure > img {
    max-height: 150px;
    max-width: 200px;
    margin: auto;
}

.column {
    border: 1px solid silver
}
</style>
