"use client";
import { ProjectContainer } from "@/component/projectContainer/ProjectContainer";
import * as Styled from "./styles";
import spotify1 from "../../../public/image/spotify/spotify1.png";
import spotify2 from "../../../public/image/spotify/spotify2.png";
import spotify3 from "../../../public/image/cineMeet/cineMeet1.png";
import cineMeet1 from "../../../public/image/cineMeet/cineMeet1.png";
import cineMeet2 from "../../../public/image/cineMeet/cineMeet2.png";
import cineMeet3 from "../../../public/image/cineMeet/cineMeet3.png";
import cineMeet4 from "../../../public/image/cineMeet/cineMeet4.png";
import calculator1 from "../../../public/image/calculator/calculator1.png";
import calculator2 from "../../../public/image/calculator/calculator2.png";
import { TagContainer } from "@/component/tagContainer/TagContainer";

export default function Project() {
  return (
    <Styled.StyledProject>
      <div className="container">
        <ProjectContainer
          title="CineMeet"
          hrefGit="https://github.com/SantosFab/cine-meet"
          hrefPreview="https://cinemeet.vercel.app/"
          images={[cineMeet1, cineMeet2, cineMeet3, cineMeet4]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
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
          title="calculator"
          hrefGit="https://github.com/SantosFab/calculator"
          hrefPreview="https://calculatordev.vercel.app/"
          images={[calculator1, calculator2]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        >
          <TagContainer tag="HTML" />
          <TagContainer tag="CSS" />
          <TagContainer tag="TypeScript" />
          <TagContainer tag="BootsTrap" />
        </ProjectContainer>

        <ProjectContainer
          title="Project - Spotify"
          hrefGit="https://github.com/SantosFab/First-Web-Project-Spotify"
          hrefPreview="https://projectspotify.vercel.app/"
          images={[spotify1, spotify2, spotify3]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        >
          <TagContainer tag="HTML" />
          <TagContainer tag="CSS" />
          <TagContainer tag="BootsTrap" />
        </ProjectContainer>
      </div>
    </Styled.StyledProject>
  );
}
