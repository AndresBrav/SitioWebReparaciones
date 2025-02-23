import React from 'react'
import Cabecera from './Cabecera'
import whatsappIcon from '../assets/icons/icons8-whatsapp.svg';

const Contacto = () => {
    const whatsappLink = "https://wa.me/59168466877?text=Necesito%20m%C3%A1s%20informaci%C3%B3n";

    return (
        <>
            <Cabecera />
            <div className='gridWhatsapp'>
                <div></div> {/* Columna 1 */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <img src={whatsappIcon} alt="Ícono de WhatsApp" style={{ width: '24px', height: '24px' }} />
                    ¡Contáctame por WhatsApp!
                </a> {/* Columna 2, centrada */}
                <div></div> {/* Columna 3 */}
            </div>

        </>



    )
}

export default Contacto