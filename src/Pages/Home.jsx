import TemplateEsquerda from '../assets/Components/Templates/TemplateEsquerda/TemplateEsquerda';
import TemplateDireita from '../assets/Components/Templates/TemplateDireita/TemplateDireita';
import TemplateCentral from '../assets/Components/Templates/TemplateCentral/TemplateCentral';
import TemplateDuplo from '../assets/Components/Templates/TemplateDuplo/TemplateDuplo';
import TemplateTrio from '../assets/Components/Templates/TemplateTrio/TemplateTrio';
import TemplateQuatro from '../assets/Components/Templates/TemplateQuatro/TemplateQuatro'
import TemplateCinco from '../assets/Components/Templates/TemplateCinco/TemplateCinco';
import TemplateSeis from '../assets/Components/Templates/TemplateSeis/TemplateSeis';
import dadosJson from '../Data/Datas.json';

const MAPA_TEMPLATES = {
    "ESQUERDA_TEXTO": TemplateEsquerda,
    "DIREITA_TEXTO": TemplateDireita,
    "CENTRAL_IMAGEM": TemplateCentral,
    "DUPLO_IMAGEM": TemplateDuplo,
    "TRIO_IMAGEM": TemplateTrio,
    "QUATRO_IMAGEM": TemplateQuatro,
    "CINCO_IMAGEM": TemplateCinco,
    "SEIS_IMAGEM": TemplateSeis
};

function Home() {
    return (
        <div className="home-container">
            {dadosJson.map((item, index) => {
                const Componente = MAPA_TEMPLATES[item.template];
                return Componente ? <Componente key={index} {...item.props} /> : null;
            })}
        </div>
    );
}

export default Home;