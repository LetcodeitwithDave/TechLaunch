import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/home")}
        className=" gap-1 flex flex-row py-2 px-3.5 rounded-md items-center  bg-gray-200   text-gray-500  "
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>
        <div>Back</div>
      </button>
    </div>
  );
}

export default BackButton;
