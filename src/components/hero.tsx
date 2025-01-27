export default function Hero() {
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      <div className="max-w-[544px]">
        <p className="font-title text-6xl md:text-8xl">
          Hi, I am <br /> Andrei Iatan. | UPDATE
        </p>
        <p className="font-light text-secondary">
          A Bucharest based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
      </div>
      <div className="lg:w-[clamp(300px,40%,600px)]"></div>
    </div>
  );
}
