import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMeasure from "react-use-measure";

import NeuButton from "./NeuButton";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = ({ pets, title }) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [filterPaid, setFilterPaid] = useState(true); // Manage filter state here

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (pets.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  const filteredPets = pets.filter((pet) => pet.isPaid === filterPaid);

  return (
    <section className="bg-neutral-100 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="mb-4 text-2xl">{title}</h2>
              <NeuButton
                filterPaid={filterPaid}
                setFilterPaid={setFilterPaid}
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <ArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} {...pet} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PetCard = ({ id, image, title, abstract }) => {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
      onClick={() => navigate(`/pets/${id}`)}
    >
      <img
        src={image}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a ${title}`}
      />

      <p className="mt-1.5 text-base font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{abstract}</p>
    </div>
  );
};

export default CardCarousel;
