/** @format */

const app = Vue.createApp({
	/** Options API */
	// template: `
	//   <h1> Hola Mundo </h1>
	//   <h2> desde app.js </h2>
	// `,
	data() {
		return {
			quote: "I'm Batman",
			author: 'Bruce Wayne',
		};
	},
	methods: {
		changeQuote() {
			this.author = 'Batman';
			this.capitalize();
		},
		capitalize() {
			this.quote = this.quote.toUpperCase();
		},
	},
	watch: {},
	/** Composition API */
	setup() {},
});

app.mount('#myApp');
