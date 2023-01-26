<template>
	<h1 class="text-center">Interpolación por el método de Simpson 3/8(Impares)</h1>
	<div class="container text-center">
		<div class="row justify-content-md-center">
			<div class="col-md-12 col-lg-8 col-xl-8">
				<form class="row g-3" @submit.prevent>
					<div class="col-md-6">
						<label for="limInferior" class="form-label">Ingrese el Limite Inferior:</label>
						<input v-model="limInferior" type="text" class="form-control" id="limInferior" placeholder="1">
					</div>
                    <div class="col-md-6">
						<label for="limSuperior" class="form-label">Ingrese el Limite Superior:</label>
						<input v-model="limSuperior" type="text" class="form-control" id="limSuperior" placeholder="2">
					</div>
                    <div class="col-md-6">
						<label for="cantPart" class="form-label">Ingrese el cantidad de particiones:</label>
						<input v-model="cantPart" type="text" class="form-control" id="cantPart" placeholder="3">
					</div>
                    <div class="col-md-6">
						<label for="polinomio" class="form-label">Ingrese el polinomio a integrar:</label>
						<input v-model="polinomio" type="text" class="form-control" id="polinomio" placeholder="x/(1+x^2)">
					</div>
					<div class="col-12">
						<button @click="calcularTrapecio" class="btn btn-primary">Calcular</button>
					</div>
					<div class="col-12">
						<h4 v-if="result">El resultado de la integral es: {{ result }}</h4>
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
            let part = parseFloat(this.cantPart);
            let x =[];
            let sum = 0;
            x[0] = lInf;
            let h = (lSup - lInf) / part;

            for(let j =1; j <= part; j++){
                x[j] = lInf + h*j;
            }
            console.log(x);

            for (let j = 1; j <= (part/3); j++) {
                sum += this.evalPoli(x[3*j-3]) + 3*this.evalPoli(x[3*j-2]) + 3*this.evalPoli(x[3*j-1]) + this.evalPoli(x[3*j])
            }

            console.log(h);
            console.log(sum);
            sum = (3*h/8)*sum;
            console.log("Resultado:"+sum);
            this.result = sum;

		},
        evalPoli(valX){
            console.log(this.polinomio);
            let poli = this.polinomio;
            poli = poli.replaceAll("x",valX);
            console.log(poli);

            console.log(math.evaluate(poli));
            return math.evaluate(poli);
        }
	}
};
</script>
