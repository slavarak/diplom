const modal = () => {
    const bacground = document.querySelector('.overlay')
    const modalContent = document.querySelector('.header-modal')
    const twoModal = document.querySelector('.services-modal')

    const modalOpen = (element) => {
        bacground.style.display = "block"
        element.style.display = "block"
    }

    const modalClose = (element1) => {
        bacground.style.display = ""
        element1.style.display = ""
    }


    document.addEventListener('click', (e) => {
        if (e.target.closest('.button > .fancyboxModal')) {
            modalOpen(modalContent)
        } else if (e.target.closest('.header-modal__close')) 
        {
            modalClose(modalContent)
        } else if (e.target.closest('.overlay')) {
            modalClose(modalContent)
        }
        if (e.target.closest('.utp-button > .fancyboxModal')) {
            modalOpen(twoModal)
        }
        if (e.target.closest('.service-button > .fancyboxModal')) {
            modalOpen(twoModal)
        } else if (e.target.closest('.services-modal__close')) {
            modalClose(twoModal)
        } else if (e.target.closest('.overlay')) {
            modalClose(twoModal)
    
        }
    })    
}

export default modal
// const modal = () => {
//     const bacground = document.querySelector('.overlay')
//     const modalContent = document.querySelector('.header-modal')


//     document.addEventListener('click', (e) => {
//         if (e.target.closest('.button > .fancyboxModal')) {
//             bacground.style.display = "block"
//             modalContent.style.display = "block"
//         } else if (e.target.closest('.header-modal__close')) {
//             bacground.style.display = ""
//             modalContent.style.display = ""
//         } else if (e.target.closest('.overlay')) {
//             bacground.style.display = ""
//             modalContent.style.display = ""
//         }
//     })
// }

// export default modal