define(function(require, exports, module) {
	"use strict";

	// External dependencies.
	var Backbone = require("backbone");

	// Defining the application router.
	module.exports = Backbone.Router.extend({
		routes: {
			"": "index"
		},

		index: function() {
			console.log("Welcome to your / route.");
			var AppView = Backbone.View.extend({
		      // el - stands for element. Every view has a element associate in with HTML 
		      //      content will be rendered.
		      el: 'main',
		      // It's the first function called when this view it's instantiated.
		      initialize: function(){
		        this.render();
		      },
		      // $el - it's a cached jQuery object (el), in which you can use jQuery functions 
		      //       to push content. Like the Hello World in this case.
		      render: function(){
		        this.$el.html("Hello World");
		      }
		    });

		    var appView = new AppView();
		}
	});
});