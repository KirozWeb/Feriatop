const express = require('express')
const routes = express.Router()
const conexion = require('../conexion');
const session = require('express-session')


usua = [];
maq = [];
solu = [];
usuario = [];
perfil = []
listausua = [];

routes.get('/registrar',(req,res)=>{
    res.render("registrarse",{
        arrayMascotas: usua
    })
})

routes.post('/guardar', (req, res) => {
    //console.log(req.body);
    conexion.query('INSERT INTO Registro_db SET ?',req.body,(error,rows)=>{
        if (error){
            return res.send(error);
        } else {

            //res.send('<script>window.location.href="/database/consultas";</script>',{data:data});
            res.render("index",{titulo : "registro guardado con exito"})

        }
    })

})

routes.get('/login',(req,res)=>{
    res.render("acceso")
})

routes.post('/ingresar',(req, res) => {
    usuario = []
    conexion.query('SELECT * FROM Registro_db WHERE NombreUsuario = ? AND ContrasenaUsuario = ?',[req.body.NombreUsuario,req.body.ContrasenaUsuario],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {

            //res.send('<script>window.location.href="/database/consultas";</script>');
            results.forEach(element => {
                console.log("esto es consultas"+element.PerfilUsuario);
                perfil.push(element.PerfilUsuario);
                usuario.push(element);
                });
                console.log("esto es perfiles" + perfil[0])
                console.log("esto es usuario " + usuario.PerfilUsuario);
                req.session.rol = perfil[0];
                res.locals.user = req.session.rol;
                console.log("esto ese res local "+res.locals.user)

                if(perfil[0] === 'administrador'){
                    res.render("validado",{
                        arrayMascotas : usuario})
                }
                if(perfil[0] === 'fabricante'){
                    req.session.rol = perfil[0];
                    //console.log("esto es session " + req.session.rol)
                    res.render("index",{titulo : "su perfil es fabricante",
                    arrayMascotas : usuario})
                    }

                if(perfil[0] === 'clientes'){
                    res.render("index",{titulo : "su perfil es clientes",
                    arrayMascotas : usuario})
                }
                if(perfil[0] === 'operador'){
                    res.render("index",{titulo : "su perfil es operador",
                    arrayMascotas : usuario})
                }
                if(perfil[0] === 'cooperador'){
                    res.render("index",{titulo : "su perfil es cooperador",
                    arrayMascotas : usuario})
                }
                if(perfil[0] === 'aprendiz'){
                    res.render("index",{titulo : "su perfil es aprendiz",
                    arrayMascotas : usuario})
                }

        }
    })
    perfil = []
})

routes.post('/buscarmaquina',(req, res) => {
solu = []
maq = []
cont = 0;
solu.push(req.body.IdUsuario)
    conexion.query('SELECT * FROM Maquina_db WHERE RefMaquina = ?',[req.body.RefMaquina],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {

            //res.send('<script>window.location.href="/database/consultas";</script>');
            results.forEach(element => {

                console.log(element)
                maq.push(element)
                cont++;
                });
                console.log("este es contador :" + cont)

                maq[0].IdUsuario = solu;
                console.log("esta es la longitud de: "+ maq)
                res.render("mostrarmaquina",{
                arrayMaquina: maq,
                arrayMascotas: solu})

        }
    })
})

routes.post('/grabarsolucion', (req, res) => {
    conexion.query('INSERT INTO Solucion_db SET ?',req.body,(error,rows)=>{
        if (error){
            return res.send(error);
        } else {
            res.render("index",{titulo : "su solucion ha sido grabada"})

        }
    })

})

routes.get('/buscausuario',(req,res)=>{
    res.render("searchusuario",{
        arrayMascotas: usua
    })
})
routes.post('/buscar_usuario',(req, res) => {
    let id = req.params.id
    console.log(id)
    //usuario = []
    user = []
    conexion.query('SELECT * FROM Registro_db WHERE IdUsuario = ?',[req.body.IdUsuario],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {
            results.forEach(element => {
                user.push(element);
                });

            res.render("editar_usuario",{
                arrayMascotas: user})
            }
            /*res.render("editar_usuario",{
                arrayMascotas: usuario})
            }*/
    })
})

routes.get('/borrar_usuario/:id',(req, res) => {
    let id = req.params.id
    console.log(id)
    //usuario = []
    user = []
    conexion.query('DELETE FROM Registro_db WHERE IdUsuario = ?', [id],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {

            res.send('<script>window.location.href="/database/consulta_usuario";</script>');
            /*res.render("consulta_usuario",{
                arrayMascotas: user})*/
            }
            /*res.render("editar_usuario",{
                arrayMascotas: usuario})
            }*/
    })
})

routes.get('/buscar_usuario/:id',(req, res) => {
    let id = req.params.id
    console.log(id)
    //usuario = []
    user = []
    conexion.query('SELECT * FROM Registro_db WHERE IdUsuario = ?',[id],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {
            results.forEach(element => {
                user.push(element);
                });

            res.render("editar_usuario2",{
                arrayMascotas: user})
            }
            /*res.render("editar_usuario",{
                arrayMascotas: usuario})
            }*/
    })
})


routes.post('/updateusuario',(req, res) => {
    usua = []
    usua.push(req.body)
    console.log(req.body)
    conexion.query('UPDATE Registro_db SET ? WHERE IdUsuario = ?',[req.body,req.body.IdUsuario],function(error,results,fields){
        if (error){
            console.log("hasta aqui llego")
            return res.send(error);
        } else {
            /*console.log("registro actualizado")
            res.render("index",{titulo : "Registro Actualizado"})*/
            res.send('<script>window.location.href="/database/consulta_usuario";</script>');
            }
    })
})


routes.get('/consulta_usuario', (req, res) => {
    //user = []
    conexion.query('SELECT * from Registro_db', function(error,results,fields) {
        if(error)
            throw error;

            results.forEach(element => {
            //usuario.push(element);
            listausua.push(element);
            });

    });
    res.render("usuarios2",{
        arrayMascotas: listausua
   })
   //usuario = []
   listausua = []
})

routes.get('/search_maquina',(req,res)=>{
    res.render("validado",{
        arrayMascotas: usuario
    })
})
module.exports = routes