import React from 'react';
import Header from '../Components/Header';
import StyledInput from './../Components/Input';
import Button from './../Components/Button';

const WelcomeScreen: React.FC = () => {
    return (
        <div>
            <Header currentStep={1} totalSteps={8} />
            <div className='text'>
                <p>Muchas gracias por tu interés en conocer <b>customerScoops</b>, que a través de Formularios Conversacionales Inteligente te ayudamos
                    a aumentar el revenue y rentabilidad
                    de tu negocio.
                </p>
                <p>
                    Queremos conocerte, ¿cuál es tu nombre?
                </p>
                <StyledInput placeholder='Nombre'/>
                <Button className='pt-4'>Comenzar</Button>
            </div>
        </div>
    );
};

export default WelcomeScreen;
