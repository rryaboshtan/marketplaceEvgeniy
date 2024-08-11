import { Slide } from "pure-react-carousel";
import BrutalistSrc from './SliderElements/SecondSlide/Brutalist 32.png';
import AdButtonSrc from './SliderElements/SecondSlide/Button picture.png';
import AdButtonPointerSrc from './SliderElements/SecondSlide/tabler_pointer.png';
import SecondAdButtonSrc from './SliderElements/SecondSlide/Button picture (1).png';
import SecondAdButtonPointerSrc from './SliderElements/SecondSlide/tabler_pointer (1).png';
import ThirdAdButtonSrc from './SliderElements/SecondSlide/Button picture (2).png';
import ThirdAdButtonPointerSrc from './SliderElements/SecondSlide/tabler_pointer (2).png';
import { 
  FirstAdButton, 
  FirstAdButtonPointer, 
  BrutalistImg, 
  AdButtonAnimationContainer, 
  SecondSlideFirstTitle, 
  SecondSlideSecondTitle, 
  SecondSlideTitles, 
  FirstAdButtonContainer,
  SecondAdButtonContainer,
  SecondAdButton,
  SecondAdButtonPointer,
  ThirdAdButtonContainer,
  ThirdAdButton,
  ThirdAdButtonPointer
} from "./HomePageAdSlider.styled";

export default function SecondSlide() {
  return (
    <Slide>
      <BrutalistImg src={BrutalistSrc} alt="brutalist" />
      <SecondSlideTitles>
        <SecondSlideFirstTitle>
          Маєш непотрібні речі? <br />
          Знайди для них нових господарів!
        </SecondSlideFirstTitle>
        <SecondSlideSecondTitle>
          Легко створюй оголошення та продавай будь-що.
        </SecondSlideSecondTitle>
      </SecondSlideTitles>
      <AdButtonAnimation />
    </Slide>
  )
}

function AdButtonAnimation() {
  return (
    <AdButtonAnimationContainer>
      <FirstAdButtonContainer>
        <FirstAdButton src={AdButtonSrc} alt="ad button" />
        <FirstAdButtonPointer src={AdButtonPointerSrc} alt="ad pointer" />
      </FirstAdButtonContainer>
      <SecondAdButtonContainer>
        <SecondAdButton src={SecondAdButtonSrc} alt="second ad button" />
        <SecondAdButtonPointer src={SecondAdButtonPointerSrc} alt="second ad pointer" />
      </SecondAdButtonContainer>
      <ThirdAdButtonContainer>
        <ThirdAdButton src={ThirdAdButtonSrc} alt="ad button" />
        <ThirdAdButtonPointer src={ThirdAdButtonPointerSrc} alt="ad pointer" />
      </ThirdAdButtonContainer>
    </AdButtonAnimationContainer>
  );
}