let obj = {
    id: '123465',
    password: "1234"
}

function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
}

let modmeId = document.querySelector('.modme-id')
let modmePassword = document.querySelector('.modme-password')
const sendBtn = document.querySelector('.send-btn')

let inputFirst = ''
let inputSecond = ''

sendBtn.addEventListener('click', e => {
    e.preventDefault
    console.log(modmeId.value)
    console.log(modmePassword.value)
})

modmeId.addEventListener('input', e => {
  inputFirst = e.target.value
  show()
})

modmePassword.addEventListener('input', (e) => {
  inputSecond = e.target.value;
  show();
});

const show = () => {
  if (inputFirst != '' && inputSecond != '') {
    sendBtn.classList.add('show')
  } else {
    sendBtn.classList.remove('show')
  }
}
