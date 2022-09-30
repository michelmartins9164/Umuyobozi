import { React } from "react";
import { Link } from "react-router-dom";
import { ContainerBanner } from "../../styled";
import { ButtonBanner } from "../../styled";
import { Slider } from "../slider";

export const Banner = () => {
  return (
    <div>
      <ContainerBanner>
        <ButtonBanner>
          <span>
            <img
              src="https://imagepng.org/whatsapp-icone-icon/whatsapp-icone/"
              alt=""
            />
          </span>
          <Link to="https://api.whatsapp.com/send?phone=5585991155517">
            Entre em contato
          </Link>
        </ButtonBanner>
      </ContainerBanner>
      <Slider />
    </div>
  );
};
