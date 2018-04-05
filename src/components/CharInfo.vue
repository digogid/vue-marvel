<template>
  <div class="card">
      <div class="card-header">
        <p class="card-header-title">
            {{char.name}}
        </p>
      </div>
      <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image" style="max-width: 400px !important;">
                    <img :src="char.thumbnail.path+'.'+char.thumbnail.extension"/>
                </figure>
            </div>
            <div class="media-content">
                <p class="is-4">
                    {{char.description}}
                </p>
                <hr>
                <span class="tag is-dark is-small">Eventos</span>
                <ul>
                    <li v-for="s in char.events.items" v-bind:key="s">
                         {{s.name}}
                    </li>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                char: null
            }
        },
        created() {
            const url = `https://gateway.marvel.com:443/v1/public/characters/${this.id}?apikey=21a0427052be48965f1e24951c943e6f`;
            this.$http.get(url).then(function(data) {
                return data.json();
            }).then(function(data){
                const returnedChar = data.data.results[0];
                this.char = returnedChar;

                if (this.char.description === "") 
                    this.char.description = "Description not available. "
            });
        }
    }
</script>