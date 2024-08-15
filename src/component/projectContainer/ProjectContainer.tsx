import { FunctionComponent, useState } from "react";
import * as Styled from "./styles";
import { Modal } from "@/component/modal/ImageModal";
import Image from "next/image";

interface ProjectContainerProps {}

export const ProjectContainer: FunctionComponent<
  ProjectContainerProps
> = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const images = ["/img/img1.jpg", "/img/img2.jpeg", "/img/img3.jpeg"];

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Styled.StyledProjectContainer>
      <Image
        src="/img/img1.jpg"
        alt="Imagem do projeto"
        width={300}
        height={200}
        priority
        onClick={handleImageClick}
      />
      <Styled.StyledBody>
        <h2>Nome do projeto</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
      </Styled.StyledBody>
      <Styled.LinksContainer>
        <Styled.StyledLink href="#preview">Preview</Styled.StyledLink>
        <Styled.StyledLink href="#github">Github</Styled.StyledLink>
      </Styled.LinksContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} images={images} />
    </Styled.StyledProjectContainer>
  );
};
