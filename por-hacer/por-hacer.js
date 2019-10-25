const fs = require('fs');
//-----------------------------------------------------
let listadoPorHacer =[];
//-----------------------------------------------------
const guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw err;
        console.log('Guardado con exito')
    })
}
//-----------------------------------------------------
const cargarDB = ()=>{

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}
//-----------------------------------------------------
const crear = (descripcion)=>{

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()

    return porHacer;
}
//-----------------------------------------------------------
const getListado = ()=>{
    /*let lista = require('../db/data.json');
    console.log(lista)
    return lista;*/
    cargarDB()
    //console.log(listadoPorHacer)
    return listadoPorHacer;
}
//----------------------------------------------------------
const actualizar = (descripcion, completado = true)=>{
    cargarDB()

    let index = listadoPorHacer.findIndex( tarea=>{
        return tarea.descripcion === descripcion
    } )

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    }else{return false}
}
//--------------------------------------------------------
const borrar = (descripcion)=>{
    cargarDB()

    let index = listadoPorHacer.findIndex( tarea=>{
        return tarea.descripcion === descripcion
    } )
    listadoPorHacer.splice(index, 1);
    guardarDB()
    return "borrado"
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}