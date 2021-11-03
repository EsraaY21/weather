import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCircleFill,
  BsCloudDrizzleFill,
  BsCloudSnowFill,
} from 'react-icons/bs';
import { RiMistFill } from 'react-icons/ri';
import { IoIosThunderstorm } from 'react-icons/io';

export const icons_main = {
  Rain: <BsFillCloudRainFill className="main_icon" />,

  Clouds: <BsFillCloudsFill className="main_icon" />,

  Clear: <BsFillCircleFill className="main_icon" />,

  Mist: <RiMistFill className="main_icon" />,

  Thunderstorm: <IoIosThunderstorm className="main_icon" />,

  Drizzle: <BsCloudDrizzleFill className="main_icon" />,

  Snow: <BsCloudSnowFill className="main_icon" />,
};

export const icons_small = {
  Rain: <BsFillCloudRainFill className="small_icon" />,

  Clouds: <BsFillCloudsFill className="small_icon" />,

  Clear: <BsFillCircleFill className="small_icon" />,

  Mist: <RiMistFill className="small_icon" />,

  Thunderstorm: <IoIosThunderstorm className="small_icon" />,

  Drizzle: <BsCloudDrizzleFill className="small_icon" />,

  Snow: <BsCloudSnowFill className="small_icon" />,
};
