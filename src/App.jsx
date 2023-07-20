import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './routing/routing';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleUser,
  faLocationDot,
  faSquarePhone,
  faGlobe,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const App = () => <RouterProvider router={routing} />;

export default App;

library.add(
  faEnvelope,
  faCircleUser,
  faLocationDot,
  faSquarePhone,
  faGlobe,
  faBuilding
);
