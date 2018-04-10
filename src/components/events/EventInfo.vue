<template>
  <div class="card">
      <div class="card-header">
        <p class="card-header-title">
            {{event.name}}
        </p>
      </div>
      <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image" style="max-width: 400px !important;">
                    <img :src="event.thumbnail.path+'.'+event.thumbnail.extension"/>
                </figure>
            </div>
            <div class="media-content">
                <p class="is-4">
                    {{event.description}}
                </p>
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
                event: null
            }
        },
        created() {
            const url = `https://gateway.marvel.com:443/v1/public/events/${this.id}?apikey=21a0427052be48965f1e24951c943e6f`;
            this.$http.get(url).then(function(data) {
                return data.json();
            }).then(function(data){
                const returnedevent = data.data.results[0];
                this.event = returnedevent;

                if (this.event.description === "") 
                    this.event.description = "Description not available. "
            });
        }
    }
</script>