
<template>
	<h1 class="text-center">Interpolación por el método de Newton</h1>
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
						<button @click="calculateNewton" class="btn btn-primary">Calcular</button>
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
export default {
	data() {
		return {
			points: '',
			x: '',
			result: 0,
		};
	},
	methods: {
		calculateNewton(){
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
            this.result = this.interpolateNewton(xs, ys, xs.length, x);
			console.log(this.result);
        },
        interpolateNewton(x, y, n, valorX){
            console.log("x\ty\n=============");
            for (let i = 0; i < n; i++){
                console.log( x[i] + "\t" + y[i]);
            }
            console.log("\nNewton\n"+"==============================");
            let res = [];
            let _final = [];

            for (let i = 0; i < n; i++){
                res[i] = y[i];
            }

            _final[0] = res[0];

            console.log("b[" + 0 + "] = " + _final[0]);

            for (let j = 1; j < n; j++){
                for (let i = 0; i < (n - j); i++){
                    res[i] = this.dif_finita(x[i], res[i], x[i + j], res[i + 1]);
                }
                _final[j] = res[0];
                console.log( "b[" + j + "] = " + _final[j]);
            }

            let y_aprox = 0;
            let x_prod = 0;
            for (let i = 0; i < n; i++){
                x_prod = _final[i];
                for (let j = 0; j < i; j++){
                    x_prod = x_prod * (valorX - x[j]);
                }
                y_aprox = y_aprox + x_prod;
                //console.log("Resultado de y_aprox: " + y_aprox);
            }

            console.log("\nPolynomial\n==============================");

            console.log("f(x) = ");
            let polinomio = " ";
            for (let i = 0; i < n; i++){
                polinomio += _final[i];
                for (let j = 0; j < i; j++){
                    polinomio +="(x - " + x[j] + ")";
                }
                if (i < (n - 1)){
                    polinomio +=" + ";
                }
            }
            console.log(polinomio);
            console.log("\n\n==============================");

            console.log("f(" + valorX + ") = " + y_aprox);
            return y_aprox;
        },
        dif_finita(x1, y1, x2, y2){
            return (y2 - y1) / (x2 - x1);
        }
	}
};
</script>
