//este archivo va en la carpeta router
//viene de consultas principio
routes.get('/consultas', (req, res) => {

    conexion.query('SELECT * from perfil', function(error,results,fields) {
        if(error)
            throw error;

            results.forEach(element => {
            //console.log("esto es consultas"+element);
            usua.push(element);
            });

    });
    res.render("usuarios",{
        arrayMascotas: usua
   })
   usua = []
})
//viene de navbar
<li class="nav-item">
            <a class="nav-link" href="/database/consultas">Consultas</a>
          </li>

<li class="nav-item">
            <a class="nav-link" href="/serviciose">404</a>
          </li>

if(perfil[0] === 'fabricante'){
    req.session.rol = perfil[0];
    //console.log("esto es session " + req.session.rol)
    res.render("validado",{
        tituloWeb: 'Pagina de inicio',
       arrayMascotas : usuario})
    }

if(perfil[0] === 'clientes'){
    res.render("index",{titulo : "su perfil es clientes",
    perf: perfil})
}
if(perfil[0] === 'operador'){
    res.render("index",{titulo : "su perfil es operador",
    perf: perfil})
}
if(perfil[0] === 'cooperador'){
    res.render("index",{titulo : "su perfil es cooperador",
    perf: perfil})
}
if(perfil[0] === 'aprendiz'){
    res.render("index",{titulo : "su perfil es aprendiz",
    perf: perfil})
}
if(perfil[0] === 'administrador'){
    res.render("validado",{
        arrayMascotas : usuario,
        perf: perfil})
}

routes.get('/update',(req,res)=>{
    res.sendFile('/vista/actualizar.html',{root:__dirname})
})
routes.post('/actualizar',(req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE registro SET ? WHERE idRegistro = ?', [req.body, req.body.idRegistro], (err, rows) => {
            if (err){
                return res.send(err)
            }
            else{
            res.send('registro acualizado')

            }
        })
    })
})

routes.get('/delete',(req,res)=>{
    res.sendFile('/vista/eliminar.html',{root:__dirname})
})
routes.post('/eliminar',(req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM registro WHERE idRegistro = ?', [req.body.idRegistro], (err, rows) => {
            if (err){
                return res.send(err)
            }
            else{
            res.send('registro eliminado')
            }
        })
    })
})
//pertenecia a mostrarsoluciones
<form class="d-flex" action="./grabarsolucion"id="formulario" name="formulario" method="post">
                                    <input type="hidden" id="IdMaquina" name="IdMaquina" value="<%= maquina.IdMaquina %>">
                                    <input type="hidden" id="RefMaquina" name="RefMaquina" value="<%= maquina.RefMaquina %>">
                                    <input type="hidden" id="IdUsuario" name="IdUsuario" value="<%= maquina.IdUsuario %>">
                                    <textarea class="form-control me-2" type="textarea"id="DescSolucion" name="DescSolucion" type="search" placeholder="Solucion sugerida" aria-label="Search"></textarea>
                                    <button class="btn btn-outline-success" type="submit">Crear</button>
                                    </form>

                                    <td>
                                      <a href="/database/consultamaquina/<%= mascota.IdMaquina%>" class="btn btn-warning btn-sm">Editar</a>
                                    </td>

                                    mostrarsoluciones
viene del navbar
                                    <button class="btn btn-outline-success" type="submit">Search</button>
viene de consulta /guardar

                                    //res.send('<script>window.location.href="/database/consultas";</script>',{data:data});
viene de api /ingresar
//res.send('<script>window.location.href="/database/consultas";</script>');
//res.locals.user = req.session.rol;
//console.log("esto es session " + req.session.rol)

viene de consulta maquina/:id
//res.send('<script>window.location.href="/database/consultas";</script>');
viene de consultamaquina/:id
//borrar_usuario/:id
viene de /buscarmaquina
//res.send('<script>window.location.href="/database/consultas";</script>');
viene de buscar_usuario
usuario = []
/*res.render("editar_usuario",{
                arrayMascotas: usuario})
            }*/</input>

            /*routes.get('/si_darse_baja',(req,res)=>{
    usuario = [];
    res.render("index",{titulo : "se ha dado de baja",
                    arrayMascotas : usuario})
                })*/
viene de borrar_usuario
//usuario = []
/*res.send('<script>window.location.href="/database/consulta_usuario";</script>');*/</input>
/*res.render("consulta_usuario",{
                arrayMascotas: user})*/
/*res.render("editar_usuario",{
                arrayMascotas: usuario})
            }*/
viene de buscar_usuario/:id
//usuario = []
/*res.render("editar_usuario",{
                arrayMascotas: usuario})
            }*/

            /*
routes.get('/actualizar_usuario/:id',(req, res) => {
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
            /*
    })
})*/
viene de updateusuario
/*console.log("registro actualizado")
            res.render("index",{titulo : "Registro Actualizado"})*/
viene de consultausuario
//user = []
//usuario.push(element);
//usuario = []
border p-3 form
