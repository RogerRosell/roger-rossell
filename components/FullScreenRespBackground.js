import Image from "next/image";

const FullScreenRespBackground = (image) => {
  return (
    <div className="hero-image">
      <Image
        src={`/${image.image}`}
        // src="https://res.cloudinary.com/dkueooiyi/image/upload/v1615331035/image_zxk6v1.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
      />
    </div>
  );
};

export default FullScreenRespBackground;
