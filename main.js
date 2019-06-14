const app = new Vue({
  el:"#app",
  data:{
    booksArray:[],
    filteredData:[],
    search:[]
  },
  created: function(){
    this.getData();
  },
  methods: {
    getData: function(){
      fetch("https://api.myjson.com/bins/zyv02",
      {method: "GET"} )
      .then(function(res){
        return res.json();
      })
      .then(function(json){
        app.object = json;
        app.booksArray = app.object.books;

      })
      .catch(function(err){
        console.log(err);
      })
    },
    bookFilter: function(){
      for(let i =0; i < app.booksArray.length; i++){
        
      }
    }
  }
});


$(document).ready(function() {

$(".group").fancybox({

'hideOnContentClick': true,

'zoomSpeedIn' :  500,

'zoomSpeedOut':  500,

'zoomSpeedChange': 500,

'overlayShow' :  true,

'overlayOpacity' : 0.5,

'easingIn' : 'easeInOutBack',

'easingOut' : 'easeInOutBack',

'easingChange' : 'easeInOutBack'

});

});
