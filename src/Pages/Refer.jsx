import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Spinner from "../Components/Spinner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Refer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRefer = () => {
    const data = {
      referredBy: name,
      email: friendEmail,
      name: friendName,
    };

    if (name && friendEmail && friendName) {
      setLoading(true);
      axios
        .post("https://accredian-backend-task-lg7x.onrender.com/referrals", data)
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          toast.success("Referal Sent.");
          closeModal();
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    } else {
      toast.error("Please Fill All Details!");
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col w-full">
      <Toaster />
      {loading && <Spinner />}
      <header className="bg-gradient-to-r from-black to-white w-full py-12 md:py-20 lg:py-24">
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Refer & Earn with Our Program
            </h1>
            <p className="mt-4 text-lg text-white md:text-xl">
              Earn rewards by sharing our amazing products with your friends and
              family.
            </p>

            <div className="mt-7">
              <button
                className="rounded-full bg-black text-white px-6 py-2 text-lg font-medium"
                onClick={openModal}
              >
                Refer Now
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                className={
                  "w-[90%] md:w-[80%] lg:w-[35%] xl:w-[25%] bg-white relative border rounded"
                }
              >
                <div className="flex justify-between py-3 px-3 w-full">
                  <div className="w-full">
                    {" "}
                    <div className="px-2 w-full">
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-xl font-semibold">
                            Refer A Friend
                          </h1>
                          <p className="text-gray-600 font-medium">
                            Share our products and earn rewards.
                          </p>
                        </div>
                        <div>
                          <button onClick={closeModal}>
                            <IoCloseSharp className="block h-6 w-6 text-black" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <form className="space-y-4">
                          <div>
                            <label htmlFor="name" className="font-medium">
                              Your Name
                            </label>
                            <br />
                            <input
                              id="name"
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter your name"
                              className="border rounded focus:outline-none px-4 py-2 w-full mt-1"
                            />
                          </div>
                          <div>
                            <label htmlFor="name" className="font-medium">
                              Friend&apos;s Name
                            </label>
                            <br />
                            <input
                              id="name"
                              type="text"
                              value={friendName}
                              onChange={(e) => setFriendName(e.target.value)}
                              placeholder="Enter your friend's name"
                              className="border rounded focus:outline-none px-4 py-2 w-full mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="referral-email"
                              className="font-medium"
                            >
                              Friend&apos;s Email
                            </label>
                            <br />
                            <input
                              id="referral-email"
                              type="email"
                              value={friendEmail}
                              onChange={(e) => setFriendEmail(e.target.value)}
                              placeholder="Enter your friend's email"
                              className="border rounded focus:outline-none px-4 py-2 w-full mt-1"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="flex justify-end gap-3 mt-8">
                        <button
                          onClick={closeModal}
                          className="border rounded px-10 py-1 text-lg font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          className="rounded bg-black text-white px-5 py-1 text-lg font-medium"
                          onClick={handleRefer}
                        >
                          Refer Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                How it Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Discover the benefits of our Refer & Earn program and start
                earning rewards today.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:w-full">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <ShareIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Share</h3>
                <p className="mt-2 text-muted-foreground">
                  Refer your friends and family to our products and services.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <BadgeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Earn</h3>
                <p className="mt-2 text-muted-foreground">
                  Earn rewards for every successful referral.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <SmileIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Enjoy</h3>
                <p className="mt-2 text-muted-foreground">
                  Redeem your rewards and treat yourself or your loved ones.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Hear from our satisfied customers who have benefited from our
                Refer & Earn program.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <FaRegUser />
                  <div>
                    <p className="text-lg font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;I&apos;ve been using this product for months and the
                  Refer & Earn program has been a game-changer. I&apos;ve earned
                  so many rewards by sharing it with my friends.&quot;
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <FaRegUser />
                  <div>
                    <p className="text-lg font-medium">Jane Appleseed</p>
                    <p className="text-sm text-muted-foreground">
                      Loyal Customer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;The Refer & Earn program is such a great way to share
                  the products I love with my friends and family. The rewards
                  are amazing!&quot;
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <FaRegUser />
                  <div>
                    <p className="text-lg font-medium">Sarah Mayer</p>
                    <p className="text-sm text-muted-foreground">
                      Enthusiastic Referrer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  &quot;I love this program! It&apos;s so easy to share and earn
                  rewards. I&apos;ve already referred several friends and
                  can&apos;t wait to redeem my rewards.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 text-center text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <p>&copy; 2024 Refer & Earn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
