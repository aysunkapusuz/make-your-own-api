const express = require('express')
const app = express()
const PORT = 8000

const socialMedias = {
    'facebook':{
        'CEO': 'Mark Zuckerberg',
        'foundationYear': 2004,
        'headquarters': 'Menlo Park, CA'
    },
    'instagram':{
        'CEO': 'Kevin Systrom',
        'foundationYear': 2010,
        'headquarters': 'San Francisco, CA'
    },
    'linkedin':{
        'CEO': 'Ryan Roslansky',
        'foundationYear': 2002,
        'headquarters': 'Mountain View, CA'
    },
    'youtube':{
        'CEO': 'Susan Wojcicki',
        'foundationYear': 2005,
        'headquarters': 'San Bruno, CA'
    },
    'youtube':{
        'CEO': 'Susan Wojcicki',
        'foundationYear': 2005,
        'headquarters': 'San Bruno, CA'
    },
    'unknown':{
        'CEO': 'unknown',
        'foundationYear': 'unknown',
        'headquarters': 'unknown'
    },
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const socialMediaName = request.params.name.toLowerCase()

    if(socialMedias[socialMediaName]){
        response.json(socialMedias[socialMediaName])
    }else{
        response.json(socialMedias['unknown'])

    }
    

})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)

})