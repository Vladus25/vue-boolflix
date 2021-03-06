function initVue() {
  new Vue({
    el: "#app",
    data: {
      films: [],
      serials: [],
      search: "",
      headline1: "Films",
      headline2: "Serials",
    },
    methods: {
      mounted: function () {
        axios
          .get("https://api.themoviedb.org/3/search/movie?", {
            params: {
              api_key: "905462c907d5c9b0fa16ff95a8dfde69",
              query: this.search,
            },
          })

          .then((data) => {
            this.films = data.data.results;
            console.log(this.films);
          })
          .catch(function (e) {
            this.error = e;
          });

        axios
          .get("https://api.themoviedb.org/3/search/tv?", {
            params: {
              api_key: "905462c907d5c9b0fa16ff95a8dfde69",
              query: this.search,
            },
          })

          .then((data) => {
            this.serials = data.data.results;
            console.log(this.serials);
          })
          .catch(function (e) {
            this.error = e;
          });
      },
      submit: function () {
        this.mounted();
      },
      flag: function (language) {
        if (language == "en") {
          return 'Language: <img src="img/en.png" alt="Bandiera-Inglese">';
        } else if (language == "it") {
          return 'Language: <img src="img/it.png" alt="Bandiera-Italiana">';
        }
      },
      value: function (numberValue) {
        return parseInt(Math.round(numberValue / 2));
      },
    },
  });
}
function init() {
  initVue();
}

document.addEventListener("DOMContentLoaded", init);
