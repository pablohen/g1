import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import BarraGloboCom from './../../components/BarraGloboCom';
import BarraTitulo from './../../components/BarraTitulo';
import CardLateral from './../../components/CardLateral';
import Rodape from './../../components/Rodape';
import dados from '../../dados.json';
import { NextSeo } from 'next-seo';
import { fetchEntries } from './../../util/contentfulPosts';
import { useRouter } from 'next/router';

const PaginaNoticia = ({ noticia }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const { titulo, subtitulo, data, categoria } = noticia[0].fields;
  const imagem = noticia[0].fields.imagem?.fields.file.url;
  const corpo = documentToHtmlString(noticia[0].fields.corpo);

  const { menus } = dados;
  if (noticia) {
    return (
      <div>
        <NextSeo title={titulo} />
        <header className="sticky top-0 z-50">
          <BarraGloboCom />
          <BarraTitulo titulo={categoria} />
        </header>

        <main className="flex flex-col lg:flex-row lg:space-x-4 lg:px-4">
          <div className="w-full">
            {noticia && (
              <>
                <div className="p-4">
                  <p className="font-bold text-4xl mb-4">{titulo}</p>
                  <p className="text-lg">{subtitulo}</p>
                  <p className="text-xs">{data}</p>
                </div>
                <img src={imagem} alt={titulo} />
                <div
                  className="p-4 pb-0"
                  dangerouslySetInnerHTML={{ __html: corpo }}
                />
              </>
            )}
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
        </main>

        <footer>
          <Rodape />
        </footer>
      </div>
    );
  }
};

export default PaginaNoticia;

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const noticia = await fetchEntries({
    content_type: 'noticia',
    limit: 1,
    'fields.slug': slug,
  });

  return {
    props: {
      noticia,
    },
  };
};