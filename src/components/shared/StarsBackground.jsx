const StarsBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-5">
      {/* Top Stars */}
      <div className="w-full px-4 md:h-1/2 md:flex justify-center items-center pt-4">
        <img 
          src="/images/stars-bg-1.png" 
          alt="stars" 
          className="w-full h-full md:w-[800px] object-cover"
        />
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-0 w-full flex flex-col gap-4 md:gap-6 lg:gap-8 ">
        <div className="w-full px-4 h-1/3 md:h-1/2 md:flex justify-center items-center">
          <img 
            src="/images/stars-bg-2.png" 
            alt="stars" 
            className="w-full h-full md:w-[800px] object-cover"
          />
        </div>
        <div className="w-full  h-1/4 md:h-1/3 md:flex justify-center items-center">
          <img 
            src="/images/clouds.png" 
            alt="clouds"  
            className="w-full h-full md:h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StarsBackground;
