import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { constants } from "fs/promises";


const FileUploadTest: React.FC = () => {

  const [title, setTitle] = useState<string>("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 꼭 필요

  }

  useEffect(() => {


  }, [])

  return (
    <div>
      <div></div>
    </div>
  );
};

export default FileUploadTest;
