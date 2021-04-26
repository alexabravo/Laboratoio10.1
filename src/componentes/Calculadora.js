import React from 'react';
import Display from './Display';
import Boton from './Boton';

class Calculadora extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numero1: 0,
      numero2: 0,
      operador: '',
      display: '0',
      primerNumero: false,
      segundoNumero: false,
      igual: false,
    }
  }

  ingresarNumero(numero) {
    const { operador } = this.state
    const { display } = this.state
    const { numero1 } = this.state
    const { numero2 } = this.state
    const { igual } = this.state
    if (display === 'ERROR') {
      this.setState({
        display: '0',
      })
    }

    if (operador === '') {
      if (numero1 <= 99999999) {
        if (igual === true) {
          this.setState({
            igual: false,
            display: numero,
            numero1: parseFloat(numero, 10),
            primerNumero: true,
          })
        } else if (numero1 === 0) {
          this.setState({
            display: numero,
            numero1: parseFloat(numero, 10),
            primerNumero: true,
          })
        } else {
          this.setState({
            display: display + numero,
            numero1: parseFloat(display + numero, 10),
            primerNumero: true,
          })
        }
      } else {

        this.setState({
          display: 'ERROR',
          operador: '',
          numero1: parseFloat('0', 10),
          numero2: parseFloat('0', 10),
        })
      }
    } else if (numero2 <= 99999999) {
      if (numero2 === 0 || (numero2 === 0 && (operador === 'x' || operador === '/'))) {
        this.setState({
          display: numero,
          numero2: parseFloat(numero, 10),
          segundoNumero: true,
        })
      } else {
        this.setState({
          display: display + numero,
          numero2: parseFloat(display + numero, 10),
          segundoNumero: true,
        })
      }
    } else {

      this.setState({
        display: 'ERROR',
        operador: '',
        numero1: parseFloat('0', 10),
        numero2: parseFloat('0', 10),
      })
    }
  }

  ingresarOperando(operando) {
    const { operador } = this.state
    const { igual } = this.state
    const { numero1 } = this.state
    const { numero2 } = this.state
    const { segundoNumero } = this.state
    const { primerNumero } = this.state

    if (igual === true) {
      this.setState({
        igual: false,
      })
    }

    if (numero1 === 0 && primerNumero === true) {
      this.setState({
        operador: operando,
      })
    } else if (operador === '') {
      this.setState({
        operador: operando,
      })
    } else if (operador !== '') {
      if (operador === '+') {
        if ((parseFloat(numero1 + numero2, 10)) > 999999999) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 + numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 + numero2, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        }
      } else if (operador === '-') {
        if ((parseFloat(numero1 - numero2, 10)) < 0) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 - numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 - numero2, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        }
      } else if (operador === 'x') {
        if (numero2 === 0 && segundoNumero === true) {
          this.setState({
            display: (parseFloat(numero1 * numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 * numero2, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        } else if (numero2 === 0) {
          this.setState({
            display: (parseFloat(numero1, 10)).toString(),
            numero1: parseFloat(numero1, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        } else if ((parseFloat(numero1 * numero2, 10)) > 999999999) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 * numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 * numero2, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        }
      } else if (operador === '/') {
        if (numero2 === 0 && segundoNumero === true) {
          if ((numero1 / numero2) === Infinity) {
            this.setState({
              display: 'ERROR',
              operador: '',
              numero1: parseFloat('0', 10),
              numero2: parseFloat('0', 10),
              segundoNumero: false,
            })
          } else {
            this.setState({
              display: (parseFloat(numero1 / numero2, 10)).toString().substr(0, 8),
              numero1: parseFloat(numero1 / numero2, 10),
              numero2: 0,
              operador: operando,
              segundoNumero: false,
            })
          }
        } else if (numero2 === 0) {
          this.setState({
            display: (parseFloat(numero1, 10)).toString(),
            numero1: parseFloat(numero1, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        } else if ((parseFloat(numero1 / numero2, 10)) > 999999999) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else if ((numero1 / numero2) === Infinity) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 / numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 / numero2, 10),
            numero2: 0,
            operador: operando,
            segundoNumero: false,
          })
        }
      }
    }
  }

  operarNumero(operacion) {
    const { numero1 } = this.state
    const { numero2 } = this.state
    const { operador } = this.state
    const { segundoNumero } = this.state
    if (operacion === '=') {
      if (operador === '+') {
        if ((parseFloat(numero1 + numero2, 10)) > 999999999) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 + numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 + numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
            segundoNumero: false,
          })
        }
      } else if (operador === '-') {
        if ((parseFloat(numero1 - numero2, 10)) < 0) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 - numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 - numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
            segundoNumero: false,
          })
        }
      } else if (operador === 'x') {
        if (numero2 === 0 && segundoNumero === true) {
          this.setState({
            display: (parseFloat(numero1 * numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 * numero2, 10),
            numero2: 0,
            operador: '',
            segundoNumero: false,
          })
        } else if (numero2 === 0) {
          this.setState({
            display: (parseFloat(numero1, 10)).toString(),
            numero1: parseFloat(numero1, 10),
            numero2: 0,
            operador: '',
            igual: true,
            segundoNumero: false,
          })
        } else if ((parseFloat(numero1 * numero2, 10)) > 999999999) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 * numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 * numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
            segundoNumero: false,
          })
        }
      } else if (operador === '/') {
        if (numero2 === 0 && segundoNumero === true) {
          if ((numero1 / numero2) === Infinity) {
            this.setState({
              display: 'ERROR',
              operador: '',
              numero1: parseFloat('0', 10),
              numero2: parseFloat('0', 10),
              segundoNumero: false,
            })
          } else {
            this.setState({
              display: (parseFloat(numero1 / numero2, 10)).toString().substr(0, 8),
              numero1: parseFloat(numero1 / numero2, 10),
              numero2: 0,
              operador: '',
              segundoNumero: false,
            })
          }
        } else if (numero2 === 0) {
          this.setState({
            display: (parseFloat(numero1, 10)).toString(),
            numero1: parseFloat(numero1, 10),
            numero2: 0,
            operador: '',
            igual: true,
            segundoNumero: false,
          })
        } else if ((parseFloat(numero1 / numero2, 10)) > 999999999) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else if ((numero1 / numero2) === Infinity) {
          this.setState({
            display: 'ERROR',
            operador: '',
            numero1: parseFloat('0', 10),
            numero2: parseFloat('0', 10),
            segundoNumero: false,
          })
        } else {
          this.setState({
            display: (parseFloat(numero1 / numero2, 10)).toString().substr(0, 8),
            numero1: parseFloat(numero1 / numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
            segundoNumero: false,
          })
        }
      } else {
        this.setState({
          display: (parseFloat(numero1, 10)).toString(),
          numero1: parseFloat(numero1, 10),
          numero2: 0,
          operador: '',
          igual: true,
          segundoNumero: false,
        })
      }
    }
  }

  render() {
    const { estilo } = this.props
    const { display } = this.state

    return (
      <div type='container' className={estilo}>
        <Display estilo='display' valor={display} />
        <div className='grid'>
          <Boton texto='7' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='8' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='9' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='+' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <Boton texto='-' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <Boton texto='4' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='5' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='6' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='x' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <Boton texto='/' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <Boton texto='1' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='2' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='3' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='0' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='=' estilo='boton' handle={this.operarNumero.bind(this)}> </Boton>
          <Boton texto='.' estilo='boton' handle={this.ingresarNumero.bind(this)} ></Boton>
          <Boton texto='mod' estilo='boton' handle={this.ingresarOperando.bind(this)} ></Boton>
          <Boton texto='+/-' estilo='boton' handle={this.ingresarNumero.bind(this)} ></Boton>
        </div>
      </div>
    )
  }
}
export default Calculadora