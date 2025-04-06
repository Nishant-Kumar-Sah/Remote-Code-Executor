import { PROBLEM_SERVICE_BASE_URL } from "../config/serverConfig";
import axios from "axios"; 

export const fetchAllProblems = async () => {
  const res = await axios.get(`${PROBLEM_SERVICE_BASE_URL}/api/v1/problems`);
  return res.data.data;
};
