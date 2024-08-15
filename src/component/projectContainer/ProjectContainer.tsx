import { FunctionComponent, useState } from "react";
import * as Styled from "./styles";
import { Modal } from "@/component/modal/ImageModal";
import Image, { StaticImageData } from "next/image";

interface ProjectContainerProps {
  body: string;
  hrefGit: string;
  hrefPreview: string;
  images: StaticImageData[];
  title: string;
}

export const ProjectContainer: FunctionComponent<ProjectContainerProps> = ({
  body,
  hrefGit,
  hrefPreview,
  images,
  title,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Styled.StyledProjectContainer>
      <Image
        src={images[0]}
        alt="Imagem do projeto"
        priority
        quality={50}
        onClick={handleImageClick}
      />
      <Styled.StyledBody>
        <h2>{title}</h2>
        <p>{body}</p>
      </Styled.StyledBody>
      <Styled.LinksContainer>
        <Styled.StyledLink href={hrefPreview}>Preview</Styled.StyledLink>
        <Styled.StyledLink href={hrefGit}>Github</Styled.StyledLink>
      </Styled.LinksContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} images={images} />
    </Styled.StyledProjectContainer>
  );
};
