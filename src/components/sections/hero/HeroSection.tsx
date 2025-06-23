import "./herosection.css";
import HeroTitle from "../hero/HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import Navbar from "../../ui/Navbar";
import NoiseFilter from "../../../assets/NoiseFIlter";
import LogoIcon from "../../../assets/LogoIcon";

export default function HeroSection() {
  return (
    <section className="hero-section" id="Home">
      <div className="hero-content">
        <LogoIcon />
        <HeroTitle />
        <HeroSubtitle />
        <Navbar />
        <NoiseFilter />
      </div>
    </section>
  );
}