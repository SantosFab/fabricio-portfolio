"use client";
import { ProjectContainer } from "@/component/projectContainer/ProjectContainer";
import * as Styled from "./styles";
import img1 from "../../../public/img/img1.jpg";
import img2 from "../../../public/img/img2.png";
import img3 from "../../../public/img/img3.jpeg";

export default function Project() {
  return (
    <Styled.StyledProject>
      <div className="container">
        <ProjectContainer
          title="Title test"
          hrefGit="#gitTest"
          hrefPreview="#previewTest"
          images={[img1, img2, img3]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        />
        <ProjectContainer
          title="Title test"
          hrefGit="#gitTest"
          hrefPreview="#previewTest"
          images={[img1, img2, img3]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        />
        <ProjectContainer
          title="Title test"
          hrefGit="#gitTest"
          hrefPreview="#previewTest"
          images={[img1, img2, img3]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        />
        <ProjectContainer
          title="Title test"
          hrefGit="#gitTest"
          hrefPreview="#previewTest"
          images={[img1, img2, img3]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        />
        <ProjectContainer
          title="Title test"
          hrefGit="#gitTest"
          hrefPreview="#previewTest"
          images={[img1, img2, img3]}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s."
        />
      </div>
    </Styled.StyledProject>
  );
}
