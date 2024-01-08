const backgroundImage = '/images/01.gif';
export default function About() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.9',
        }}
      >
        <h1 class='mt-12 text-4xl font-black'>About</h1>
        <div
          style={{
            width: '90%', // Adjust width as needed
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center horizontally and vertically
            background: 'rgba(0,0,0,0.3)',
            borderRadius: 60,
            padding: '20px',
          }}
        >
          <p
            class='about'
            style={{
              textAlign: 'justify',
              color: 'white',
              fontFamily: 'Inter',
              fontSize: '80%',
              fontWeight: '300',
              textAlign: 'center',
            }}
          >
            Welcome to the heart of innovation and collaboration at Bharati
            Vidyapeeth College of Engineering! The Computer Engineering Student
            Association (CESA) is the dynamic hub where brilliant minds
            converge, ideas flourish, and friendships are forged. As the
            torchbearer of creativity and excellence, CESA is more than just an
            association—it is a family of tech enthusiasts, problem solvers, and
            future leaders. At CESA, our mission is to cultivate a thriving
            community of computer engineering students dedicated to pushing the
            boundaries of technology. Whether you are a coding prodigy, a
            hardware enthusiast, or just passionate about technology, CESA
            welcomes you! Join us in shaping the future of computer engineering,
            where your ideas are the currency, and your potential knows no
            bounds. Lets code the future together!
          </p>
          <style jsx>{`
            @media (min-width: 768px) {
              div {
                font-size: 1.6rem; // Larger font size for medium and large screens
              }
            }

            @media (min-width: 992px) {
              div {
                font-size: 1.8rem; // Even larger font size for large screens
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
