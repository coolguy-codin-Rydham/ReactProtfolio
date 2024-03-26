import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import Alert from "./Alert";
const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      //throw
      setAlert({
        isAlert: true,
        message: "Required fields cannot be empty",
        status: "warning",
      });

      setInterval(()=>{
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      },4000)
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          setData({
            firstName:"",
            lastName:"",
            email:"",
            message:""
          })
          setAlert({
            isAlert: true,
            message: "Thanks for Contacting me",
            status: "success",
          });
          setInterval(()=>{
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          },4000)
        })
        .catch((err) => {
          setAlert({
            isAlert: true,
            message: `Error:${err.message}`,
            status: "danger",
          });
          setInterval(()=>{
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          },4000)
        });
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full gap-12 my-12 "
    >
      {/* Toast Alert Notif */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      {/* Title */}
      <div className="flex items-center justify-center w-full py-24">
        <motion.div
          initial={{ opacity: 0.4, width: 0, fontSize: 0 }}
          whileInView={{ opacity: 1, width: 200, fontSize: "20px" }}
          exit={{ opacity: 0.4, width: 0, fontSize: 0 }}
          className="flex items-center justify-center w-full gap-4"
        >
          <img src={Leaf1} className="object-contain w-6 h-auto " />
          <div className="flex">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Contact&nbsp;
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Me
            </p>
          </div>
          <img src={Leaf2} className="object-contain w-6 h-auto " />
        </motion.div>
      </div>

      {/* Main Content*/}

      <motion.div initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      exit={{opacity:0, y:50}}
      transition={{duration:0.4}}
      className="flex flex-col items-center justify-start w-full gap-4 ">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          {/* Name */}
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
            <input
              name="firstName"
              type="text"
              value={data.firstName}
              onChange={(e) => handleTextChange(e)}
              placeholder="First Name... "
              className="w-full px-4 py-3 bg-transparent border rounded-md outline-none text-texlight border-white/30 focus:border-primary"
              style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.6" }}
            />
            <input
              name="lastName"
              type="text"
              value={data.lastName}
              onChange={(e) => handleTextChange(e)}
              placeholder="Last Name... "
              className="w-full px-4 py-3 bg-transparent border rounded-md outline-none text-texlight border-white/30 focus:border-primary"
              style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.6" }}
            />
          </div>
          {/* Email */}
          <input
            name="email"
            type="Email"
            value={data.email}
            onChange={(e) => handleTextChange(e)}
            placeholder="Email... "
            className="w-full px-4 py-3 bg-transparent border rounded-md outline-none text-texlight border-white/30 focus:border-primary"
            style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.6" }}
          />
          <textarea
            name="message"
            cols="0"
            value={data.message}
            onChange={(e) => handleTextChange(e)}
            placeholder="Message..."
            rows="10"
            className="w-full px-4 py-3 bg-transparent border rounded-md outline-none text-texlight border-white/30 focus:border-primary"
            style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.6" }}
          ></textarea>

          <div className="flex items-center justify-center w-full lg:justify-end">
            <button
              className="w-full px-12 py-3 rounded-md bg-gradient-to-br from-primary to-secondary lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
