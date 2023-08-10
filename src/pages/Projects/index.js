import ImageInCorner from "../../components/Images/BottomImage";
import Foguete from "../../components/Images/Foguete";
import Template from "../../components/Template";
import imgRocha from '../../assets/generalMedia/rochas.png';
import CardProjects from "../../components/Cards/CardProjects";


export default function Projects() {
    return (
        <>
            <Template
                children={<Foguete />}
                title="projetos"
                content={ <CardProjects/>}
            />
            <ImageInCorner src={imgRocha} alt='Rochas' />
        </>
    )
}
