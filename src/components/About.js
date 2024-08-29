// import React from 'react';

// const About = () => {
//   const aboutSectionStyle = {
//   paddingTop: '250px',
//     backgroundImage: 'url("2148430879.jpg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     padding: '4rem 2rem',
//     color: '#fff',
//     position: 'relative',
//     textAlign: 'left',
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     height: '400px',
//   };

//   const textStyle = {
    
//    //move it to 600px
//     maxWidth: '600px', 
//     lineHeight: '1.6', 
//   };

//   return (
//     <section className="about" style={aboutSectionStyle}>
//       <div style={textStyle}>
//         <h2>About Me</h2>
//         <p>
//           I am a Computer Science student with a passion for data engineering, web development, 
//           and AI/ML technologies. I enjoy solving complex problems and building applications that 
//           make an impact.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';

const About = () => {
  const aboutSectionStyle = {
    backgroundImage: 'url("2148430879.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '8rem 1rem',  // Increased top padding to account for the navbar
    color: '#fff',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',  // Aligns content to the left
    alignItems: 'center',  // Centers content vertically
    height: '400px',
    
  };

  const textStyle = {
    maxWidth: '600px',  // Restricts the width of the text content
    lineHeight: '1.6', 
    paddingLeft: '2rem',  // Adds some padding from the left edge
  };

  return (
    <section className="about" style={aboutSectionStyle}>
      <div style={textStyle}>
        <h2>About Me</h2>
        <p>
          I am a Computer Science student with a passion for data engineering, web development, 
          and AI/ML technologies. I enjoy solving complex problems and building applications that 
          make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;
