const toggleBtn = <HTMLButtonElement>document.querySelector('.toggle')
const optionsContainer = <HTMLDivElement>(
  document.querySelector('.options-container')
)

toggleBtn.addEventListener('click', () => {
  optionsContainer.classList.toggle('active')
})
