import { useState } from 'react';
import dadosJson from '../../Data/Datas.json';
import './Galeria.css';
import '../../assets/Components/Templates/CssGlobal/CssGlobal.css';

function Galeria({ categoria }) {
    // Estado para controlar qual foto está aberta e os dados dela
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

            {/* O MODAL COPIADO (Renderização Condicional) */}
            {fotoAberta && (
                <div className="modal-overlay" onClick={() => setFotoAberta(null)}>
                    {/* Botão de fechar com a classe correta do seu CSS */}
                    <button className="botao-fechar" onClick={() => setFotoAberta(null)}>
                        &times;
                    </button>

                    {/* Imagem com a classe .modal-imagem para pegar a animação zoomGiroSuave */}
                    <img
                        className="modal-imagem"
                        src={fotoAberta.url}
                        alt="Expandida"
                        //onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na foto
                    />

                    {/* Se você quiser exibir o texto e a data, eles precisam de classes novas ou extras */}
                    <div className='galeria-imagem-container'>
                        <p className='galeria-imagem-container-data'>{fotoAberta.data}</p>
                        <h3 className='galeria-imagem-container-texto'>{fotoAberta.texto}</h3>
                    </div>
                </div>
            )}
        </div>  
    );
}

export default Galeria;