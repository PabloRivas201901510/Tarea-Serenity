import express from "express";
import cors from "cors"
import md5 from "md5";
let corsOptions = { origin: true, optionsSuccessStatus: 200 };

const app = express()
app.use(express.json())

app.use(cors(corsOptions));


// POST: REGISTRO
app.post('/registro', (req, res) => {
    const {id, name, lastname, email, birthday, password, confirmPassword} = req.body
    var passEnc = md5(password);
    res.send({id, name, lastname, email, birthday, passEnc})
})

// POST: INICIO
app.post('/inicio', (req, res) => {
    const {email, password} = req.body
    var passEnc = md5(password);
    res.send({email, passEnc})
})

// POST: ASIGNACION
app.post('/asignacion', (req, res) => {
    const {idAsignacion, student, course, section, day, hour} = req.body
    
    res.send({idAsignacion, student, course, section, day, hour} )
})

export default app;