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


/******ESTA RUTA INVOCA LA PAGINA REGISTRARSE ES PARA TODOS LOS USUARIOS*******/
routes.get('/registrar',(req,res)=>{
    res.render("registrarse",{
        arrayMascotas: usua
    })
})
/****ESTA ES UNA API PARA COMPROBAR QUE UN USUARIO Y CONTRASENA NO EXISTAN AL MISMO TIEMPO EN BASE DATOS****/
/****SI NO EXISTEN SE GUARDAN EN LA BASE DE DATOS */
routes.post('/comprobar',(req, res) => {
    usuario = []
    var contra = req.body;
    console.log(contra)
    conexion.query('SELECT * FROM Registro_db WHERE NombreUsuario = ? AND ContrasenaUsuario = ?',[req.body.NombreUsuario,req.body.contrasenaUsuario],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {
            console.log(results.length)
            if(results.length> 0)
            {
                res.render("index",{titulo : "sus datos estan errados",
                arrayMascotas : usuario})
            }
            else{
                conexion.query('INSERT INTO Registro_db SET ?',req.body,(error,rows)=>{
                    if (error){
                        return res.send(error);
                    } else {
                        res.render("index",{titulo : "registro fue comprobado y guardado con exito"})
                    }
                })
            }
        }
    })
    perfil = []
})


/*******ESTA ES UNA API PARA QUE SE REGISTREN TODOS LOS USUARIOS******/
routes.post('/guardar', (req, res) => {
    //console.log(req.body);
    conexion.query('INSERT INTO Registro_db SET ?',req.body,(error,rows)=>{
        if (error){
            return res.send(error);
        } else {
            res.render("index",{titulo : "registro guardado con exito"})
        }
    })
})
/****** ******/
routes.get('/crearmaquina',(req,res)=>{
    res.render("formcrearmaquina",{
        arrayMascotas: usuario
    })
})

/*******ESTA API ES PARA CREAR UNA MAQUINA*********/
routes.get('/crearmaquinas',(req, res) => {
    solu = []
    maq = []
    cont = 0;
    let Ref= req.params.RefMaquina
    console.log("este es ref maquina "+Ref)
        conexion.query('SELECT * FROM Maquina_db WHERE  RefMaquina = ?',[Ref],function(error,results,fields){
            if (error){
                return res.send(error);
            } else {
                if(results.length>0)
               {
                res.render("index",{titulo : "el nombre de maquina ya existe",
                arrayMascotas : usuario})
                }
                else{
                    conexion.query('INSERT INTO Maquina_db SET ?',req.body,(error,rows)=>{
                        if (error){
                            return res.send(error);
                        } else {
                            res.render("index",{titulo : "registro guardado con exito"})
                        }
                    })
                }

            }
        })
    })


