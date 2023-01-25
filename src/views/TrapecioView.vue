<template>
	<h1 class="text-center">Interpolación por el método del trapecio</h1>
	<div class="container text-center">
		<div class="row justify-content-md-center">
			<div class="col-md-12 col-lg-8 col-xl-8">
				<form class="row g-3" @submit.prevent>
					<div class="col-md-6">
						<label for="limInferior" class="form-label">Ingrese el Limite Inferior:</label>
						<input v-model="limInferior" type="text" class="form-control" id="limInferior">
					</div>
                    <div class="col-md-6">
						<label for="limSuperior" class="form-label">Ingrese el Limite Superior:</label>
						<input v-model="limSuperior" type="text" class="form-control" id="limSuperior">
					</div>
                    <div class="col-md-6">
						<label for="cantPart" class="form-label">Ingrese el cantidad de particiones:</label>
						<input v-model="cantPart" type="text" class="form-control" id="cantPart">
					</div>
                    <div class="col-md-6">
						<label for="polinomio" class="form-label">Ingrese el polinomio:</label>
						<input v-model="polinomio" type="text" class="form-control" id="polinomio" placeholder="1+x^2">
					</div>
					<div class="col-12">
						<button @click="calcularTrapecio" class="btn btn-primary">Calcular</button>
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
import * as math from "mathjs";

export default {
	data() {
		return {
			polinomio: "",
			limInferior: "",
			limSuperior: "",
			cantPart: "",
			result: "",
		};
	},
	methods: {
		calcularTrapecio() {
			console.log("TEST ...");
            let lInf = parseFloat(this.limInferior);
            let lSup = parseFloat(this.limSuperior);
            let h = (lSup - lInf) / this.cantPart;
            let sum = (this.evalPoli(lInf) + this.evalPoli(lSup)) / 2.0;
            console.log(h);
            console.log(sum);

            for (let evaluar = (lInf + h); evaluar < lSup; evaluar += h){
                sum += this.evalPoli(evaluar);
            }
            sum = sum * h;
            console.log("Resultado:"+sum);
            this.result = sum;

		},
        evalPoli(valX){
            console.log(this.polinomio);
            let poli = this.polinomio;
            poli = poli.replace("x",valX);
            console.log(poli);

            console.log(math.evaluate(poli));
            return math.evaluate(poli);
        }
	}
};
</script>
