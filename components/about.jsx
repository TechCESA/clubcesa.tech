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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium incidunt esse voluptatem laudantium velit nihil rem
            labore, mollitia officiis! Distinctio, earum! Fuga, esse excepturi
            cumque voluptatem non id deleniti voluptate eum amet, vel quaerat
            expedita nisi adipisci! Consequatur, impedit facere maiores
            architecto nemo doloribus, magni quo ducimus reiciendis autem
            quaerat explicabo asperiores consectetur iste ratione perferendis
            ipsa molestiae. Cumque, odit odio molestiae esse illo consequuntur
            sit non, aspernatur perspiciatis quaerat necessitatibus sequi
            sapiente laudantium dignissimos expedita mollitia quisquam modi
            alias earum aliquam, placeat consequatur. Libero qui consectetur
            odio non deserunt officia quam pariatur dignissimos quis quisquam.
            Voluptatum nemo exercitationem, accusantium laudantium delectus
            inventore eius
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
