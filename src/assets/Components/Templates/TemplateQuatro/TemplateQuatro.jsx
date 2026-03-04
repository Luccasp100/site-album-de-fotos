import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateQuatro.css';

function TemplateGrid({ data, imagem1, imagem2, imagem3, imagem4, texto }) {
    const [fotoFoco, setFotoFoco] = useState(null);
    const elementoRef = useScrollAnimation();

    useEffect(() => {
        document.body.style.overflow = fotoFoco ? 'hidden' : 'auto';
    }, [fotoFoco]);

    const imagens = [imagem1, imagem2, imagem3, imagem4];

    return (
        <section className='template-container grid-quatro'>
            <h1 className='titulo-data-imagem-home'>______{data}______</h1>

            <div ref={elementoRef} className='template-grid-wrapper hidden'>
                <div className="grid-quadrados">
                    {imagens.map((img, index) => (
                        <img
                            key={index}
                            className='template-image-grid'
                            src={img}
                            alt={`Foto ${index + 1}`}
                            onClick={() => setFotoFoco(img)}
                        />
                    ))}
                </div>
                
                {texto && <p className='template-text-grid'>{texto}</p>}
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

export default TemplateGrid;