
import { PacificoFont, titleFont } from "@/config/fonts";


const HistoriaCerveza: React.FC = () => {
  return (
    <div className={`w-10/12 mx-aut py-32 mx-auto ${titleFont.className}`}>
      <h1 className={`${PacificoFont.className} text-center text-4xl`}>Historia de la cerveza</h1>
      <p className="mt-5"><strong>Orígenes Prehistóricos:</strong> La cerveza tiene una historia que se remonta a la antigüedad, con evidencias de su existencia que datan de al menos 5,000 años atrás. Se cree que las primeras formas de cerveza fueron creadas accidentalmente cuando granos de cereales almacenados se mojaron y fermentaron naturalmente en agua de lluvia. Estas primeras versiones de la cerveza eran probablemente turbias y con un contenido alcohólico bajo.</p>
      <p className="mt-5"><strong>Antiguo Egipto y Mesopotamia:</strong> En el antiguo Egipto, la cerveza era una parte integral de la vida cotidiana. Era consumida tanto por la élite como por las clases más bajas de la sociedad, y se consideraba una bebida nutritiva. Los egipcios elaboraban cerveza a partir de cebada, que malteaban y luego fermentaban en grandes vasijas de barro. También agregaban una variedad de hierbas y frutas para dar sabor. En Mesopotamia, en la región que hoy ocupa Irak, también se encontraron vestigios de cerveza en excavaciones arqueológicas que datan de alrededor de 4,000 a.C.</p>
      <p className="mt-5"><strong>Edad Media:</strong> Durante la Edad Media en Europa, la cerveza se convirtió en una bebida popular, especialmente en áreas donde el agua no era segura para beber. Las condiciones sanitarias eran precarias, y el proceso de elaboración de la cerveza, que implicaba hervir el líquido, hacía que fuera más seguro que el agua. Monasterios y conventos jugaron un papel crucial en la elaboración y perfeccionamiento de la cerveza, con muchas comunidades religiosas produciendo su propia cerveza como fuente de ingresos.</p>
      <p className="mt-5"><strong>Reinado de Luis Pasteur:</strong> En el siglo XIX, con los avances en la ciencia y la microbiología, científicos como Louis Pasteur investigaron los procesos de fermentación y la importancia de la levadura en la producción de cerveza. Los descubrimientos de Pasteur sobre la pasteurización y la microbiología fueron fundamentales para mejorar la calidad y la consistencia de la cerveza.</p>
      <p className="mt-5"><strong>Revolución Industrial:</strong> La Revolución Industrial trajo consigo avances tecnológicos que transformaron la industria cervecera. La invención de la máquina de vapor permitió una producción a mayor escala y un transporte más eficiente de la cerveza. Se desarrollaron nuevas técnicas de malteado y fermentación, lo que resultó en una cerveza de mayor calidad y consistencia. Además, se crearon botellas y barriles más duraderos, lo que facilitó su distribución y almacenamiento.</p>
      <p className="mt-5"><strong>Siglo XX:</strong> Durante el siglo XX, la cerveza se convirtió en una de las bebidas alcohólicas más populares del mundo. Grandes empresas cerveceras multinacionales surgieron y dominaron el mercado, introduciendo estilos de cerveza estandarizados y comercializando agresivamente sus productos a nivel mundial. La cerveza se convirtió en un símbolo de celebración y socialización en muchas culturas.</p>
      <p className="mt-5"><strong>Renacimiento de la Cerveza Artesanal:</strong> A finales del siglo XX y principios del siglo XXI, se produjo un resurgimiento en la popularidad de la cerveza artesanal. Los consumidores empezaron a buscar variedades más auténticas y experimentales, alejándose de las cervezas comerciales producidas en masa. Pequeñas cervecerías artesanales comenzaron a surgir en todo el mundo, ofreciendo una amplia gama de estilos y sabores únicos que capturaron la atención de los aficionados a la cerveza.</p>
    </div>
  );
}

export default HistoriaCerveza;
