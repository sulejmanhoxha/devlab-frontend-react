import { joiResolver } from "@hookform/resolvers/joi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../../../context/GlobalContext";
import { usePets } from "../../../hooks/usePets";
import { getPetDetails } from "../../../lib/pets/pets";
import styles from "./postPet.module.css";

const schema = Joi.object({
  pet_breed: Joi.string().required(),
  pet_name: Joi.string().required(),
  pet_gender: Joi.string().valid("Male", "Female").required(),
  pet_age: Joi.number().min(0).required(),
  pet_size: Joi.string().valid("Small", "Medium", "Large").required(),
  pet_coatLength: Joi.string().valid("Short", "Medium", "Long").required(),
  pet_color: Joi.string().required(),
  medical_card: Joi.string().optional(),
  location: Joi.number().required(),
}).required();

const UpdatePetsPage = () => {
  const { id } = useParams();
  const { accessToken } = useGlobalContext();
  const { updatePetMutation } = usePets();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (values) => {
    console.log("update pet", values);
    updatePetMutation.mutate({
      data: values,
      id,
      accessToken,
    });
  };

  return (
    <div className={`${styles.CreatePostContainer} container mx-auto`}>
      <h1 className={styles.title}>Update Your Pet</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label htmlFor="pet_breed">Breed</label>
          <input
            type="text"
            className={styles.input}
            {...register("pet_breed")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.pet_breed?.message}
          </p>
        </div>

        <div>
          <label htmlFor="pet_name">Name</label>
          <input
            type="text"
            className={styles.input}
            {...register("pet_name")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.pet_name?.message}
          </p>
        </div>

        <div>
          <h2>Gender</h2>
          <div className="flex max-w-xs items-center justify-start">
            <input
              {...register("pet_gender")}
              type="radio"
              name="pet_gender"
              value={"Male"}
              className={`${styles.input} mr-4 mt-0 w-fit p-0`}
            />
            <label htmlFor="pet_gender">Male</label>
          </div>

          <div className="flex max-w-xs items-center justify-start">
            <input
              {...register("pet_gender")}
              type="radio"
              name="pet_gender"
              value={"Female"}
              className={`${styles.input} mr-4 mt-0 w-fit p-0`}
            />
            <label htmlFor="pet_gender">Female</label>
          </div>
          <p className="mt-1 text-sm text-red-500">
            {errors.pet_gender?.message}
          </p>
        </div>

        <div>
          <label htmlFor="pet_age">Age</label>
          <input
            type="number"
            className={styles.input}
            {...register("pet_age")}
          />
          <p className="mt-1 text-sm text-red-500">{errors.pet_age?.message}</p>
        </div>

        <div>
          <label htmlFor="pet_size">Size</label>
          <select {...register("pet_size")} className={styles.select}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <p className="mt-1 text-sm text-red-500">
            {errors.pet_size?.message}
          </p>
        </div>

        <div>
          <label htmlFor="pet_coatLength">Coat Length</label>
          <select {...register("pet_coatLength")} className={styles.select}>
            <option value="Short">Short</option>
            <option value="Medium">Medium</option>
            <option value="Long">Long</option>
          </select>
          <p className="mt-1 text-sm text-red-500">
            {errors.pet_coatLength?.message}
          </p>
        </div>

        <div>
          <label htmlFor="pet_color">Color</label>
          <input
            type="text"
            className={styles.input}
            {...register("pet_color")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.pet_color?.message}
          </p>
        </div>

        <div>
          <label htmlFor="medical_card">Medical Card</label>
          <input
            type="text"
            className={styles.input}
            {...register("medical_card")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.medical_card?.message}
          </p>
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className={styles.input}
            {...register("location")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.location?.message}
          </p>
        </div>

        <div>
          <button
            disabled={isSubmitting}
            type="submit"
            className={styles.button}
          >
            {isSubmitting ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePetsPage;
