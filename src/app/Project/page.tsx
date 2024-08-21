"use client";
import { ProjectContainer } from "@/component/projectContainer/ProjectContainer";
import * as Styled from "./styles";
import spotify1 from "../../../public/image/spotify/spotify1.png";
import spotify2 from "../../../public/image/spotify/spotify2.png";
import spotify3 from "../../../public/image/spotify/spotify3.png";
import cineMeet1 from "../../../public/image/cineMeet/cineMeet1.png";
import cineMeet2 from "../../../public/image/cineMeet/cineMeet2.png";
import cineMeet3 from "../../../public/image/cineMeet/cineMeet3.png";
import cineMeet4 from "../../../public/image/cineMeet/cineMeet4.png";
import calculator1 from "../../../public/image/calculator/calculator1.png";
import { TagContainer } from "@/component/tagContainer/TagContainer";
import { useDeviceType } from "@/hook/useDeviceType/useDeviceType";

export default function Project() {
  const isMobile = useDeviceType();
  return (
    <Styled.StyledProject>
      <div className="container  flex flex-col items-center sm:flex-none sm:flex-row">
        <ProjectContainer
          isMobile={isMobile}
          title="CineMeet"
          hrefGit="https://github.com/SantosFab/cine-meet"
          hrefPreview="https://cinemeet.vercel.app/"
          images={[cineMeet1, cineMeet2, cineMeet3, cineMeet4]}
          body="Com uma interface intuitiva e fácil 
          de usar, permite você pode pesquisar por filmes, obter detalhes
          sobre lançamentos recentes, visualizar as classificações e muito mais."
        >
          <TagContainer tag="HTML" />
          <TagContainer tag="CSS" />
          <TagContainer tag="React" />
          <TagContainer tag="Redux" />
          <TagContainer tag="Router" />
          <TagContainer tag="BootsTrap" />
          <TagContainer tag="TypeScript" />
        </ProjectContainer>
        <ProjectContainer
          isMobile={isMobile}
          title="calculator"
          hrefGit="https://github.com/SantosFab/calculator"
          hrefPreview="https://calculatordev.vercel.app/"
          images={[calculator1]}
          body="Este projeto foi desenvolvido com o objetivo de aplicar
           e consolidar meus conhecimentos sobre o framework Next.js. 
           Além disso, marcou o início dos meus estudos em TypeScript."
        >
          <TagContainer tag="HTML" />
          <TagContainer tag="CSS" />
          <TagContainer tag="TypeScript" />
          <TagContainer tag="BootsTrap" />
        </ProjectContainer>
        <ProjectContainer
          isMobile={isMobile}
          title="Project - Spotify"
          hrefGit="https://github.com/SantosFab/First-Web-Project-Spotify"
          hrefPreview="https://projectspotify.vercel.app/"
          images={[spotify1, spotify2, spotify3]}
          body="Primeiro projeto web desenvolvidos utilizando as Tecnologias HTML/CSS e BootsTrap.
          Nele, repliquei a interface do site Spotify - Premium University"
        >
          <TagContainer tag="HTML" />
          <TagContainer tag="CSS" />
          <TagContainer tag="BootsTrap" />
        </ProjectContainer>
      </div>
    </Styled.StyledProject>
  );
}
