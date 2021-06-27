class Calculadora {
    constructor() {
      this.historico = []
      this.num1 = 1
      this.num2 = 1
      this.num3 = 1
      this.resultado = 1
      this.delta = []
    }
  
    get historico() { return this._historico }
    get num1() { return this._num1 }
    get num2() { return this._num2 }
    get num3() { return this._num3 }
    get resultado() { return this._resultados }
    get delta() { return this._delta }
  
    set historico(historico) { this._historico = historico }
    set num1(num1) { this._num1 = num1 }
    set num2(num2) { this._num2 = num2 }
    set num3(num3) { this._num3 = num3 }
    set resultado(resultado) { this._resultados = resultado }
    set delta(delta) { this._delta = delta }
  
    somar() {
      this.num1 = parseInt(prompt("Digite o primeiro número: "))
      this.num2 = parseInt(prompt("Digite o segundo número: "))
      this.resultado = this.num1 + this.num2
      this._historico.push(` ${this.num1} + ${this.num2} = ${this.resultado}`)
      return (`${this.num1} + ${this.num2} = ${this.resultado}`)
    }
  
    subtrair() {
      this.num1 = parseInt(prompt("Digite o primeiro número: "))
      this.num2 = parseInt(prompt("Digite o segundo número: "))
      this.resultado = this.num1 - this.num2
      this._historico.push(` ${this.num1} - ${this.num2} = ${this.resultado}`)
      return (`${this.num1} - ${this.num2} = ${this.resultado}`)
    }
  
    multiplicar() {
      this.num1 = parseInt(prompt("Digite o primeiro número: "))
      this.num2 = parseInt(prompt("Digite o segundo número: "))
      this.resultado = this.num1 * this.num2
      this._historico.push(` ${this.num1} x ${this.num2} = ${this.resultado}`)
      return (`${this.num1} x ${this.num2} = ${this.resultado}`)
    }
  
    dividir() {
      this.num1 = parseInt(prompt("Digite o primeiro número: "))
      this.num2 = parseInt(prompt("Digite o segundo número: "))
      this.resultado = this.num1 / this.num2
      this._historico.push(` ${this.num1} / ${this.num2} = ${this.resultado}`)
      return (`${this.num1} / ${this.num2} = ${this.resultado}`)
    }
  
    exponenciar() {
      this.num1 = parseInt(prompt("Digite o primeiro número: "))
      this.num2 = parseInt(prompt("Digite o segundo número: "))
      this.resultado = this.num1 ** this.num2
      this._historico.push(` ${this.num1} ^ ${this.num2} = ${this.resultado}`)
      return (`${this.num1} ^ ${this.num2} = ${this.resultado}`)
    }
  
    radiciar() {
      this.num1 = parseInt(prompt("Digite o radicando: "))
      this.num2 = parseInt(prompt("Agora digite o índice: "))
      this.resultado = (this.num1 ** (1 / this.num2))
      this._historico.push(` √ ${this.num1} e ${this.num2} = ${this.resultado}`)
      return (`√ ${this.num1} e ${this.num2} = ${this.resultado}`)
    }
  
    fatorial() {
      this.num1 = parseInt(prompt("Digite o número:"))
      let fatorial = 1
      for (let i = 1; i <= this.num1; i++) {
        fatorial = fatorial * i
      }
      this._historico.push(` ${this.num1}! =  ${fatorial}`)
      return (`${this.num1}! é igual: ${fatorial}`)
    }
  
    fibonacci() {
      this.num1 = parseInt(prompt("Digite a quantidade de termos que deseja obter da sequência de Fibonacci: "))
      let sequencia = [0, 1]
      for (let i = 2; i < this.num1 + 1; i++) {
        sequencia.push(sequencia[i - 2] + sequencia[i - 1])
      }
      this._historico.push(` [${sequencia}]`)
      return (`A sequênica da fibonacci de ${this.num1} é = [${sequencia}]`)
    }
  
    equacao() {
      alert("===> A lei de formação para uma equação do 2° é: ax² + bx + c = 0, a partir disso:")
      this.num1 = prompt("Informe o coficiente a:")
      this.num2 = prompt("Informe o coficiente b:")
      this.num3 = prompt("Informe o coficiente c:")
      this.delta = (this.num2 * this.num2) - (4 * this.num1 * this.num3)
      if (this.delta < 0) {
        console.log("Não tem raízes reais")
      } else if (this.delta === 0) {
        console.log("Só tem uma raiz = " + ((-this.num2 + Math.sqrt(this.delta)) / 2 * this.num1))
  
      } else {
        console.log("Tem duas raízes X1= " + ((- this.num2 + Math.sqrt(this.delta)) / 2 * this.num1))
        console.log("Tem duas raízes X2= " + ((- this.num2 - Math.sqrt(this.delta)) / 2 * this.num1))
      }
      this._historico.push(` ${this.num1}x² + ${this.num2}x + ${this.num3} = 0 => x’ = ${(- this.num2 + Math.sqrt(this.delta)) / 2 * this.num1} e x" = ${(- this.num2 - Math.sqrt(this.delta)) / 2 * this.num1}`)
    }
  
    area() {
      this.num1 = parseInt(prompt("Digite o raio da circunferência: "))
      this.resultado = Math.PI * Math.pow(this.num1, 2)
      this._historico.push(`3.14 * (${this.num1} ^ 2) = ${this.resultado}`)
      return (`3,14 * ${this.num1} ^ 2 = ${this.resultado}`)
    }
  
    imprimirInfor(pergunta) {
      switch (pergunta) {
        case "soma":
          calcular.somar()
          break
        case "subtração":
          calcular.subtrair()
          break
        case "multiplicação":
          calcular.multiplicar()
          break
        case "divisão":
          calcular.dividir()
          break
        case "exponenciação":
          calcular.exponenciar()
          break
        case "radiciação":
          calcular.radiciar()
          break
        case "fatorial":
          calcular.fatorial()
          break
        case "fibonacci":
          calcular.fibonacci()
          break
        case "área da circunferência":
          calcular.area()
          break
        case "equação":
          calcular.equacao()
          break
        default:
          alert("A operação digitada é inválida")
      }
    }
    executarOutraOperacao(resposta) {
      if (resposta.toUpperCase() === "SIM") {
        console.log(calcular.imprimirInfor(prompt(`Qual operação você deseja executar?
        Escolha entre : soma, subtração, multiplicação, divisão, exponenciação, radiciação, fatorial, fibonacci, área da circunferência e equação.`)) + calcular.imprimirHistorico())
      } else if (resposta.toUpperCase() === "NÃO") {
        console.log(calcular.imprimirHistorico())
      } else {
        console.log("Resposta inválida")
      }
    }
    imprimirHistorico() {
      if (this._historico.length > 0) {
        console.log((`O histórico da calculadora é : ${this._historico}`))
      } else {
        console.log("O histórico da calculadora no momento está vazio.")
      }
    }
  }
  
  const calcular = new Calculadora()
  calcular.imprimirInfor(prompt(`Qual operação você deseja executar? 
  Escolha entre : soma, subtração, multiplicação, divisão, exponenciação, radiciação, fatorial, fibonacci, área da circunferência e equação.`))
  calcular.executarOutraOperacao(prompt(`Você deseja executar mais uma operação?`))