import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!
const ts = document.querySelector<HTMLDivElement>('#ts')!



app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

ts.innerHTML=`
<input id="nameInput" type=text placeholder="Enter your name"/>
<h2>Hello <h1 id="boo"></h1> from typescript!</h2>
<button id="submit" onclick="myFunction();">Submit</button>
<script>`
function myFunction(){
  let name = "Pinny"
  console.log(name)
  const nameInput = document.querySelector("#nameInput");
  console.log(nameInput)
  if (nameInput) {name = nameInput.value} 
  }`</script>
`

