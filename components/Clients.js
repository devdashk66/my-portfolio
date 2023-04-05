import { useEffect, useState } from "react";
import PageHeading from "./Helper/PageHeading";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const review = [
    {
      id: 1,
      name: "Jane Smith",
      title: "Senior Front-End Developer",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      review:
        "Working with Dev was an amazing experience! Their skills in web development are truly impressive. They delivered a stunning business site that exceeded our expectations. The communication throughout the project was excellent, and they were always willing to go the extra mile to ensure our satisfaction. I highly recommend Dev for anyone looking for a top-notch web developer.",
    },
    {
      id: 2,
      name: "John Doe",
      title: "Director of Marketing",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      review:
        "Dev is an exceptional web developer who is able to bring a unique blend of creativity and technical expertise to every project. Their ability to think outside the box and develop innovative solutions is unparalleled. I have worked with Dev on multiple projects and have been consistently impressed with their professionalism and attention to detail.",
    },
    {
      id: 3,
      name: "Sarah Lee",
      title: "Chief Technology Officer",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
      review:
        "I had the pleasure of working with Dev on a complex web development project, and they exceeded my expectations at every turn. Their technical skills are matched only by their strong communication and project management abilities. I highly recommend Dev for any web development project, no matter how complex or challenging.",
    },
    {
      id: 4,
      name: "David Johnson",
      title: "Senior Software Engineer",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      review:
        "Dev is an extremely talented web developer with a keen eye for design and a passion for innovation. They consistently deliver high-quality work that is both functional and aesthetically pleasing. I have worked with Dev on multiple projects and have always been impressed with their ability to think creatively and find elegant solutions to complex problems.",
    },
    {
      id: 5,
      name: "Emily Kim",
      title: "User Experience Designer",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      review:
        "I had the pleasure of collaborating with Dev on a website redesign project, and I was blown away by their technical skills and attention to detail. Their ability to take complex design concepts and turn them into functional, responsive websites is truly impressive. I highly recommend Dev for any web development project that requires a combination of technical expertise and design sensibility.",
    },
  ];

  const prevReview = () => {
    setCurrentReview(
      currentReview === 0 ? review.length - 1 : currentReview - 1
    );
  };

  const nextReview = () => {
    setCurrentReview(
      currentReview === review.length - 1 ? 0 : currentReview + 1
    );
  };

  useEffect(() => {
    // Auto-scroll to the next slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentReview((prevSlide) => (prevSlide + 1) % review.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [review.length]);

  return (
    <div className="container pt-24 h-screen  px-10 m-auto overflow-scroll hidescroll relative text-center ">
      <PageHeading
        title="MY CLIENTS"
        text="Trusted Partnerships: A Showcase of my Collaborative Projects"
      />
      <div className="flex flex-col items-center mx-10  my-8 ">
        <img
          src={review[currentReview].photo}
          alt={review[currentReview].name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold">{review[currentReview].name}</h2>
        <p className="text-gray-500">{review[currentReview].title}</p>
      </div>
      <p className="lg:px-20 xl:px-40">{review[currentReview].review}</p>

      <div className="flex justify-center md:justify-between my-10 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full xl:px-10">
        <button
          onClick={prevReview}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 text-2xl px-2 rounded-full mr-4"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={nextReview}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 text-2xl px-2 rounded-full"
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Review;
