import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollAnimation } from '../../../../Hooks/Hooks';
import './TemplateCentral.css';

function TemplateCentral({ data, imagem, texto }) {
    const [estaAberto, setEstaAberto] = useState(false);
    const elementoRef = useScrollAnimation();

    useEffect(() => {
        document.body.style.overflow = estaAberto ? 'hidden' : 'auto';
    }, [estaAberto]);

    return (
        <section className='template-container central'>
            <h1>{data}</h1>

            <div ref={elementoRef} className='template-central-wrapper hidden'>
                <img
                    className='template-image-central'
                    src={imagem}
                    alt="Ampliar"
                    onClick={() => setEstaAberto(true)}
                />
                {/* 2. SINTAXE CORRETA: O texto vai entre as tags <p> e </p> */}
                {texto && <p className='template-text-central'>{texto}</p>}
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

export default TemplateCentral;