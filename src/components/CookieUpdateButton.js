"use client";

import { useState } from "react";
import CookieUpdateModal from "./CookieUpdateModal";

export default function CookieUpdateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleUpdateCookie = async (formData) => {
    try {
      setError("");
      const response = await fetch(
        "/api/update-cookie?token=2542532345&cookie=" +
          formData.cookie +
          "&pwd=" +
          formData.password
      );

      const data = await response.json();

      if (data.code === 200) {
        setIsModalOpen(false);
        // 刷新页面
        window.location.reload();
      } else {
        setError(data.message || "更新失败");
      }
    } catch (error) {
      console.error("Error updating cookie:", error);
      setError("更新失败，请重试");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
      >
        更新Cookie
      </button>
      <CookieUpdateModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setError("");
        }}
        onSubmit={handleUpdateCookie}
        error={error}
      />
    </>
  );
}
