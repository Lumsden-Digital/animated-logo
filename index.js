const logo = document.querySelectorAll('#logo path')

// for (let i = 0; i < logo.length; i++) {
//     console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
// }

logo.forEach((path, index) => console.log(`letter ${index + 1} is ${path.getTotalLength()}`))