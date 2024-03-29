async function fetch_get(url, options={}){
    const headers={
        Accept:'application/json', 
       ...options.headers
    }
    const r= await fetch(url,{...options, headers})
    if (!r.ok) {
        throw new Error('erreur serveur ')
    }
    return r.json()
}
const form=document.querySelector('form')
form.addEventListener('submit', e=>{
    e.preventDefault()
    const form=e.currentTarget
    const data = new FormData(form).get('text').trim()
    if (data==='') {
        return
    }
    pays(data)
})

async function pays(arg) {
    try{
        let main=document.querySelector('ul')
    const comment = await fetch_get("https://restcountries.com/v3.1/name/"+arg)
    
    for(let k of comment){
        console.log(k)
  const nom=document.querySelector('#nom')
  nom.innerHTML=`
  <h2>pays</h2>
  ${k.altSpellings}`
  
  const capitale=document.querySelector('#capitale')
  capitale.innerHTML=`
  <h2>capitale</h2>
  ${k.capital} 
  `
  const langue=document.querySelector('#langue')
  if (k.languages) {
      for(let o in k.languages){
        langue.innerHTML=`
  <h2>langue officielle </h2>
  ${k.languages[o]} 
  `} 
  }
const population=document.querySelector('#population')
population.innerHTML=`
<h2>population</h2>
${k.population} 
`
const drapeau=document.querySelector('#drapeau')
drapeau.innerHTML = `
<h2>population</h2>
<img src=" ${k.flags.png}">
DORCEL LA QUEEN`



    } 
    } catch(e){
     const ul= document.querySelector('ul')  
    }
    
}
