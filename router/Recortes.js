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