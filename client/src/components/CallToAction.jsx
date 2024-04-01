import { Button } from "flowbite-react";
import portfolioImage from "../utils/portfolio.png";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl"> Explore My Portfolio!</h2>
        <p className="text-gray-500 my-2">
          Dive into a showcase of my latest projects, achievements, and skills.
          Whether you're a potential employer, collaborator, or just curious
          about what I've been working on, I invite you to explore my portfolio.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://ashishthotwe07-d2kevh6v5-ashishthotwe07.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={portfolioImage} alt="Portfolio" />
      </div>
    </div>
  );
}
