import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useEffect, useRef, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";

import SlideInNotifications from "../../components/SlideInNotifications";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../../context/WishlistContext";
import { usePets } from "../../hooks/usePets";
import { getPetDetails } from "../../lib/pets/pets";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
      >
        Open Modal
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white shadow-xl"
          >
            <FiAlertCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
            <div className="relative z-10">
              <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-indigo-600">
                <FiAlertCircle />
              </div>
              <h3 className="mb-2 text-center text-3xl font-bold">
                One more thing!
              </h3>
              <p className="mb-6 text-center">
                Are you sure you want to adopt this pet?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  No
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-90"
                >
                  Yes
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ViewPetPage = ({
  addPetToSelection,
  removePetFromSelection,
  selectedPets,
}) => {
  const { id } = useParams();
  // const { accessToken } = useGlobalContext();
  // const queryClient = useQueryClient();
  // const petDetailsQuery = useQuery({
  //   queryKey: ["pets", id],
  //   queryFn: () => getPetDetails(id),
  //   enabled: !!id && !!accessToken,
  // });
  const { petDetailsQuery } = usePets(id);
  const [isClicked, setIsClicked] = useState(getFavorites().includes(id));
  const notifRef = useRef();

  useEffect(() => {
    setIsClicked(getFavorites().includes(id));
  }, [id]);

  const handleClick = () => {
    if (isClicked) {
      removeFavorite(id);
      removePetFromSelection(id);
    } else {
      addFavorite(id);
      addPetToSelection(id);
    }
    setIsClicked(!isClicked);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    notifRef.current.addNotification({
      id: Math.random(),
      text: isClicked ? "Removed from favorites" : "Added to favorites",
    });
    handleClick();
  };

  if (petDetailsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (petDetailsQuery.isError) {
    return <div>Error loading pet details</div>;
  }

  if (petDetailsQuery.isSuccess) {
    const petDetails = petDetailsQuery.data;

    return (
      <div className="bg-white py-28">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <LightGallery
              elementClassNames="grid gap-4 grid-cols-2 h-fit [&>*:first-child]:col-span-2"
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              {petDetails.images.map((image, index) => (
                <a href={image} key={index}>
                  <img
                    src={image}
                    loading="lazy"
                    alt="Pet"
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center"
                  />
                </a>
              ))}
            </LightGallery>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {petDetails.breed}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {petDetails.name}
                </h2>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    $15.00
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    $30.00
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <span className="text-sm">Shipping fee included</span>
              </div>

              <div className="flex gap-2.5">
                <ExampleWrapper />

                <a
                  href="#"
                  onClick={handleLinkClick}
                  className={`inline-block rounded-lg ${isClicked ? "bg-red-500" : "bg-gray-200"} px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:text-gray-700 md:text-base`}
                >
                  <SlideInNotifications ref={notifRef} />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-10 md:mt-16 lg:mt-20">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>
                <p className="text-gray-500">{petDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewPetPage;
