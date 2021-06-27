//implementando funções aos botões da calculadora, atruibuindo tipo e valor
function calcular(tipo, valor) {

//verificando se o tipo é uma ação ou um valor
if(tipo === 'acao') {

	if(valor === 'c') {
		//limpar o campo de resultados (id resultado)
		document.getElementById('resultado').value = ''

	}

	//usar uma dessas informações e concatenar com o valor que está no campo de resultados
	if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
		document.getElementById('resultado').value += valor
	}

	//exibindo o resultado do cálculo
	if(valor === '=') {
		var valor_campo = eval(document.getElementById('resultado').value)

		document.getElementById('resultado').value = valor_campo
	}

} else if(tipo === 'valor') { //selecionando o campo a partir da API do DOM

	document.getElementById('resultado').value += valor
	//concatenando o valor contido no campo com o valor recebido pelo parâmetro
}

}