

function initVue() {

  new Vue({

    el: '#app',
    data: {

      'films':[],
      'search':'',

    },
    methods: {

      mounted: function(){

        axios.get('https://api.themoviedb.org/3/search/tv?', {
          params: {
            'api_key': '905462c907d5c9b0fa16ff95a8dfde69',
            'query': this.search
          }
        })

          .then(data => {

            this.films = data.data.results;
            console.log(this.films);
          })
          .catch(function(e){

            this.error = e;
          });

      },
      submit: function(){
        this.mounted();
      }

    }

  });

}
function init() {

  initVue();
}

document.addEventListener('DOMContentLoaded', init);
