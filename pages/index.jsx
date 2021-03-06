import BarraTitulo from '../components/BarraTitulo';
import CardLateral from '../components/CardLateral';
import ChamadaNoticia from '../components/ChamadaNoticia';
import Rodape from '../components/Rodape';
import BarraGloboCom from './../components/BarraGloboCom';
import dados from '../dados.json';
import { fetchEntries } from '../libs/contentful';
import separaDadosNoticia from './../utils/separaDadosNoticia';

const Home = ({ noticias }) => {
  const { menus } = dados;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <BarraGloboCom />
        <BarraTitulo />
      </header>

      <main className="flex-grow justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 lg:px-4">
          <div className="flex flex-wrap w-full mt-4 lg:w-9/12">
            {noticias &&
              noticias.map((noticia, posicao) => {
                const {
                  titulo,
                  subtitulo,
                  chamada,
                  categoria,
                  slug,
                  imagem,
                  imagemLargura,
                  imagemAltura,
                  dataCriacaoAmigavel,
                  dataAtualizacaoAmigavel,
                } = separaDadosNoticia(noticia);

                return (
                  <ChamadaNoticia
                    key={`${titulo}__${slug}`}
                    titulo={titulo}
                    subtitulo={subtitulo}
                    chamada={chamada}
                    categoria={categoria}
                    imagem={imagem}
                    imagemLargura={imagemLargura}
                    imagemAltura={imagemAltura}
                    slug={slug}
                    dataCriacao={dataCriacaoAmigavel}
                    dataAtualizacao={dataAtualizacaoAmigavel}
                    posicao={posicao + 1}
                  />
                );
              })}
          </div>

          <div className="lg:w-96">
            {menus &&
              menus.map((menu) => (
                <CardLateral
                  key={menu.nome}
                  cabecalho={menu.nome}
                  itens={menu.itens}
                />
              ))}
          </div>
        </div>
      </main>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const noticias = await fetchEntries();

  return {
    props: {
      noticias,
    },
  };
};
