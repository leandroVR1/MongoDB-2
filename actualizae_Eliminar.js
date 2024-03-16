
db.registros.find();

//eliminar
//eliminar usarios con sueldo menor a 2000
//ej1
db.registros.deleteMany(
    {sueldo: {$lt: 2000}});

//ej2    
db.registros.deleteMany(
    {edad:{$lt: 25}}
)



//ej3
db.registros.deleteMany(
    {$or:
        [ 
        {ciudad:{$eq:"París"}},
        {ciudad:{$eq:"Paris"}}
]
    }
)

//ej4
db.registros.deleteMany(
    {peso:{$gt:180}}
)

//ej5

db.registros.deleteMany(  {
    altura:{$lt :160}}
)

db.registros.deleteMany(
    {$or:
        [
           {nombre:{$eq:"John"}},
           {apellido:{$eq:"Doe"}}
        ]
    }
)

//Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
//ej7
db.registros.deleteMany(
    {correo:{$regex:"^maria."}}
)
//ej8

db.registros.deleteMany(
    {correo:{$exists:false}}
)

db.registros.deleteMany(
    {ciudad:{$eq:"Tokyo"}}
)

db.registros.deleteMany(
    {edad:{$lt:18}}
)
db.registros.deleteMany(
    {salario:{$eq:0}}
)

db.registros.deleteMany(
    {$and:
        [
            {ciudad:{$eq:"New York"}},
            {salario:{$gt:5000}}

        ]
    }
)

//Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.registros.deleteMany( 
    {correo:{$regex:"spam"}}
    )
   
db.registros.deleteMany(
    {$and:
    [
         {ciudad:{$eq:"Bello"}},
         {edad:{$gt:50}}
    ]}
   
)

db.registros.deleteMany(
    {apellido:{$eq:"González"}}
);

db.registros.deleteMany(
    {edad:{$gt:70}}
)

db.registros.deleteMany(
    {$and:
    [
        {ciudad:{$eq:"Canada"}},
        {salario:{$lt:4000}}

    ]}
   
)


db.registros.deleteMany(
    {$and:
    [
        {salario:{$gt:1000}},
        {salario:{$lt:2000}}

    ]}
   
)

db.registros.deleteMany(
    {edad:{$eq:30}}
)
db.registros.deleteMany(
    {altura:{$gt:190}}
)

//actualizar
//$inc El $inc El operador incrementa un campo en un valor especificado.
//ej1
//Incrementar el salario de todos los usuarios en un 10%.

db.registros.updateMany(
    {}, // No hay condición, por lo que se aplicará a todos los documentos
    {$mul: {salario: 1.1}} 
)


//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.registros.updateMany(
    {ciudad:{$eq:"New York"}},
    {$set:{ciudad:"Los Angeles"}}
)

//ej2
db.registros.updateMany(
    {$and:
    [
    {nombre:{$eq:"Alice"}},
    {apellido:{$eq:"Smith"}},
    {$set:{correo:"nuevo@riwi.com"}}
    ]
    
    }
   
)

//ej3

db.registros.updateMany(
    {nombre: "Juan", apellido: "Perez"},
    {$set: {correo: "nuevo@riwi.com"}}
)
//otra forma
db.registros.updateMany(
    {$and: [
        {nombre: "Alice"},
        {apellido: "Smith"}
    ]},
    {$set: {correo: "otro@riwi.net"}}
)


//ej4
db.registros.updateMany(
    
        {correo:{$eq:"ejemplo@riwi"}},
        {$set:{edad:35}}

)

//ej5
db.registros.updateMany(
    {país:{$gt:"Mexico"}}
)

//ej6
db.registros.updateMany(
    {}, // No hay condición, por lo que se aplicará a todos los documentos
    {$inc: {altura: 5}} // Incrementa el valor de "altura" en 5
)
//

//ej7
db.registros.updateMany(
    
        {correo:{$eq:"otro@riwi.net"}},
        {$set:{apellido:"Gonzales"}}
    
)
//ej8
db.registros.updateMany(
    {nombre:{$eq:"Alice"}},
    {$inc:{peso:140}}
)

//ej9
db.registros.updateMany(
    {país: "Estados Unidos"},
    {$mul: {salario: 1.15}}
)


//ej10
db.registros.updateMany(
    {nombre:{$eq:"Alice"}},
    {$set:{correo:"nuevo_correo@riwi.co"}}

)

//ej11
db.registros.updateMany(
    {edad:{$lt:30}},
    {$set:{edad:30}}
)

//ej12
db.registros.updateMany(
    {salario:{$lt:65000}},
    {$mul:{salario:1.20}}
)

//ej13
db.registros.updateMany(
    {ciudad:{$eq:"Bogota"}},
    {$set:{ciudad:"Medellin"}}
)

//ej14
db.registros.updateMany(
    {salario:{$gt:90000}},
    {$set:{país:"Australia"}}
)

//ej15
db.registros.updateMany(
    { edad: { $gt: 38 } }, // Filtro para seleccionar usuarios con edad mayor a 50
    { $inc: { edad: -5 } } // Resta 5 años a la edad
)

//ej16
db.registros.updateMany(
    { peso: {$gt:200}},
    {$set:{peso:180}}
)

//ej17
db.registros.updateMany(
    {ciudad:{$eq:"Londres"}},
    {$mul:{salario:1.25}}

)

//ej18
db.registros.updateMany(
    {salario:{$gt:90000}},
    {$set:{apellido:"Smith"}}
)

//ej19
db.registros.updateMany(
    {nombre:{$regex:"^A"}},
    {$set:{correo:"nuevo@riwi.es"}}

)
//otra forma
db.registros.updateMany(
    { nombre: { $regex: /^A/ } }, // Filtro para seleccionar usuarios cuyo nombre empieza con "A"
    { $set: { correo: "nuevo@riwi.es" } } // Establece el correo electrónico como "nuevo@riwi.es"
)

//ej20
db.registros.updateMany(
    {altura:{$lt:183}},
    {$set:{ciudad:"Paris"}}
)