/*******ESTA RUTA INVOCA LA PAGINA ACCESO ES PARA TODOS LOS USUARIOS*******/
routes.get('/login',(req,res)=>{
    res.render("acceso")
})
/********ESTA API ES PARA QUE SE LOGUEEN TODOS LOS USUARIOS*******/
routes.post('/ingresar',(req, res) => {
    usuario = []
    var contra = req.body;
    console.log(contra)
    conexion.query('SELECT * FROM Registro_db WHERE NombreUsuario = ? AND ContrasenaUsuario = ?',[req.body.NombreUsuario,req.body.ContrasenaUsuario],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {
            console.log(results.length)
            if(results.length> 0)
            {
            results.forEach(element => {
                console.log("esto es consultas"+element.PerfilUsuario);
                perfil.push(element.PerfilUsuario);
                usuario.push(element);
                });
                console.log("esto es perfiles" + perfil)
                console.log("esto es usuario " + usuario.PerfilUsuario);
                req.session.rol = perfil;
                console.log("esto ese res local "+req.session.rol)

                if(perfil[0] === 'administrador'){
                    res.render("index",{titulo : "su perfil es administrador",
                    arrayMascotas : usuario})
                }
                if(perfil[0] === 'fabricante'){
                    req.session.rol = perfil[0];
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
            else{
                res.render("index",{titulo : "su contrasena o usuario esta errado",
                    arrayMascotas : usuario})
            }
        }
    })
    perfil = []
})
/**ESTA API CONSULTA TODAS LAS SOLUCIONES DE UNA SOLA MAQUINA--ADMINISTRADOR--OPERADOR-COOPERADOR-FABRICANTE**/
routes.get('/consultamaquina/:id',(req, res) => {
    solu = []
    maq = []
    cont = 0;
    let id = req.params.id
    solu.push(req.body.IdUsuario)
        conexion.query('SELECT * FROM Solucion_db WHERE  IdMaquina = ?',[id],function(error,results,fields){
            if (error){
                return res.send(error);
            } else {
                results.forEach(element => {

                    console.log(element)
                    maq.push(element)
                    cont++;
                    });
                    console.log("este es contador :" + cont)

                    //maq[0].IdUsuario = solu;
                    console.log("esta es la longitud de: "+ maq)
                    res.render("mostrarsoluciones",{
                    arrayMaquina: maq})

            }
        })
    })
/**ESTA API BUSCA MAQUINA SEGUN REFERENCIA ES PARA OPERADORES-COOPERADORES-FABRICANTES**/
routes.post('/buscarmaquina',(req, res) => {
solu = []
maq = []
cont = 0;
solu.push(req.body.IdUsuario)
    conexion.query('SELECT * FROM Maquina_db WHERE RefMaquina = ?',[req.body.RefMaquina],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {
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
/***ESTA API GRABA SOLUCIONES Y ES DE OPERADORES-COOPERADORES-FABRICANTES****/
routes.post('/grabarsolucion', (req, res) => {
    conexion.query('INSERT INTO Solucion_db SET ?',req.body,(error,rows)=>{
        if (error){
            return res.send(error);
        } else {
            res.render("index",{titulo : "su solucion ha sido grabada"})

        }
    })

})
/****ESTA RUTA ES PARA BUSCAR UN USUARIO Y PERTENECE --ADMINISTRADOR****/
routes.get('/buscausuario',(req,res)=>{
    res.render("searchusuario",{
        arrayMascotas: usua
    })
})
/****ESTA API ES PARA BUSCAR UN USUARIO Y PERTENECE --ADMINISTRADOR****/
routes.post('/buscar_usuario',(req, res) => {
    let id = req.params.id
    console.log(id)
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
    })
})
/**ESTA RUTA ES PARA DARSE DE BAJA PERTENECE A -OPERADORES-COOPERADORES-FABRICANTES**/
routes.get('/darse_baja',(req,res)=>{
    res.render("darsebaja",{
        arrayMascotas: usuario
    })
})
/**ESTA RUTA ES PARA NO DARSE DE BAJA PERTENECE A -OPERADORES-COOPERADORES-FABRICANTES**/
routes.get('/no_darse_baja',(req,res)=>{
res.render("index",{titulo : "ha cancelado eliminar su registro",
                    arrayMascotas : usuario})
                })
/**ESTA API ES PARA DARSE DE BAJA PERTENECE A -OPERADORES-COOPERADORES-FABRICANTES**/
routes.get('/borrar_usuario/:id',(req, res) => {
    let id = req.params.id
    console.log(id)
    user = []
    conexion.query('DELETE FROM Registro_db WHERE IdUsuario = ?', [id],function(error,results,fields){
        if (error){
            return res.send(error);
        } else {
            if(req.session.rol[0] === "administrador"){
                res.send('<script>window.location.href="/database/consulta_usuario";</script>');
            }
            else{
                usuario = []
                res.render("index",{titulo : "sus datos se han actualizado",
                    arrayMascotas : usuario})

            }

            }

    })
})
/***ESTA API ES PARA BUSCAR UN USUARIO Y PERTENECE --ADMINISTRADOR***/
routes.get('/buscar_usuario/:id',(req, res) => {
    let id = req.params.id
    console.log(id)
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

    })
})

/**ESTA API SIRVE PARA ACTUALIZAR REGISTRO USUARIO Y ES PARA --ADMINISTRADOR Y OPERADOR-COOPERADOR-FABRICANTE**/
routes.post('/updateusuario',(req, res) => {
    usua = []
    usua.push(req.body)
    console.log(req.body)
    conexion.query('UPDATE Registro_db SET ? WHERE IdUsuario = ?',[req.body,req.body.IdUsuario],function(error,results,fields){
        if (error){
            console.log("hasta aqui llego")
            return res.send(error);
        } else {
            console.log(req.session.rol)
            if(req.session.rol[0] === "administrador"){
                res.send('<script>window.location.href="/database/consulta_usuario";</script>');
            }
            else{
                res.render("index",{titulo : "sus datos se han actualizado",
                    arrayMascotas : usuario})

            }
            }
    })
})

/***ESTA API CONSULTA TODOS LOS USUARIOS DE LA TABLA -ADMINISTRADOR ***/
routes.get('/consulta_usuario', (req, res) => {

    conexion.query('SELECT * from Registro_db', function(error,results,fields) {
        if(error)
            throw error;

            results.forEach(element => {

            listausua.push(element);
            });

    });
    res.render("usuarios2",{
        arrayMascotas: listausua
   })
   listausua = []
})

/**ESTA RUTA INVOCA LA PAGINA VALIDADO DONDE UN FORMULARIO BUSCA UNA MAQUINA ES PARA OPERADORES-COOPERADORES-FABRICANTES**/
routes.get('/search_maquina',(req,res)=>{
    res.render("validado",{
        arrayMascotas: usuario
    })
})
module.exports = routes