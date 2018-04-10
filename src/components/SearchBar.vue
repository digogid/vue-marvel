<template>
    <div class="columns">
        <div class="column is-12 field is-horizontal has-addons">
            <div class="control">
                <input class="input" type="text" v-model="term" @keyup.enter="search" placeholder="Type the beginning of the name">
            </div>
            <div class="control">
                <a class="button is-info" @click="search">
                    Search
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from '../main'

    export default {
        props: {
            type: {
                type:String
            }
        },
        data() {
            return {
                term: ''
            }
        },
        methods: {
            search() {
                const url = `https://gateway.marvel.com:443/v1/public/${this.type}?limit=100&nameStartsWith=${this.term}&apikey=21a0427052be48965f1e24951c943e6f`;
                if (this.term.length === 0 || this.term.trim() === "") 
                    return false;

                this.$http.get(url).then(function(data) {
                    return data.json();
                }).then(function(data){
                    const returnedChars = data.data.results;
                    bus.$emit('searched', returnedChars);
                });
            }
        }
    }
</script>