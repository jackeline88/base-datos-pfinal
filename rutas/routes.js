import {Router} from "express"
import Usuario from "../models/usuario.js";
const router = Router();

router.get('/hola', function(req,res){
    res.json({"Hola":"Hola"})
})

router.post('/usuario', async function(req,res){
    const usuario = new Usuario({ 
        name: req.body.name,
        age: req.body.age,
        race: req.body.race
    });

    try{
        const guardar = await usuario.save();
        res.status(200).json(guardar)
    }catch (error){
        res.status(500).json("Error")
    }

})

export default router;