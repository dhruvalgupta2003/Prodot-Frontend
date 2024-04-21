import { useState } from "react";
import emailjs from "emailjs-com";

const RequestCallback = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You need to replace these values with your own emailJS template parameters
    const templateParams = {
      fullName,
      company,
      phoneNo,
      description,
    };

    // You need to replace these values with your own emailJS service, template, and user ID
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        // You can add your own success message or redirect here
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // You can add your own error handling here
      });
  };

  return (
    <>
      {/* <h1 className="font-bold text-center text-[72px]">Request Callback</h1>
      <form onSubmit={handleSubmit} className=" w-full my-auto">
        <div className="grid grid-cols-2 gap-4 w-full mx-auto">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-[400px] h-[80px] mt-4 p-2 rounded-[35px]focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Interested Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-[400px] h-[80px] mt-4 p-2 rounded-[35px] focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone No"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-[400px] h-[80px] mt-4 p-2 rounded-[35px]focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[400px] h-[80px] mt-4 p-2 rounded-[35px] focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="block w-[207px] h-[58px] mx-auto item-center px-4 py-2 bg-tertiary text-black text-lg rounded-[30px] hover:bg-blue-600 focus:outline-none focus:bg-tertiary"
        >
          Submit
        </button>
      </form>
    </> */}

    </>
  );
};

export default RequestCallback;
