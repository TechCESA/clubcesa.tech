export default function About() {
  return (
    <div className="relative mb-12 mt-28 h-screen w-full overflow-hidden bg-[url('/images/01.gif')] bg-cover bg-center">
      <div className='absolute -left-8 -top-10 z-10 h-[80px] w-[110%] bg-[#121212] blur-lg'></div>
      <div className='absolute -bottom-10 -left-8 z-10 h-[80px] w-[110%] bg-[#121212] blur-lg'></div>
      <div className='m-auto flex h-full max-w-[90vw] flex-col items-start justify-center sm:max-w-[75vw]'>
        <h1 className='pb-12 text-4xl font-black'>About</h1>
        <p className='text-justify text-xl'>
          {`Welcome to the heart of innovation and collaboration at Bharati
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
            bounds. Lets code the future together!`}
        </p>
      </div>
    </div>
  );
}
