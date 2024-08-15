import { FunctionComponent, useState } from "react";
import * as Styled from "./styles";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Styled.ModalOverlay onClick={handleClickOutside}>
      <Styled.NavigationButton onClick={handlePrevImage}>
        {"<"}
      </Styled.NavigationButton>
      <Styled.ModalContent>
        <Image
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          width={1600}
          height={900}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Styled.ModalContent>
      <Styled.NavigationButton onClick={handleNextImage}>
        {">"}
      </Styled.NavigationButton>
    </Styled.ModalOverlay>
  );
};
