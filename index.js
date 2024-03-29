const express = require('express')
const app = express()

app.use(express.json())


let people = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(people)
})

app.get('/info', (request, response) => {
    const date = new Date()
    const length = people.length

    response.send(`
    <p>Phonebook has info for ${length} people</p>
    <p>${date}</p>
    `)
})
 
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = people.find(p => id === p.id)


    if(person){
        response.send(person)
    } else {
        response.status(204).end()
    }
    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    people = people.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = () => {
    const newId = Math.floor(Math.random() * 1000)
    return newId
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    
    if(!body.name){
        return response.status(400).json({
            error: 'name is missing'
        })
    } 
    
    if(!body.number){
        return response.status(400).json({
            error: 'number is missing'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    people = people.concat(person)

    response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})