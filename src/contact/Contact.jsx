import React, { useState } from "react";
import Title from "../Components/layout/Title";
import ContactLeft from "./ContactLeft";
import { Button } from "react-scroll";

function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErrMsg("Your Name is required");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you, Your Messages has been sent Successfully!`);
      setErrMsg("");
      setUserName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validation is here
    if (userName.trim() === "") {
      setErrMsg("Your Name is required");
      setSuccessMsg("");
      return;
    }
    if (emailValidation === "") {
      setErrMsg("Your Email is required");
      setSuccessMsg("");
      return;
    }
    if (!emailValidation()) {
      setErrMsg("Give a valid Email");
      setSuccessMsg("");
      return;
    }
    if (subject.trim() === "") {
      setErrMsg("Give your Subject");
      setSuccessMsg("");
      return;
    }
    if (message.trim() === "") {
      setErrMsg("Give your Message");
      setSuccessMsg("");
      return;
    }

    const formData = {
      access_key: process.env.ACCESS_FILE,
      userName,
      email,
      subject,
      message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      setSuccessMsg(
        `Thank you ${userName}, your message has been sent successfully!`
      );
      setErrMsg("");
      setUserName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setErrMsg("Something went wrong. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Let's Build Something Amazing Together!"
          des=" My Contact"
        />
      </div>
      <div className="w-full pt-10">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />

          {/*Contact Form Starts From here */}
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={onSubmit}
              className="w-full flex flex-col py-2 lgl:py-5 lgl:gap-6 gap-2"
            >
              {" "}
              {/*Form Starts From here */}
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  `Thank you dear ${userName}, Your Messages has been sent
                  Successfully!`
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    {/** This is Name Section div is here. User Write their Email here **/}
                    Your Name
                  </p>
                  <input
                    name="userName"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className={` ${
                      errMsg === "User Name is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                {/** This is Email Section div is here. User put their Email here **/}
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Email
                </p>
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={` ${
                    errMsg === "Give a valid Email!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                {/** This is Subject Section div is here. User put their Subject here **/}
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Subject
                </p>
                <input
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={` ${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                {/** This is Message Section div is here. User write their MEssage here **/}
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  cols="30"
                  rows="10"
                  className={` ${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactInput`}
                  name="message"
                />
              </div>
              <div>
                {" "}
                {/** This is send Button div is here **/}
                <button
                  type="submit"
                  value="submit"
                  // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
