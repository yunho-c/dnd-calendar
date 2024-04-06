// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

// export function HomePage() {
//   return (
//     <>
//       <Welcome />
//       <ColorSchemeToggle />
//     </>
//   );
// }

import React from 'react';
import Calendar from '../components/Calendar'; // import the Calendar component

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Calendar /> {/* Render the Calendar component */}
    </div>
  );
};

export { HomePage }; // Change to named export

