<template>
	<div>
		<label for="x">Ingrese el punto x:</label>
		<input v-model="x" type="text" id="x" />
		<br />
		<label for="points">Ingrese los puntos (x, y) separados por comas:</label>
		<input v-model="points" type="text" id="points"  placeholder="1 3, 2 10, 3 2"/>
		<br />
		<button v-on:click="calculateLagrange">Calcular</button>
		<p v-if="result">El polinomio de Lagrange es: {{ result }}</p>
	</div>
</template>

<script>
import * as math from "mathjs"; // la libreria tiene el metodo interpolateLagrange(xs, ys)(x) ya implementado

export default {
	data() {
		return {
			x: "",
			points: "",
			result: "",
		};
	},
	methods: {
		calculateLagrange() {
			console.log("TEST...");
			let x = this.x;
			let points = this.points.split(",");
			let xs = [];
			let ys = [];
			points.forEach((point) => {
			let xy = point.split(" ");
			xs.push(xy[0]);
			ys.push(xy[1]);
			});
			console.log(xs);
			this.result = this.interpolateLagrange(xs, ys)(x);
			console.log(this.result);
		},
		interpolateLagrange(xs, ys) {
			return function (x) {
			let result = 0;
			for (let i = 0; i < xs.length; i++) {
				let l = 1;
				for (let j = 0; j < xs.length; j++) {
					if (j !== i) {
					l *= (x - xs[j]) / (xs[i] - xs[j]);
					}
				}
				result += l * ys[i];
			}
			return result;
			};
		},
	}
};
</script>
