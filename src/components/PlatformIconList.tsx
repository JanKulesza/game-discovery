import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { Platform } from "@/entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { ReactNode } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformsIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linux: <FaLinux />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };

  return (
    <>
      <HStack marginBottom={1} gap={2}>
        {platforms.map((platform) => (
          <Icon fontSize="16px" key={platform.id}>
            {iconMap[platform.slug] || <BsGlobe />}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformsIconList;
