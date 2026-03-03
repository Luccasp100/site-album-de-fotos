import { useState } from 'react';
import dadosJson from '../../Data/Datas.json';
import './Galeria.css';
import '../../assets/Components/Templates/CssGlobal/CssGlobal.css';

function Galeria({ categoria }) {
    const [fotoAberta, setFotoAberta] = useState(null);

    const itensFiltrados = dadosJson.filter(item => item.tipo === categoria);

    return (
        <div className="galeria-container">
            <div className="galeria-grid">
                {itensFiltrados.map((item, indexItem) => {
                    const imagensDoItem = Object.keys(item.props)
                        .filter(key => key.startsWith('imagem'))
                        .map(key => item.props[key]);

                    return imagensDoItem.map((url, indexImg) => (
                        <div
                            key={`${indexItem}-${indexImg}`}
                            className="galeria-item"
                            onClick={() => setFotoAberta({
                                url: url,
                                texto: item.props.texto,
                                data: item.props.data
                            })}
                        >
                            <img src={url} alt="Memória" />
                        </div>
                    ));
                })}
            </div>

            {/* MODAL COM ROLAGEM INTERNA */}
            {fotoAberta && (
                <div className="modal-overlay" onClick={() => setFotoAberta(null)}>
                    <button className="botao-fechar" onClick={() => setFotoAberta(null)}>
                        &times;
                    </button>

                    <div className="modal-wrapper-conteudo" /*onClick={(e) => e.stopPropagation()}*/>
                        <img
                            className="galeria-modal-imagem"
                            src={fotoAberta.url}
                            alt="Expandida"
                        />

                        <div className='galeria-imagem-container'>
                            <p className='galeria-imagem-container-data'>{fotoAberta.data}</p>
                            <h3 className='galeria-imagem-container-texto'>{fotoAberta.texto}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>  
    );
}

export default Galeria;