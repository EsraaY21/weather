import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCircleFill,
} from 'react-icons/bs';
import { RiMistFill } from 'react-icons/ri';

export const icons = {
  Rain: (
    <BsFillCloudRainFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
  ),
  Clouds: (
    <BsFillCloudsFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
  ),
  Clear: (
    <BsFillCircleFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
  ),
  Mist: (
    <RiMistFill className="h-1/4 w-1/4 mx-auto my-6 transition-all duration-700 ease-out" />
  ),
};
