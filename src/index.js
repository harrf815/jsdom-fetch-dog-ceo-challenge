console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

// const arrBreeds = []


document.addEventListener("DOMContentLoaded", () => {
    
    function fetchAndShowDog() {
        fetch(imgUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            data.message.forEach(dog => {
                const div = document.getElementById('dog-image-container')
                const img = document.createElement('img')
                img.src = dog
                img.style.width = '200px'
                div.appendChild(img)
                })
            })
    }
    fetchAndShowDog()

    function fetchAndBreed() {
        fetch(breedUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(breeds){
                const arrBreeds = Object.keys(breeds.message)
                arrBreeds.forEach(breed =>{ 
                    const ul = document.getElementById('dog-breeds')
                    const li = document.createElement('li')
                    li.innerText = breed
                    li.addEventListener('click',function(e){
                        e.target.style.color = "orange"
                    })
                    ul.appendChild(li)
                })
                    
            })
    }
    fetchAndBreed()

    function handleChange(e){
        let dogBreed = document.getElementById('dogs-breed')
        let filterDogs = arrBreeds.filter(breed => breeds.startWith(e.target.value))
        dogBreed.innerHTML= ''
    }

    function addEventListeners(){
        let select = document.getElementById('select')
        select.addEventListener('change', handleChange)
    }
    addEventListeners()

    function addOptions(){
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let select = document.getElementById('select')
        select.innerHTML = ''
        abc.forEach(letter =>{
            let op = document.createElement('option')
            op.value = letter 
            op.textContent = letter 
            select.appendChild(op)
        })
    }

    addOptions()
})




