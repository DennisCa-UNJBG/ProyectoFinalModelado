
<template>
	<h1 class="text-center">Interpolación por el método interpolación Lineal</h1>
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
						<button @click="calculateLineal" class="btn btn-primary">Calcular</button>
					</div>
					<div class="col-12">
						<h5 v-if="result">{{ result[0] }}</h5>
						<h5 v-if="result">{{ result[1] }}</h5>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			points: '',
			x: '',
			result: []
		};
	},
	methods: {
		calculateLineal(){
            console.log("TEST ...");
            let x = this.x;
            let pointsArray = this.points.split(',');
            let xs = [], ys = [];
            pointsArray.forEach(point => {
                let coordinates = point.split(' ');
                xs.push(parseFloat(coordinates[0]));
                ys.push(parseFloat(coordinates[1]));
            });
			console.log(xs);
			console.log(ys);
            this.result = this.interpolateLineal(xs, ys, xs.length, x);
			console.log(this.result);
        },
        interpolateLineal(x, y, n, valorX){
            let sumx = 0, sumy = 0, sumxy = 0, sumx2 = 0;
            for (let i = 0; i < n; i++){
                sumx += x[i];
                sumy += y[i];
                sumxy += x[i] * y[i];
                sumx2 += Math.pow(x[i], 2);
            }

            let a1 = (n * sumxy - sumx * sumy) / (n * sumx2 - Math.pow(sumx, 2));
            let a0 = (sumy/n - (a1 * (sumx/n)));

            let resultado = [];
            resultado[0] = "La ecuacion de la recta es: y = " + a1 + " + " + a0 + "x";

            let y1 = 0;
            y1 = a0 + a1 * valorX;
            resultado[1]= "\nEl valor predecido de y es: " + y1;
            return resultado;
        }
	}
};
</script>
