import axios, { AxiosTransformer } from "axios";
import { history } from "../history";
import { Research, ResearchProgram } from "../types";
import { ABCUser } from "./types";

const http = axios.create({
  baseURL: "https://abcframework.herokuapp.com",
  transformRequest: [
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
    function transformRequestWithBearerToken(data: any, headers: any) {
      const authToken = localStorage.getItem("authToken");
      headers["Authorization"] = `Bearer ${authToken}`;
      headers["Access-Control-Allow-Origin"] = "*";

      return data;
    },
  ],
});

const httpWithFallback = async (func: any) => {
  try {
    const res = await func(); 
    return res;
  } catch (e) {
    history.push(`/`);
    localStorage.setItem("authToken", "");
    throw e;
  }
}

const ABCApiService = {
  async health(): Promise<string> {
    const response = await http.get('/health');
    return response.data;
  },

  async login(): Promise<ABCUser> {
    return await httpWithFallback(async () => {
      const response = await http.post(`/login`);
      return response.data;
    });
  },

  async fetchResearches(): Promise<ResearchProgram[]> {
    return await httpWithFallback(async () => {
      const response = await http.get(`/research`);
      return response.data;
    });
  },

  async addResearchProgram(researchProgram: ResearchProgram): Promise<ResearchProgram> {
    return await httpWithFallback(async () => {
      const response = await http.post(`/research`, researchProgram);
      return response.data;
    });
  },

  async fetchResearch(id: string): Promise<ResearchProgram> {
    return await httpWithFallback(async () => {
      const response = await http.get(`/research/${id}`);
      return response.data;
    });
  },

  async addResearch(id: string, research: Research): Promise<Research> {
    return await httpWithFallback(async () => {
      const response = await http.post(`/research/${id}`, research);
      return response.data;
    });
  },

  async deleteResearchProgram(id: string): Promise<void> {
    return await httpWithFallback(async () => {
      await http.delete(`/research/${id}`);
    });
  },

  async deleteResearch(researchId: string, id: string): Promise<void> {
    return await httpWithFallback(async () => {
      await http.delete(`/research/${researchId}/${id}`);
    });
  },

  async editResearchProgram(id: string, researchProgram: { title: string, description: string }): Promise<void> {
    return await httpWithFallback(async () => {
      await http.put(`/research/${id}`, researchProgram);
    });
  },

  async editResearch(researchProgramId: string, researchId: string, research: Research): Promise<void> {
    return await httpWithFallback(async () => {
      await http.put(`/research/${researchProgramId}/${researchId}`, research);
    });
  },
};

export default ABCApiService;