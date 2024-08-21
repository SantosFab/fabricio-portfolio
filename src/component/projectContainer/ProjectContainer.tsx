import { FunctionComponent, ReactNode, useState } from "react";
import * as Styled from "./styles";
import { Modal } from "@/component/modal/ImageModal";
import Image, { StaticImageData } from "next/image";
import { TagContainer } from "../tagContainer/TagContainer";

interface ProjectContainerProps {
  body: string;
  hrefGit: string;
  hrefPreview: string;
  images: StaticImageData[];
  title: string;
  children: ReactNode;
  isMobile: boolean;
}

export const ProjectContainer: FunctionComponent<ProjectContainerProps> = ({
  body,
  hrefGit,
  hrefPreview,
  isMobile,
  images,
  title,
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleMobileClick = () => {
    if (isMobile) {
      setShowLinks(!showLinks);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowLinks(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowLinks(false);
    }
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
      <Styled.StyledBody
        onMouseEnter={handleMouseEnter}
        onClick={handleMobileClick}
      >
        <h2>{title}</h2>
        <Styled.StyledTag>{children}</Styled.StyledTag>
        <p>{body}</p>
      </Styled.StyledBody>
      <Styled.LinksContainer
        $show={showLinks}
        onMouseLeave={handleMouseLeave}
        onClick={handleMobileClick}
      >
        <Styled.StyledLink href={hrefPreview} target="_blank">
          Preview
        </Styled.StyledLink>
        <Styled.StyledLink href={hrefGit} target="_blank">
          Github
        </Styled.StyledLink>
      </Styled.LinksContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} images={images} />
    </Styled.StyledProjectContainer>
  );
};
