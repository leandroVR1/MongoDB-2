db.createCollection('users');


db.users.insertOne({
   nombre: "pedro",
   apellido: "perez",
   edad: 25,
   correo: "test@example.com",
   genero: "M",
   edad: "20"
});




db.users.insertMany( [
{
   nombre: "Juan",
   apellido: "Martínez",
   edad: 35,
   correo: "juan.martinez@example.com",
   genero: "M"
},
{
   nombre: "Laura",
   apellido: "López",
   edad: 28,
   correo: "laura.lopez@example.com",
   genero: "F"
},
{
   nombre: "Carlos",
   apellido: "Rodríguez",
   edad: 40,
   correo: "carlos.rodriguez@example.com",
   genero: "M"
},
{
   nombre: "Ana",
   apellido: "Sánchez",
   edad: 22,
   correo: "ana.sanchez@example.com",
   genero: "F"
},
{
   nombre: "José",
   apellido: "Hernández",
   edad: 32,
   correo: "jose.hernandez@example.com",
   genero: "M"
},
{
   nombre: "Sofía",
   apellido: "Díaz",
   edad: 27,
   correo: "sofia.diaz@example.com",
   genero: "F"
},
{
   nombre: "Daniel",
   apellido: "García",
   edad: 29,
   correo: "daniel.garcia@example.com",
   genero: "M"
},
{
   nombre: "Lucía",
   apellido: "Martín",
   edad: 24,
   correo: "lucia.martin@example.com",
   genero: "F"
},
{
   nombre: "Javier",
   apellido: "Pérez",
   edad: 31,
   correo: "javier.perez@example.com",
   genero: "M"
}




]);


db.users.find();
//select * from users


//usuarios con edad igual a 21


db.users.find({ edad: 28 });




//lt
db.users.find({ edad: { $lt: 31 } });




//gte edad mayor igual a 20
db.users.find({ edad: { $gte: 20 } });




//in


   db.users.find({ edad: { $in: [22, 27 , 29] } });






//nin exepcion


   db.users.find({ edad: { $nin: [22, 27, 28] } });
     


//exists


db.users.find({ nombre: { $exists: true } });


//regex usuario que empiece con robbin


db.users.find({ nombre: { $regex: "^Javier" } });


//regex usuario que termina con robbin


db.users.find({ nombre: { $regex: "robbin$" } });


//regex usuario que empiece con robbin y termina con robbin


db.users.find({ nombre: { $regex: "^robbin$" } });


//and
db.users.find(
   {$and:
       [
   {edad: {$gte: 20}},//mayo que
   {edad: {$lt: 29}}//menor que
       ]
  
   });


// Or usuarios que su nombre empieze con javier o luis


db.users.find(
   {$or:
       [
   {nombre: { $regex: "^Javier" }},
   {nombre: { $regex: "^Daniel" }}
       ]
  
   });


// usuarios que empiecen con Javier o terminen en Martín






   db.users.find({
       $or: [
           { nombre: { $regex: "^Javier" } },   // Comienza con "Javier"
           { apellido: { $regex: "Martín$" } }    // Termina con "Martín"
       ]
   })


//usuario que su nombre empiece en javier o terminen en ín


db.users.find({
   $or: [
       { nombre: { $regex: "^Javier" } },   // Comienza con "Javier"
       { apellido: { $regex: "ín$" } }    // Termina con "ín"
   ]
})





db.registros.find();
//ej1
db.registros.find({ edad: {$gte:18}});


db.registros.insertOne({
   nombre: "Thomas",
   apellido: "Smith",
   correo: "john.doe@example.com",
   ciudad: "Nueva York",
   país: "Australia",
   salario: 20000,
   edad: 21,
   altura: 180,
   peso: 180
});
//usuarios que su ciudad sea londres o paris
//ej2
db.registros.find(
  {$or:
      [
  {ciudad: { $regex: "^Paris"}},
  {ciudad:{ $regex: "^Londres"}}




      ]
  });
 //ej3
  db.registros.find(
      {$and:
          [
          {salario: { $gte:2000}},
          {edad:{ $gte:30}}
          ]
      }
  )
//ej4
db.registros.find(
  {$and:
      [
          {país: { $regex:"^España"}},
          {salario: {$gte:3000}}
      ]




  }
)




//ej5 usuarios que tengan una edad entre 25 y 35 años
db.registros.find(
  {$and:
      [
          {edad:{$gte:30}},
          {edad:{$lt:35}}
      ]
  }
)




//ej6
//todos menos españa


db.registros.find(
       {país: { $ne:"España"}}
 )




//ej7




//usando "and " y "or"
db.registros.find({
  $or: [
    {
      $and: [
        { ciudad: { $regex: /^Londres/i } }, // Comienza con "Londres" (case-insensitive)
        { salario: { $gt: 70000 } } // Salario mayor a 10
      ]
    },
    { edad: { $gt: 36 } } // Edad mayor a 36 años
  ]
})


//ej8
db.registros.find({
   $and:
   [
       {país:{$eq:"Australia"}},
       {peso:{$gt:140}}


   ]
})
// todos menos londres y paris
//ej9
db.registros.find(
   {ciudad:{$nin:["Londres","París","Paris"]}}
)
//ej10
db.registros.find(
   {$or:
   [
         {salario:{$lt:2000}},
         {edad:{$gt:35}}
   ]
   }
 )


//ej11
db.registros.find(
   {$or:[
       {$and:[
           {país:{$eq:"Canada"}},
           {salario:{$gt:4000}}
       ]},
       {altura:{$gt:185}}


   ]}
)








//ej12
db.registros.find(
   {
       pais: "Italia", // Filtro para seleccionar usuarios de Italia
       edad: { $gte: 20, $lte: 30 } // Filtro para seleccionar usuarios con edades entre 20 y 30 años
   }
)


//ej13
db.registros.find(
  
       {correo:{$exists:false}}
  
)


//ej14
db.registros.find(
   {
       pais: "Francia",
       salario:{$gte:3000, $lte:5000}


      
   }


)

//ej15
db.registros.find(
   {
       paìs:"Brasil",
       $or:[
           {peso:{$lt:120}},
           {peso:{$gt:140}}
       ]

   }
)

//ej16
db.usuarios.find({
   $or: [
       { país: "Argentina", edad: { $lt: 25 } },
       { país: "Chile", edad: { $lt: 25 } }
   ]
})



//ej17
db.usuarios.find({
   $and: [
       {
           $nor: [
               { país: "España" },
               { país: "México" }
           ]
       },
       { salario: { $lt: 3000 } }
   ]
})


//ej18
db.usuarios.find({
   país: "Alemania",
   $or: [
       { salario: { $lt: 4000 } },
       { edad: { $gt: 35 } }
   ]
})

//ej19
db.usuarios.find({
   $and: [
       { país: { $ne: "Colombia" } },
       { altura: { $lt: 170 } }
   ]
})


//ej20
db.usuarios.find({
   país: "India",
   salario: { $exists: false }
})