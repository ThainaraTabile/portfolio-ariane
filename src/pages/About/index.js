import Satelite from '../../components/Images/Satelite';
import Template from '../../components/Template';
import imgEstrelas from '../../assets/generalMedia/estrelas.png'
import BottomImage from '../../components/Images/BottomImage';

export default function About () {
    return(
      

        <>
        <Template
        children={<Satelite/>}
        title="projetos"
        content={
            <article>
            <p>Sou uma desenvolvedora web front-end graduada em nutrição. </p>
          <p>Durante minha jornada, conduzi pesquisas voltadas para aplicativos de alimentos, o que despertou em mim um forte interesse pelo mundo da tecnologia. 
            Essa paixão pela área me motivou a realizar uma transição de carreira para o desenvolvimento web.</p>
          <p>Buscando adquirir conhecimentos sólidos em programação, ingressei o bootcamp de Front End Development na Laboratória Brasil.   
            Fui imersa em um ambiente de aprendizado que foi fundamental para a obtenção de sólidos conhecimentos em metodologias de desenvolvimento ágil, bem como para o aprofundamento das minhas habilidades em JavaScript, Firebase, Node.js, React, Git, HTML e CSS.</p>
          </article>
        }
        />
        <BottomImage src={imgEstrelas} al='Estrelas' />
        </>
    )
}


