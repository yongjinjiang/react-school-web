import React from 'react'
import SchoolCard from './SchoolCard'
import './style/School.css'

const logoBar = require('../images/barLogo.png');

const Info = [
    {
        title:    "DPTO ORIENTACION EJECUTIVA",
        background: "https://salecology.com/public/images/m5u3A/4-tips-for-identifying-and-developing-high-performing-employees.png"
    },
    {
        title:    "DPTO PASTORAL",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6-4lbJPyFZlfmR_hN4rL3NFyEI7YS1-zrii83zWT2Xeo0ZSi"

    },
    {
        title:    "DPTO ORIENTACION EDUCATIVA",
        background: "data:image/jpeg;base64,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"

    },
    {
        title:    "SERVICIO Y BIENESTAR INSTITUCIONAL",
        background: "https://i0.wp.com/www.success.com/wp-content/uploads/2019/02/3-Keys-to-Developing-Daily-Disciplines.jpg?fit=1100%2C733&ssl=1"

    },
    {
        title:    "CONSEJO DIRECTIVO",
        background: "https://www.lausanneschool.com/assets/2532/graduation-hats-in-the-air.jpg"

    },
    {
        title:     "ADMINISTRACION",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsUXgTpqnnOptIi-ygZuPGHNLZOqmLx0q47zeyocpYu0rhN91QA"

    },
    {
        title:     "EQUIPO DIRECTIVO",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvBe7gRR_IsU8ioIoXUVd3W8bKCz75KLdKNQsXJPtS9G7oPS6"

    },
    {
        title:     "CENTRO DE ESTUDIANTES",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEIrFg_0KDcepPMRH2sXts42fin0wlWMgRtgjcr0SOcH9d3Sg   "

    }
];


const School = () =>{
    return(
        <div>
            <div className="borderColor"></div>
            <div className="container">
                <div className="col-md-12 history-title">
                        <span>Nuestra</span>
                        <h1>Escuela</h1>
                    </div> 
                    <div className="col-md-12 text-center mb-4">
                        <img src={logoBar}/>
                    </div>
                <div className="row" id="cards">
                    {
                        Info.map(element => ( 
                            <SchoolCard 
                                key={Math.random()} 
                                title={element.title} 
                                background={element.background}
                            />
                    ))
                    }
                </div>
            </div>
        </div>

    );
}

export default School;