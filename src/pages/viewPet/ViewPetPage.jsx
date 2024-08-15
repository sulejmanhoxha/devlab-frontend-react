import { useQuery, useQueryClient } from "@tanstack/react-query";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../../context/GlobalContext";
import { getPetDetails } from "../../lib/pets/pets";

const ViewPetPage = () => {
  const { id } = useParams();
  const { accessToken } = useGlobalContext();
  const queryClient = useQueryClient();
  const petDetailsQuery = useQuery({
    queryKey: ["pets", id],
    queryFn: () => getPetDetails(id, accessToken),
    enabled: !!id && !!accessToken,
  });

  if (petDetailsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (petDetailsQuery.isError) {
    return <div>Error loading pet details</div>;
  }

  if (petDetailsQuery.isSuccess) {
    const petDetails = petDetailsQuery.data;

    // {
    //   "pet_type_id": 1,
    //   "pet_breed": "string",
    //   "pet_name": "string",
    //   "pet_gender": "string",
    //   "pet_age": 0,
    //   "pet_size": "string",
    //   "pet_coatLength": "string",
    //   "pet_color": "string",
    //   "medical_card": "string",
    //   "location": 1,
    //   "pet_id": 2,
    //   "user_id": 3,
    //   "pet_type": {
    //     "pet_type": "cat",
    //     "pet_type_id": 1
    //   }
    // }
    return (
      <div className="bg-white py-28">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* <LightGallery
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
            </LightGallery> */}

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <ul className="mt-4 divide-y overflow-hidden rounded-md border">
                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Pet name
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.pet_name}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Gender
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.pet_gender}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Age
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.pet_age}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Size
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.pet_size}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Coat Length
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.pet_coatLength}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Color
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.pet_color}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Medical Card
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.medical_card}
                    </div>
                  </li>

                  <li className="flex items-center">
                    <div className="w-1/3 bg-gray-100 px-3 py-1 dark:bg-gray-600 dark:text-white">
                      Location
                    </div>
                    <div className="px-3 py-1 dark:text-white">
                      {petDetails.location}
                    </div>
                  </li>
                </ul>
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
