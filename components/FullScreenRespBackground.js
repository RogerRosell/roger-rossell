import Image from "next/image";

const FullScreenRespBackground = (image) => {
  return (
    <div className="hero-image">
      <Image
        src={`/${image.image}`}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </div>
  );
};

export default FullScreenRespBackground;
