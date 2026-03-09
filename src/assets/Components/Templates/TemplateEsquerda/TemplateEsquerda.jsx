import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateEsquerda.css';

function TemplateEsquerda({ data, imagem, texto }) {
    const [estaAberto, setEstaAberto] = useState(false);
    const elementoRef = useScrollAnimation();

    useEffect(() => {
        document.body.style.overflow = estaAberto ? 'hidden' : 'auto';
    }, [estaAberto]);

    return (
        <section className='template-container'>
            <h1 className='titulo-data-imagem-home'>______{data}______</h1>

            <div ref={elementoRef} className='template-content-wrapper-esquerda hidden'>
                <img
                    className='template-imagem-esquerda'
                    src={imagem}
                    alt="Ampliar"
                    onClick={() => setEstaAberto(true)}
                />
                <p className='template-texto-esquerda texto-template-imagem-home'>{texto}</p>
            </div>

            {estaAberto && createPortal(
                <div className="modal-overlay" onClick={() => setEstaAberto(false)}>
                    <button className="botao-fechar" onClick={() => setEstaAberto(false)}>&times;</button>
                    <img src={imagem} className="modal-imagem" alt="Expandida" />
                </div>,
                document.body
            )}
        </section>
    );
}

export default TemplateEsquerda;