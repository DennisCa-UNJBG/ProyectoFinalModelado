<template>
	<h1 class="text-center">Interpolación por el método de Lagrange</h1>
	<div class="container text-center">
		<div class="row justify-content-md-center">
			<div class="col-md-12 col-lg-8 col-xl-8">
				<form class="row g-3" @submit.prevent>
					<div class="col-md-6">
						<label for="x" class="form-label">Ingrese el punto 'x' a interpolar:</label>
						<input v-model="x" type="text" class="form-control" id="x">
					</div>
					<div class="col-md-6">
						<label for="points" class="form-label">Ingrese los puntos (x, y) separados por comas:</label>
						<input v-model="points" type="text" class="form-control" id="points" placeholder="1 3, 2 10, 3 2">
					</div>
					<div class="col-12">
						<button @click="calculateLagrange" class="btn btn-primary">Calcular</button>
					</div>
					<div class="col-12">
						<h3 v-if="result">El resultado es: {{ result }}</h3>
					</div>
				</form>
			</div>
		</div>
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
			console.log("TEST Lagrange...");
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
