import { AnimatePresence, motion } from "framer-motion";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";

//npm install framer-motion react-icons

const SlideInNotifications = forwardRef((props, ref) => {
  const [notifications, setNotifications] = useState([]);

  useImperativeHandle(ref, () => ({
    addNotification(notification) {
      setNotifications((prev) => [notification, ...prev]);
    },
  }));

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed right-2 top-[75%] z-50 flex w-72 flex-col gap-1">
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification removeNotif={removeNotif} {...n} key={n.id} />
        ))}
      </AnimatePresence>
    </div>
  );
});

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="pointer-events-auto flex items-start gap-2 rounded bg-indigo-500 p-2 text-xs font-medium text-white shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <FiCheckSquare className="mt-0.5" />
      <span>{text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeNotif(id);
        }}
        className="ml-auto mt-0.5"
      >
        <FiX />
      </button>
    </motion.div>
  );
};

const generateRandomNotif = () => {
  const names = [
    "John Anderson",
    "Emily Peterson",
    "Frank Daniels",
    "Laura Williams",
    "Donald Sanders",
    "Tom Smith",
    "Alexandra Black",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);

  return {
    id: Math.random(),
    text: "New notification from ${names[randomIndex]}",
  };
};

export default SlideInNotifications;
