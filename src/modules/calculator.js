const calculator = () => {
    const calc = document.getElementById('calc')
    const balcony = document.getElementById('calc-type')
    const glass = document.getElementById('calc-type-material')
    const squaremeter = document.getElementById('calc-input')
    const reuslts = document.getElementById('calc-total')

    const countCalc = () => {
        const balconyValue = +balcony.options[balcony.selectedIndex].value
        let glassValue = +glass.options[glass.selectedIndex].value
        const squaremeterValue = squaremeter.value

        let reusltsValue = 0


        if(glass.value == "--") {
            glassValue = 1
        }


        if (balcony.value && squaremeter.value) {
            reusltsValue = Math.round(balconyValue * glassValue * squaremeterValue)
        } else {
            reusltsValue = 0
        }

        reuslts.value = reusltsValue
    }
    if (calc == null) {
        console.log('Калькулятор на странице не найден');
    } else {
    calc.addEventListener('input', (e) => {
        if (e.target === balcony || e.target === squaremeter || 
            e.target === glass) {
            countCalc()
        } else {
            reusltsValue = 0
        }
    })
  }
}

export default calculator