import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateTrio.css';

function TemplateTrio({ data, imagem1, imagem2, imagem3, texto }) {
    const [fotoFoco, setFotoFoco] = useState(null);
    const elementoRef = useScrollAnimation();

    useEffect(() => {
        document.body.style.overflow = fotoFoco ? 'hidden' : 'auto';
    }, [fotoFoco]);

    return (
        <section className='template-container trio'>
            <h1 className='titulo-data-imagem-home'>______{data}______</h1>

            <div ref={elementoRef} className='template-trio-wrapper hidden'>
                {/* Linha de cima: 2 imagens */}
                <div className="trio-linha-superior">
                    <img
                        className='template-image-trio-small'
                        src={imagem1}
                        alt="Foto 1"
                        onClick={() => setFotoFoco(imagem1)}
                    />
                    <img
                        className='template-image-trio-small'
                        src={imagem2}
                        alt="Foto 2"
                        onClick={() => setFotoFoco(imagem2)}
                    />
                </div>

                {/* Linha de baixo: 1 imagem centralizada */}
                <div className="trio-linha-inferior">
                    <img
                        className='template-image-trio-small'
                        src={imagem3}
                        alt="Foto 3"
                        onClick={() => setFotoFoco(imagem3)}
                    />
                </div>
                
                {texto && <p className='template-text-trio texto-template-imagem-home'>{texto}</p>}
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

export default TemplateTrio;