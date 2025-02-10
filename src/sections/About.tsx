import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ArcIcon from "@/assets/icons/Arc Browser Logo.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { Iconclass } from "@/components/Iconclass";
import mapImage from "@/assets/images/FinalNoida.jpeg";
import smileMemoji from "@/assets/images/2318c3f6-9d4b-47fb-bc74-ea966f8e90bb.jpeg";
import { CardHeader } from "@/components/CardHeader";

const toolboxIttems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Arc",
    iconType: ArcIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Trading",
    iconType: "💰",
  },
  {
    title: "Photography",
    iconType: "📸",
  },
  {
    title: "Traveling",
    iconType: "🌍",
  },
  {
    title: "Music",
    iconType: "🎧",
  },
  {
    title: "Gaming",
    iconType: "🎮",
  },
  {
    title: "Cooking",
    iconType: "🍳",
  },
  {
    title: "Fitness",
    iconType: "🏋️‍♂️",
  },
  {
    title: "Content Creation",
    iconType: "🎥",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps into my World"
          description="Learn more about who I am, what I do , and what inspires me."
        />
        <div className="mt-20">
          <Card className="h-[340px]">
            <CardHeader title="My Reads" description="Explore the books that have shaped my perspective" />
            <div className="w-40 mx-auto mt-8">
            <Image src={BookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card>
          <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional
                digital experiences" />
            <div>
              {toolboxIttems.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <Iconclass component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
          <CardHeader title="Beyond the code" description="Explore my Interests and Hobbies beyond the digital realm." />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.iconType}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={smileMemoji} alt="Smile Memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
