import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateDuplo.css';

function TemplateDuplo({ data, imagem1, imagem2, texto }) {
    const [fotoFoco, setFotoFoco] = useState(null); // Para saber qual foto abrir no modal
    const elementoRef = useScrollAnimation();

    useEffect(() => {
        document.body.style.overflow = fotoFoco ? 'hidden' : 'auto';
    }, [fotoFoco]);

    return (
        <section className='template-container duplo'>
            <h1 className='titulo-data-imagem-home'>______{data}______</h1>

            <div ref={elementoRef} className='template-duplo-wrapper hidden'>
                <div className="duplo-imagens-container">
                    <img
                        className='template-image-duplo'
                        src={imagem1}
                        alt="Foto 1"
                        onClick={() => setFotoFoco(imagem1)}
                    />
                    <img
                        className='template-image-duplo'
                        src={imagem2}
                        alt="Foto 2"
                        onClick={() => setFotoFoco(imagem2)}
                    />
                </div>

                {texto && <p className='template-text-duplo'>{texto}</p>}
            </div>

            {fotoFoco && createPortal(
                <div className="modal-overlay" onClick={() => setFotoFoco(null)}>
                    <button className="botao-fechar" onClick={() => setFotoFoco(null)}>&times;</button>
                    <img src={fotoFoco} className="modal-imagem" alt="Expandida" />
                </div>,
                document.body
            )}
        </section>
    );
}

export default TemplateDuplo;