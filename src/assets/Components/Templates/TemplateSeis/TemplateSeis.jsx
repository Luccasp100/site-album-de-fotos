import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateSeis.css';

function TemplateSeis({ data, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, texto }) {
    const [fotoFoco, setFotoFoco] = useState(null);
    const elementoRef = useScrollAnimation();

    useEffect(() => {
        document.body.style.overflow = fotoFoco ? 'hidden' : 'auto';
    }, [fotoFoco]);

    const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

    return (
        <section className='template-container seis-grid'>
            <h1 className='titulo-data-imagem-home'>______{data}______</h1>

            <div ref={elementoRef} className='template-seis-wrapper hidden'>
                <div className="grid-seis-quadrados">
                    {imagens.map((img, index) => (
                        <img
                            key={index}
                            className='template-image-seis'
                            src={img}
                            alt={`Foto ${index + 1}`}
                            onClick={() => setFotoFoco(img)}
                        />
                    ))}
                </div>
                
                {texto && <p className='template-text-seis'>{texto}</p>}
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

export default TemplateSeis;