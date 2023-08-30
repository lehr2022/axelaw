
import img1 from '../images/plan1.PNG';
import img2 from '../images/plan2.PNG'; 
import img3 from '../images/plan3.PNG'; 
import img4 from '../images/plan4.PNG'; 

const data = {
    productData:[
        {id: 1,
            img: img1,
            title: 'BASICO',
            desc:['Asesoría y elaboración de conceptos jurídicos'],
            price: '$142.860',
        },
        {id: 2,
            img: img2,
            title: 'AVANZADO',
            desc:['Elaboración de conceptos', 'Asesoría y elaboración de contratos', 'Asistencia jurídica integral'],      
            price: '$500.000',
        },
        {id: 3,
            img: img3,
            title: 'ÉLITE',
            desc:['Elaboración de conceptos', 'Asesoría y elaboración de contratos', 'Asistencia jurídica integral', 'Elaboración de análisis de antecedentes marcarios','Solicitud de registro de marcas'],
            price: '$1.071.428',
        },
        {id: 4,
            img: img4,
            title: 'PRO',
            desc:['Elaboración de conceptos', 'Asesoría y elaboración de contratos', 'Asistencia jurídica integral', 'Elaboración de análisis de antecedentes marcarios', 'Solicitud de registro de marcas', 'Gastos legales y seguimiento hasta la terminación del trámite'],
            price: '$1.928.572',
        },

    ]
}

export default data;