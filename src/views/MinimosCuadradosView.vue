
<template>
	<h1 class="text-center">Interpolación por el método de Mínimos Cuadrados</h1>
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
						<textarea v-model="points" type="text" class="form-control" id="points" placeholder="1 3, 2 10, 3 2"> </textarea>
					</div>
					<div class="col-12">
						<button @click="calculateMinimosCuadrados" class="btn btn-primary">Calcular</button>
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
			points: '5.7 6.7,9.2 10,8.5 8.2,6.3 8.4,1.3 2.5,6 6.8,3 3.6,3.7 3.8,9.3 8.8,6.5 8.2',
			x: '8',
			result: []
		};
	},
	methods: {
		calculateMinimosCuadrados(){
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
            this.result = this.interpolateMinCuadrados(xs, ys, xs.length, x);
			console.log(this.result);
        },
        interpolateMinCuadrados(x, y, n, valorX){
            let sumx = 0, sumy = 0, sumxy = 0, sumx2 = 0;
            for (let i = 0; i < n; i++){
                sumx += x[i];
                sumy += y[i];
                sumxy += x[i] * y[i];
                sumx2 += Math.pow(x[i], 2);
            }

            let a = (n * sumxy - sumx * sumy) / (n * sumx2 - Math.pow(sumx, 2));
            let b = (sumy - a * sumx) / n;

            let resultado = [];
            resultado[0] = "La ecuacion de la recta es: y = " + a + "x + " + b;

            let x1 = 0, y1 = 0;
            y1 = a * valorX + b;
            resultado[1]= "\nEl valor predecido de y es: " + y1;
            return resultado;
        }
	}
};
</script>
