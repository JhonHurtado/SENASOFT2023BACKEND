import Test from '../models/testModel.js';



(async()=>{
    try {
        const role = await Test.find()
        const values = [
            {"question":"Usted cocinará algo especial para su familia. Usted haría:","consecutive":1},
            {"question":"Usted escogerá alimento en un restaurante o un café. Usted haría:","consecutive":2},
            {"question":"Aparte del precio, qué más te influenciaría para comprar un libro de ciencia ficción","consecutive":3},
            {"question":"Usted ha terminado una competencia o un examen y le gustaría tener alguna retroalimentación. Te gustaría retroalimentarte:","consecutive":4},
            {"question":"Usted tiene un problema con la rodilla. Usted preferiría que el doctor:","consecutive":5},
            {"question":"Usted está a punto de comprar una cámara digital o teléfono o móvil. ¿Aparte del precio qué más influirá en tomar tu decisión?","consecutive":6},
            {"question":"Usted no está seguro como se deletrea trascendente o tracendente ¿Ud. qué haría?","consecutive":7},
            {"question":"Me gustan páginas de Internet que tienen:","consecutive":8},
            {"question":"Usted está planeando unas vacaciones para un grupo. Usted quiere alguna observación de ellos acerca del plan. Usted qué haría:","consecutive":9},
            {"question":"Usted está usando un libro, disco compacto o página de Internet para aprender a tomar fotos con su cámara digital nueva. Usted le gustaría tener:","consecutive":10},
            {"question":"Usted quiere aprender un programa nuevo, habilidad o juego en una computadora. Usted qué hace:","consecutive":11},
            {"question":"Estás ayudando a alguien que quiere a ir al aeropuerto, al centro del pueblo o la estación del ferrocarril. Usted hace:","consecutive":12},
            {"question":"Recuerde un momento en su vida en que Ud. aprendió a hacer algo nuevo.  Trate de evitar escoger una destreza física, como andar en bicicleta. Ud.  Aprendió mejor:","consecutive":13},
            {"question":"Ud. Prefiere un maestro o conferencista que use:","consecutive":14},
            {"question":"Un grupo de turistas quiere aprender acerca de parques o reservas  naturales en su área. Usted:","consecutive":15},
            {"question":"Usted tiene que hacer un discurso para una conferencia u ocasión especial. Usted hace:","consecutive":16}]
        if(role.length>0) return;
        const response = await Promise.all([
            values.map((value)=>{
                new Test(value).save()
            })
        ])

    
    } catch (error) {
        console.log(error);
    }
    })()