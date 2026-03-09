import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateTrio.css';

function TemplateTrio({ data, imagem1, imagem2, imagem3, texto }) {
    const [fotoFoco, setFotoFoco] = useState(null);
    const elementoRef = useScrollAnimation();
    const imagens = [imagem1, imagem2, imagem3];

    useEffect(() => {
        document.body.style.overflow = fotoFoco ? 'hidden' : 'auto';
    }, [fotoFoco]);

    return (
        <section className='template-container trio'>
            <h1 className='titulo-data-imagem-home'>______{data}______</h1>

            <div ref={elementoRef} className='template-trio-wrapper hidden'>
                {imagens.map((img, index) => (
                    <img
                        key={index}
                        className='template-image-trio-small'
                        src={img}
                        alt={`Foto ${index + 1}`}
                        onClick={() => setFotoFoco(img)}
                    />
                ))}

            </div>
            {texto && <p className='template-text-trio texto-template-imagem-home'>{texto}</p>}

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