const back = "../resources/back.png";
const items = ["../resources/cb.png","../resources/co.png","../resources/sb.png",
"../resources/so.png","../resources/tb.png","../resources/to.png"];

var game = new Vue({
	el: "#game_id",
	data: {
		username:'',
		current_card: [],
		items: [],
		num_cards: 2,
		bad_clicks: 0,
		dif_mult: 20
	},
	created: function(){
		var json = localStorage.getItem("config") || '{"cards": 2,"dificulty": "hard"}';
		options_data = JSON.parse(json);
		this.num_cards = options_data.cards;

		switch (options_data.dificulty)
		{
			case "easy":
				this.dif_mult = 10;
				break;

			case "normal":
				this.dif_mult = 20;
				break;

			case "hard":
				this.dif_mult = 40;
				break;
		}
		console.log(this.dif_mult);

		this.username = sessionStorage.getItem("username","unknown");
		this.items = items.slice(); // Copiem l'array
		this.items.sort(function(){return Math.random() - 0.5}); // Array aleatòria
		this.items = this.items.slice(0, this.num_cards); // Agafem els primers numCards elements
		this.items = this.items.concat(this.items); // Dupliquem els elements
		this.items.sort(function(){return Math.random() - 0.5}); // Array aleatòria
		for (var i = 0; i < this.items.length; i++){
			this.current_card.push({done: false, texture: back, id:i, goback: function(){
				this.texture = back; ////////////////////////////////////////
			}});
		}
	},
	methods: {
		clickCard: function(i){
			if (!this.current_card[i].done && this.current_card[i].texture === back)
				Vue.set(this.current_card, i, {done: false, texture: this.items[i]});
		},
		
		////////////////////////////////////////
		amagarCarta: function()
		{
			Vue.set(this.current_card, i_front, {done: false, texture: back});
		}
	},
	watch: {
		current_card: function(value){
			if (value.texture === back) return;
			var front = null;
			var i_front = -1;
			for (var i = 0; i < this.current_card.length; i++){
				if (!this.current_card[i].done && this.current_card[i].texture !== back){
					if (front){
						if (front.texture === this.current_card[i].texture){
							front.done = this.current_card[i].done = true;
							this.num_cards--;
						}
						else{
							Vue.set(this.current_card, i, {done: false, texture: back});
							setTimeout(()=>{this.current_card.goback()},2000/this.dif_mult);
							////////////////////////////////////////
							this.bad_clicks++;
							break;
						}
					}
					else{
						front = this.current_card[i];
						i_front = i;
					}
				}
			}			
		}
	},
	computed: {
		score_text: function(){
			return 100 - this.bad_clicks * this.dif_mult;
		}
	}
});





