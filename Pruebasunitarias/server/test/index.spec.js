import request from 'supertest'
import app from '../src/app'

/*describe('GET /Tast',  ()=>{
    test('deberia de responder con un estado de codigo 200', async()=>{
        const  response = await request(app).get('/task').send()
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
})*/

describe('POST /registro',  ()=>{

    const registro = {
        id : 12, 
        name : "Pablo", 
        lastname : "Rivas", 
        email : "privas@bdgsa.net", 
        birthday : "28/01/2000", 
        password : "usac123", 
        confirmPassword : "usac123"
    }


    // TEST DEL REGISTRO DE USUARIO
    test('METHOD POST: REGISTRO, deberia de responder con un estado de codigo 200', async()=>{
        const  response = await request(app).post('/registro').send(registro)
        //console.log(response)
        expect(response.statusCode).toBe(200)
    })

    test('METHOD POST: REGISTRO, verificar si la prueba tiene veracidad', async()=>{
        const  response = await request(app).post('/registro').send(registro)
        //console.log(response)
        expect(response.body).toBeDefined()
    })

    test('METHOD POST: REGISTRO, el id deberia ser menor al numero 100', async()=>{
        const  response = await request(app).post('/registro').send(registro)
        //console.log(response)
        expect(response.body.id).toBeLessThan(100) // QUE SEA MENOR EL ID
       
    })

    
})

describe('POST /inicio',  ()=>{

    const inicio = {
        email : "privas@bdgsa.net", 
        password : "usac123", 
    }

    // TEST DEL INICIO DE SESION
    test('METHOD POST: INICIO, deberia de responder con un estado de codigo 200', async()=>{
        const  response = await request(app).post('/inicio').send(inicio)
        //console.log(response)
        expect(response.statusCode).toBe(200)
    })

    test('METHOD POST: INICIO, verificar si la prueba tiene veracidad', async()=>{
        const  response = await request(app).post('/inicio').send(inicio)
        //console.log(response)
        expect(response.body).toBeDefined()
    })

    
    test('METHOD POST: INICIO, verificar que venga una cadena de texto valida', async()=>{
        const  response = await request(app).post('/inicio').send(inicio)
        //console.log(response)
        expect(response.body.email).toMatch(new RegExp('[a-z0-9]+@[a-z]+\.[a-z]'));
    })

})


describe('POST /asignacion',  ()=>{

    const asignacion = {
        idAsignacion : 2, 
        student : "Pablo Rivas", 
        course : "Analisis y Diseño 1", 
        section : "N", 
        day : "Lunes,Martes,Miercoles,Jueves,Viernes", 
        hour : "11:00"
    }

    // TEST DE LA ASIGNACION DE CURSOS
    test('METHOD POST: ASIGNACION, deberia de responder con un estado de codigo 200', async()=>{
        const  response = await request(app).post('/asignacion').send(asignacion)
        //console.log(response)
        expect(response.statusCode).toBe(200) // VERACIDAD
    })

    test('METHOD POST: ASIGNACION, deberia de responder con un estado de codigo 200', async()=>{
        const  response = await request(app).post('/asignacion').send(asignacion)
        //console.log(response)
        expect(response.body).toBeDefined() // VERACIDAD
    })

    test('METHOD POST: ASIGNACION, el id deberia ser menor al numero 100', async()=>{
        const  response = await request(app).post('/asignacion').send(asignacion)
        //console.log(response)
        expect(response.body.idAsignacion).toBeLessThan(100) // QUE SEA MENOR EL ID
    })
})
