// Generado por gen.py desde el Excel. Para cambiar datos: edita el Excel y vuelve a ejecutar gen.py.
const DATA = {
 "config": {
  "nombre": "Agencia - El Rodal",
  "caso": "El Crimen del Turrón de Nochebuena",
  "url": "https://Hecto5646.github.io/MBRODAL",
  "firebase": "https://mbrodal-default-rtdb.europe-west1.firebasedatabase.app",
  "minutos": 45,
  "segTimbre": 5,
  "segAnuncio": 5,
  "volMusica": 0.25,
  "consigna": "FIJO",
  "anios": 50,
  "musica": "assets/audio/musica_navidad.mp3",
  "timbre": "assets/audio/timbre.mp3"
 },
 "agentes": [
  {
   "id": "VAN",
   "nombre": "Vanesa",
   "rango": "Inspectora Jefa",
   "capsula": 7,
   "h": "6e49dc263c5aa1daf41f3f17cefd353bdd955d608a638f3e7363bfa180c44957"
  },
  {
   "id": "CAT",
   "nombre": "Cati",
   "rango": "Comisaria Honoraria (Oro 50 años)",
   "capsula": 3,
   "h": "7a59cb01c037fa7ab0328d564b9673602791ad2a4382412b0ab36936940a88d8"
  },
  {
   "id": "VEG",
   "nombre": "Vega",
   "rango": "Agente Copo de Nieve",
   "capsula": 1,
   "h": "40ab6c6c0569b9f3435c615d0facff52910bbc3d944fe8e855b4f97c872ecc13"
  },
  {
   "id": "PAC",
   "nombre": "Paco",
   "rango": "Comisario Honorario (Oro 50 años)",
   "capsula": 8,
   "h": "7cc5f1cf7fbcc6e8213e77322b84a9d87a5e62b726f9afabdee6aa47638eb85f"
  },
  {
   "id": "MAR",
   "nombre": "Martín",
   "rango": "Agente Estrella",
   "capsula": 2,
   "h": "f180a694bc60d44f41087f14a59f212ce5701f8d1b6e05a01c3ff8e5443f7a5f"
  },
  {
   "id": "JMI",
   "nombre": "Jmi",
   "rango": "Detective Gramática",
   "capsula": 6,
   "h": "b50ad9435ed35d56a7787ada79420715cadf22f3693e943509df941ade167957"
  },
  {
   "id": "SUS",
   "nombre": "Susana",
   "rango": "Detective Olfato",
   "capsula": 4,
   "h": "9ba715e823e495513fafa7bdab4779f912903a06c29310acca0d2703fe2dae27"
  },
  {
   "id": "RUB",
   "nombre": "Rubén",
   "rango": "Sargento Calculadora",
   "capsula": 9,
   "h": "2af41e77798a8d688c83e951868ab1e5f64cf01407e7811c415c38e37a6da887"
  }
 ],
 "salas": [
  {
   "n": 1,
   "nombre": "Comedor",
   "cat": "ARMA",
   "msg": "¡Arma identificada! Apunta tu código en la libreta y corre a: COCINA. (Sin correr, ¿eh?)"
  },
  {
   "n": 2,
   "nombre": "Cocina",
   "cat": "LUGAR",
   "msg": "¡Lugar confirmado! Apunta tu código y avanza a: BAÑO."
  },
  {
   "n": 3,
   "nombre": "Baño",
   "cat": "HORA",
   "msg": "¡Hora fijada! Apunta tu código y sube al piso de arriba: SALITA (PISO DE ARRIBA). Agárrate a la barandilla."
  },
  {
   "n": 4,
   "nombre": "Salita (piso de arriba)",
   "cat": "PERSONA",
   "msg": "¡Culpable identificado! Ya tienes tus 4 códigos (16 dígitos). Baja al salón, abre la pantalla de ACUSACIÓN e introdúcelos."
  }
 ],
 "acertijos": {
  "VAN-1": {
   "tipo": "Cifrado César",
   "enun": "Cada letra está DOS pasos adelante en el abecedario. Descifra DCUVQP (retrocede dos letras): es la primera palabra del arma.",
   "pista": "Retrocede dos letras: D→C→B.",
   "opc": [
    {
     "t": "Espumillón",
     "c": 5112
    },
    {
     "t": "Bola del árbol",
     "c": 7587
    },
    {
     "t": "Rodillo de cocina",
     "c": 6040
    },
    {
     "t": "Candelabro dorado",
     "c": 9980
    },
    {
     "t": "Bastón de caramelo",
     "c": 9223
    }
   ],
   "ok": "367f827b916e129940680873266d00f7b2d8f964adfc72c7da73437bd7e5e3c8"
  },
  "VAN-2": {
   "tipo": "Ecuación sencilla",
   "enun": "Mira L-VAN en tu fundita. El crimen ocurrió en el lugar nº x, donde 2x + 3 = 11. ¿Dónde fue?",
   "pista": "Resta 3 a los dos lados y divide entre 2.",
   "opc": [
    {
     "t": "La chimenea",
     "c": 8846
    },
    {
     "t": "El belén",
     "c": 7585
    },
    {
     "t": "Bajo el árbol",
     "c": 8095
    },
    {
     "t": "El balcón",
     "c": 4318
    },
    {
     "t": "La despensa",
     "c": 5823
    }
   ],
   "ok": "516af0f990965ed1c6a0454a7d3fc807ad8998b83bcb7a1b90d7cd73ba0363e7"
  },
  "VAN-3": {
   "tipo": "Cifrado César",
   "enun": "Cada letra está UN paso adelante en el abecedario. Descifra EJFA Z NFEJB (retrocede una letra). Es la hora del crimen, de noche.",
   "pista": "Cambia cada letra por la anterior: B→A, C→B…",
   "opc": [
    {
     "t": "22:30",
     "c": 5407
    },
    {
     "t": "23:15",
     "c": 1151
    },
    {
     "t": "20:45",
     "c": 1542
    },
    {
     "t": "21:15",
     "c": 3455
    },
    {
     "t": "23:45",
     "c": 8507
    }
   ],
   "ok": "0b95d44ebd5b8e6a7d4c7ca369576c30700f1f7a9192216beed7487636e09b45"
  },
  "VAN-4": {
   "tipo": "Cifrado César",
   "enun": "Cada letra está TRES pasos adelante en el abecedario. Descifra MHQJLEUH (retrocede tres letras): es el nombre del que sirve la mesa.",
   "pista": "Retrocede tres: M→L→K→J.",
   "opc": [
    {
     "t": "Barón Turrón",
     "c": 9567
    },
    {
     "t": "Condesa Peladilla",
     "c": 9020
    },
    {
     "t": "Duende Cascanueces",
     "c": 6897
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 4274
    },
    {
     "t": "Madame Mazapán",
     "c": 5261
    }
   ],
   "ok": "299df97d003e3281b51b667b130821e88aed7ba27e60fce3ae7462d42eca9e9a"
  },
  "CAT-1": {
   "tipo": "Adivinanza",
   "enun": "Soy dulce, llevo rayas rojas y blancas, tengo forma de gancho y me cuelgan del árbol de Navidad. ¿Qué soy?",
   "pista": "Se chupa y sabe a menta.",
   "opc": [
    {
     "t": "Espumillón",
     "c": 8955
    },
    {
     "t": "Bola del árbol",
     "c": 8645
    },
    {
     "t": "Rodillo de cocina",
     "c": 9376
    },
    {
     "t": "Candelabro dorado",
     "c": 9145
    },
    {
     "t": "Bastón de caramelo",
     "c": 8114
    }
   ],
   "ok": "e2ff23ee27d226b926cffdd099b2366eef47fb3826f8621d0c9017941ea7e544"
  },
  "CAT-2": {
   "tipo": "Adivinanza",
   "enun": "Por aquí baja Papá Noel con el saco de los regalos. ¿Dónde fue el crimen?",
   "pista": "Sale humo por el tejado.",
   "opc": [
    {
     "t": "Bajo el árbol",
     "c": 1550
    },
    {
     "t": "La despensa",
     "c": 5752
    },
    {
     "t": "El belén",
     "c": 6188
    },
    {
     "t": "El balcón",
     "c": 8498
    },
    {
     "t": "La chimenea",
     "c": 2611
    }
   ],
   "ok": "a3832ebd6f712a14a7bb4aeb673d1c034d7b3e7d375696e3b2672ae77523cde6"
  },
  "CAT-3": {
   "tipo": "Adivinanza",
   "enun": "Falta una hora i media para las campanadas, ¿Que hora es?",
   "pista": "Diez y media de la noche.",
   "opc": [
    {
     "t": "23:15",
     "c": 8183
    },
    {
     "t": "21:15",
     "c": 9440
    },
    {
     "t": "20:45",
     "c": 5240
    },
    {
     "t": "23:45",
     "c": 8420
    },
    {
     "t": "22:30",
     "c": 3999
    }
   ],
   "ok": "eac50d3ec89cc259b7e727af9c783be85a75c9ae8ee31d999440e9d9bc379662"
  },
  "CAT-4": {
   "tipo": "Adivinanza",
   "enun": "En el burro de tu habitacion encontraras la respuesta.",
   "pista": "Lleva bandeja y chaleco.",
   "opc": [
    {
     "t": "Duende Cascanueces",
     "c": 7975
    },
    {
     "t": "Barón Turrón",
     "c": 8850
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 2053
    },
    {
     "t": "Madame Mazapán",
     "c": 5365
    },
    {
     "t": "Condesa Peladilla",
     "c": 9166
    }
   ],
   "ok": "18a62f1a8c78ad555a6b5c1561e29e9dc899166427d09f84c1cc0cc430003bcb"
  },
  "VEG-1": {
   "tipo": "Cifrado",
   "enun": "Cada número es una letra (A=1, B=2, C=3…). Descifra 2-1-19-20-15-14: es la primera palabra del arma.",
   "pista": "Es una palabra de seis letras que empieza por B.",
   "opc": [
    {
     "t": "Espumillón",
     "c": 7064
    },
    {
     "t": "Bola del árbol",
     "c": 2583
    },
    {
     "t": "Bastón de caramelo",
     "c": 4188
    },
    {
     "t": "Rodillo de cocina",
     "c": 7738
    },
    {
     "t": "Candelabro dorado",
     "c": 3397
    }
   ],
   "ok": "5e89ab7d38f64334df4d12f123b86d3844cac19222d11a588bdc0470644e85e2"
  },
  "VEG-2": {
   "tipo": "Código Morse",
   "enun": "Descifra el mensaje en Morse: -.-. .... .. -- . -. . .-   Es el lugar del crimen (lleva 'La' delante).",
   "pista": "Cada grupo de puntos y rayas separado por un espacio es una letra. El primero, -.-., es la C.",
   "opc": [
    {
     "t": "El balcón",
     "c": 8362
    },
    {
     "t": "Bajo el árbol",
     "c": 1229
    },
    {
     "t": "La despensa",
     "c": 2510
    },
    {
     "t": "El belén",
     "c": 1003
    },
    {
     "t": "La chimenea",
     "c": 8392
    }
   ],
   "ok": "9636307bd70b6ca37c88c2ad57c369c49cf4de312c2a5f3f01f24985a4615e8a"
  },
  "VEG-3": {
   "tipo": "Lectura de reloj",
   "enun": "Mira tu funda: la aguja pequeña está entre el 10 y el 11 y la grande en el 6. Era de noche. ¿Qué hora marca?",
   "pista": "Cuando la aguja grande está en el 6 son 'y media'.",
   "opc": [
    {
     "t": "23:15",
     "c": 9955
    },
    {
     "t": "21:15",
     "c": 2360
    },
    {
     "t": "22:30",
     "c": 4257
    },
    {
     "t": "23:45",
     "c": 5060
    },
    {
     "t": "20:45",
     "c": 2979
    }
   ],
   "ok": "281cffac7e2b22db6c33aa547a53eefdd4c0350303775c1767e28989c716c1d2"
  },
  "VEG-4": {
   "tipo": "Binario",
   "enun": "Que soy: 01101010 01100101 01101110 01100111 01101001 01100010 01110010 01100101",
   "pista": "Empieza por JEN.",
   "opc": [
    {
     "t": "Barón Turrón",
     "c": 1731
    },
    {
     "t": "Madame Mazapán",
     "c": 9953
    },
    {
     "t": "Duende Cascanueces",
     "c": 5399
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 6853
    },
    {
     "t": "Condesa Peladilla",
     "c": 3535
    }
   ],
   "ok": "31f709d71df61ba00679c7ee893c8e459f48739e12185ac3cfacdd3f50ea4e05"
  },
  "PAC-1": {
   "tipo": "Adivinanza",
   "enun": "Es de caramelo, tiene rayas rojas y blancas y se dobla por arriba como el mango de un paraguas. ¿Qué es?",
   "pista": "Se cuelga del árbol y sabe a menta.",
   "opc": [
    {
     "t": "Espumillón",
     "c": 1084
    },
    {
     "t": "Bastón de caramelo",
     "c": 6135
    },
    {
     "t": "Bola del árbol",
     "c": 9060
    },
    {
     "t": "Candelabro dorado",
     "c": 3209
    },
    {
     "t": "Rodillo de cocina",
     "c": 9942
    }
   ],
   "ok": "f5cbcfb155b0b8fca634aba26543853ca07d190886ece96c580709ed62838db2"
  },
  "PAC-2": {
   "tipo": "Adivinanza",
   "enun": "Mira en el baño de arriba, ¿que ves en la mampara de la ducha?",
   "pista": "Está en el salón y se enciende en invierno.",
   "opc": [
    {
     "t": "El balcón",
     "c": 4652
    },
    {
     "t": "La chimenea",
     "c": 8749
    },
    {
     "t": "El belén",
     "c": 3149
    },
    {
     "t": "Bajo el árbol",
     "c": 9269
    },
    {
     "t": "La despensa",
     "c": 5762
    }
   ],
   "ok": "be6cff8f76f103962b70c85369b7839152eb72cf11642d3d02cd154117adc363"
  },
  "PAC-3": {
   "tipo": "Adivinanza",
   "enun": "Si una película dura 1 hora y 45 minutos y empieza a las 20:45, ¿a qué hora termina?",
   "pista": "Diez cucús de la noche y media.",
   "opc": [
    {
     "t": "20:45",
     "c": 2383
    },
    {
     "t": "23:15",
     "c": 7844
    },
    {
     "t": "21:15",
     "c": 3623
    },
    {
     "t": "23:45",
     "c": 3217
    },
    {
     "t": "22:30",
     "c": 6013
    }
   ],
   "ok": "1df2dab3f92c33a0f80d49fe49d641d91547742b5442482314263c5d18b09423"
  },
  "PAC-4": {
   "tipo": "Adivinanza",
   "enun": "Visto elegante, abro la puerta y sirvo la mesa con gran etiqueta. En las novelas de misterio siempre me culpan primero, aunque yo solo cuido la casa con esmero. ¿Quién soy?",
   "pista": "Es el 'mayordomo'.",
   "opc": [
    {
     "t": "Mayordomo Jengibre",
     "c": 9318
    },
    {
     "t": "Barón Turrón",
     "c": 7750
    },
    {
     "t": "Duende Cascanueces",
     "c": 7396
    },
    {
     "t": "Madame Mazapán",
     "c": 3433
    },
    {
     "t": "Condesa Peladilla",
     "c": 9520
    }
   ],
   "ok": "7c08c7e21337bf6073aa25a3516a2462b494e2c92665b7734858323b9203f5ea"
  },
  "MAR-1": {
   "tipo": "Rompecabezas con foto",
   "enun": "En la Tarjeta A-MAR encontrarás cómo abrir un rompecabezas de 6 piezas en tu móvil. Ármalo y elige qué arma aparece en la foto.",
   "pista": "Empieza por las piezas de las esquinas.",
   "opc": [
    {
     "t": "Bola del árbol",
     "c": 4222
    },
    {
     "t": "Espumillón",
     "c": 7160
    },
    {
     "t": "Rodillo de cocina",
     "c": 1231
    },
    {
     "t": "Candelabro dorado",
     "c": 2738
    },
    {
     "t": "Bastón de caramelo",
     "c": 7379
    }
   ],
   "ok": "b6d926de761a29d794e9f3c795b672af403529b24f67d6b158beecdcea728ef0"
  },
  "MAR-2": {
   "tipo": "Candado",
   "enun": "<iframe src=\"https://es.lockee.fr/o/L5DJWEA4?nobg\" height=\"500\" style=\"width:100%;\" frameborder=\"0\"></iframe>",
   "pista": "Por ahí baja Papá Noel.",
   "opc": [
    {
     "t": "Bajo el árbol",
     "c": 2203
    },
    {
     "t": "La despensa",
     "c": 1841
    },
    {
     "t": "El belén",
     "c": 6685
    },
    {
     "t": "La chimenea",
     "c": 6790
    },
    {
     "t": "El balcón",
     "c": 1422
    }
   ],
   "ok": "edd1734fd2fcaddd141e1c60806dbe812bc66e106b931201db8f20f3d922d62f"
  },
  "MAR-3": {
   "tipo": "Operación fácil",
   "enun": "Horas = dedos de las dos manos + meses del año. Minutos = la mitad de una hora. ¿Qué hora es?",
   "pista": "Cuenta los dedos y los meses.",
   "opc": [
    {
     "t": "23:15",
     "c": 1419
    },
    {
     "t": "21:15",
     "c": 9362
    },
    {
     "t": "23:45",
     "c": 8799
    },
    {
     "t": "20:45",
     "c": 6370
    },
    {
     "t": "22:30",
     "c": 5975
    }
   ],
   "ok": "0407de863a6a5846a89e14a870ad9c5c28f1a45216e88b1f081f8a85f4c2deee"
  },
  "MAR-4": {
   "tipo": "Adivinanza",
   "enun": "Soy el ingrediente principal de muchas galletas de navidad, ¿qué soy?",
   "pista": "Es una especia picante.",
   "opc": [
    {
     "t": "Duende Cascanueces",
     "c": 8375
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 6341
    },
    {
     "t": "Condesa Peladilla",
     "c": 2988
    },
    {
     "t": "Madame Mazapán",
     "c": 9152
    },
    {
     "t": "Barón Turrón",
     "c": 8644
    }
   ],
   "ok": "5b565c072c6cc878320fefe294a8bf6d1f9520d9681f2ae5b299771683c38bfb"
  },
  "JMI-1": {
   "tipo": "Candado",
   "enun": "<iframe src=\"https://es.lockee.fr/o/K6ZiWa5q?nobg\" height=\"500\" style=\"width:100%;\" frameborder=\"0\"></iframe>",
   "pista": "Una palabra para caminar y otra muy dulce.",
   "opc": [
    {
     "t": "Bola del árbol",
     "c": 3797
    },
    {
     "t": "Candelabro dorado",
     "c": 3521
    },
    {
     "t": "Rodillo de cocina",
     "c": 9513
    },
    {
     "t": "Bastón de caramelo",
     "c": 4391
    },
    {
     "t": "Espumillón",
     "c": 8104
    }
   ],
   "ok": "0f304932ea9d89fbf7388a818525a695df5e20d3fa8ffefe4d10c331252f905f"
  },
  "JMI-2": {
   "tipo": "Acróstico",
   "enun": "Junta las primeras letras: Cocinero · Hielo · Isla · Mapa · Estrella · Nieve · Elefante · Abrigo. ¿Qué palabra sale?",
   "pista": "Lee solo la primera letra de cada palabra.",
   "opc": [
    {
     "t": "La chimenea",
     "c": 6511
    },
    {
     "t": "La despensa",
     "c": 8517
    },
    {
     "t": "Bajo el árbol",
     "c": 4822
    },
    {
     "t": "El balcón",
     "c": 2138
    },
    {
     "t": "El belén",
     "c": 9967
    }
   ],
   "ok": "6b47e9a0d22deb4505427bbcd370d629aa5c050c5a7feed5656dd48807064493"
  },
  "JMI-3": {
   "tipo": "Texto en espejo",
   "enun": "Coloca un espejo (el del baño o uno de bolsillo) frente a la Tarjeta H-JMI y lee el mensaje. Escribe la hora que dice.",
   "pista": "Ponte frente al espejo con la tarjeta delante de ti.",
   "opc": [
    {
     "t": "21:15",
     "c": 7539
    },
    {
     "t": "23:45",
     "c": 1559
    },
    {
     "t": "22:30",
     "c": 4202
    },
    {
     "t": "23:15",
     "c": 3840
    },
    {
     "t": "20:45",
     "c": 1741
    }
   ],
   "ok": "2b43e7c3467a77a1e360c131871d0cf17d8e9d73e094a3756a339284cadfe962"
  },
  "JMI-4": {
   "tipo": "Juego de palabras",
   "enun": "Completa: 'Hombre de ________' (el muñeco de galleta de las películas navideñas). ¿Qué sospechoso se llama así?",
   "pista": "Es una especia picante.",
   "opc": [
    {
     "t": "Madame Mazapán",
     "c": 9925
    },
    {
     "t": "Duende Cascanueces",
     "c": 1789
    },
    {
     "t": "Barón Turrón",
     "c": 8402
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 4088
    },
    {
     "t": "Condesa Peladilla",
     "c": 8927
    }
   ],
   "ok": "d989dfa3bd3a7ea8dc1ed6483d7a3b6017b771f0b4501a8b3fd384a54624dc42"
  },
  "SUS-1": {
   "tipo": "Sopa de letras",
   "enun": "En la sopa de letras de la Tarjeta A-SUS hay 5 palabras. Solo UNA se puede chupar: esa palabra es el apellido del arma. ¿Qué arma es?",
   "pista": "Las palabras están en horizontal, una al revés.",
   "opc": [
    {
     "t": "Bola del árbol",
     "c": 1335
    },
    {
     "t": "Bastón de caramelo",
     "c": 3115
    },
    {
     "t": "Candelabro dorado",
     "c": 9682
    },
    {
     "t": "Rodillo de cocina",
     "c": 4583
    },
    {
     "t": "Espumillón",
     "c": 9468
    }
   ],
   "ok": "7b6fe84580e7ac16f320ae053823f76d59bce7d87d086a648b1d9f91f7e0c784"
  },
  "SUS-2": {
   "tipo": "Adivinanza",
   "enun": "Tengo la boca llena de ceniza, el estómago lleno de fuego y la cabeza sale por el tejado. ¿Qué soy?",
   "pista": "En invierno la encendemos para calentarnos.",
   "opc": [
    {
     "t": "Bajo el árbol",
     "c": 3256
    },
    {
     "t": "La chimenea",
     "c": 3627
    },
    {
     "t": "El balcón",
     "c": 4047
    },
    {
     "t": "La despensa",
     "c": 7389
    },
    {
     "t": "El belén",
     "c": 5469
    }
   ],
   "ok": "6e276dfe2cc86971a5b0290c0f0ed9c4ec672bb6ba16b68124ea7a1cd0bfe0bc"
  },
  "SUS-3": {
   "tipo": "Números romanos",
   "enun": "Pasa a números normales: XXII : XXX. Esa es la hora del crimen. Ayúdate de la Tarjeta H-SUS.",
   "pista": "X vale diez, I vale uno.",
   "opc": [
    {
     "t": "22:30",
     "c": 7969
    },
    {
     "t": "20:45",
     "c": 9732
    },
    {
     "t": "21:15",
     "c": 7784
    },
    {
     "t": "23:15",
     "c": 2288
    },
    {
     "t": "23:45",
     "c": 7278
    }
   ],
   "ok": "e70f58f0de03d575e8b67d4435a3181ae58e8205d5410ea6416932bad951cdf5"
  },
  "SUS-4": {
   "tipo": "Sudoku 4×4",
   "enun": "Completa el sudoku 4×4 de la Tarjeta P-SUS (en cada fila, columna y bloque de 2×2 van los números 1 a 4). El número de la casilla con la estrella es el nº del culpable en la lista de sospechosos.",
   "pista": "Empieza por la fila o columna que tenga más números.",
   "opc": [
    {
     "t": "Condesa Peladilla",
     "c": 5995
    },
    {
     "t": "Duende Cascanueces",
     "c": 4067
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 6637
    },
    {
     "t": "Madame Mazapán",
     "c": 3862
    },
    {
     "t": "Barón Turrón",
     "c": 5316
    }
   ],
   "ok": "987dcf89ad1e8cfc6d2a83f7d08bf8930ce0155ad37f801fb122107633ab61b2"
  },
  "RUB-1": {
   "tipo": "Candado",
   "enun": "<iframe src=\"https://es.lockee.fr/o/NnRo6DwL?nobg\" height=\"500\" style=\"width:100%;\" frameborder=\"0\"></iframe>",
   "pista": "Avanza una letra: la Z vuelve a la A.",
   "opc": [
    {
     "t": "Bastón de caramelo",
     "c": 8600
    },
    {
     "t": "Candelabro dorado",
     "c": 7811
    },
    {
     "t": "Espumillón",
     "c": 5713
    },
    {
     "t": "Rodillo de cocina",
     "c": 8662
    },
    {
     "t": "Bola del árbol",
     "c": 3899
    }
   ],
   "ok": "0fa198e2d1b928f4b454e41fe871313e86f4fc03cf5f924e388d7aa2d9e35cef"
  },
  "RUB-2": {
   "tipo": "Palabra al revés",
   "enun": "Lee al revés: AENEMIHC. Es el lugar del crimen (lleva 'La' delante).",
   "pista": "Empieza a leer por la última letra.",
   "opc": [
    {
     "t": "Bajo el árbol",
     "c": 6337
    },
    {
     "t": "La chimenea",
     "c": 9508
    },
    {
     "t": "La despensa",
     "c": 8897
    },
    {
     "t": "El belén",
     "c": 8284
    },
    {
     "t": "El balcón",
     "c": 2967
    }
   ],
   "ok": "bcd9bc1d95d25c5fccf0f6455db70f0c7de02ae971ee6793cbed0579ee520eb5"
  },
  "RUB-3": {
   "tipo": "Ecuación sencilla",
   "enun": "La hora del crimen fue x horas y 30 minutos, donde 3x − 6 = 60. ¿Qué hora fue?",
   "pista": "Suma 6 a los dos lados y divide entre 3.",
   "opc": [
    {
     "t": "23:15",
     "c": 9638
    },
    {
     "t": "23:45",
     "c": 9596
    },
    {
     "t": "22:30",
     "c": 5486
    },
    {
     "t": "20:45",
     "c": 2549
    },
    {
     "t": "21:15",
     "c": 4511
    }
   ],
   "ok": "07cba3ea6df2ad88af1c473fce279e6280ec2e20700fc56003103d893e8c22a0"
  },
  "RUB-4": {
   "tipo": "Cifrado César",
   "enun": "Cada letra está CUATRO pasos adelante en el abecedario. Descifra NIRKMFVI (retrocede cuatro letras): es el nombre del que sirve la mesa.",
   "pista": "Retrocede cuatro: N→M→L→K→J.",
   "opc": [
    {
     "t": "Barón Turrón",
     "c": 4790
    },
    {
     "t": "Mayordomo Jengibre",
     "c": 1080
    },
    {
     "t": "Madame Mazapán",
     "c": 2525
    },
    {
     "t": "Duende Cascanueces",
     "c": 8440
    },
    {
     "t": "Condesa Peladilla",
     "c": 6413
    }
   ],
   "ok": "e880b5060594dfc3dca3ddf3e85b8aa84241fb55aa2edcaae982a42731b5dfdd"
  }
 },
 "final": {
  "VAN": "1a5ce74d142658d98c411837fba902ac37463813408a37ae73413202b3df9d71",
  "CAT": "3869c3665a7fd17ddadf734bd55f967cc5b8cf37d1535e493ec6856620de43c2",
  "VEG": "19dbc03db640d43928879ca06f2d497ca738a1879ce7e9aeab5355e0005b7f58",
  "PAC": "3fd6f259de219f730fdbb82a505689c723e6276fd288834112b9af048f5fd855",
  "MAR": "9352011f310bc8831d5b4697e64294fa4547288308681e88d38f3805def17564",
  "JMI": "34c6465df089d20fcb2ff6db6b4226588124dff06506b7ab8303c79509aeff81",
  "SUS": "9c58f11a4cdf4dff14db4a7839237d3561462659bb8b4c905894bd7effc2ccfc",
  "RUB": "c0b9e9b9325a9ae0667402dfaf6977410e82691b0edade7a4c87cb6cf46374c5"
 },
 "historia": "Esta Nochebuena, justo cuando se servía la cena, Don Polvorón Almendra, el mejor confitero del Polo Norte, ha aparecido sin vida en casa de los abuelos. Hay cinco sospechosos y la policía de Papá Noel no llegará hasta dentro de 45 minutos. El caso es vuestro: descubrid el ARMA, el LUGAR, la HORA y al CULPABLE. El primero en acusar será proclamado Mejor Detective de la Agencia – El Rodal.",
 "desenlace": "El Mayordomo Jengibre confiesa: 'Lo hice por celos… ¡nadie me invitó a la boda de oro de Cati y Paco!' Caso cerrado. Y hoy celebramos 50 años de casados: ¡felicidades, Cati y Paco!",
 "sospechosos": [
  {
   "n": "Madame Mazapán",
   "q": "Socia de Don Polvorón",
   "d": "Pelirroja, falda larga, siempre con un rodillo"
  },
  {
   "n": "Barón Turrón",
   "q": "Eterno rival",
   "d": "Bigote enorme, bastón de paseo"
  },
  {
   "n": "Condesa Peladilla",
   "q": "Millonaria excéntrica",
   "d": "Vestido rojo, guantes blancos, perfume de rosas"
  },
  {
   "n": "Mayordomo Jengibre",
   "q": "Sirve la cena",
   "d": "Chaleco con 8 botones, bandeja, olor a especias"
  },
  {
   "n": "Duende Cascanueces",
   "q": "Ayudante del taller",
   "d": "Bajito, gorro verde, sandalias"
  }
 ]
};
