import axios, { AxiosTransformer } from "axios";
import { history } from "../history";
import { TutorialInfo } from "../store/tutorial/types";
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
    if (e.message === "Request failed with status code 401") {
      history.push(`/`);
      localStorage.setItem("authToken", "");
    }
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
      const response = await http.get(`/programs`);
      return response.data;
    });
  },

  async addResearchProgram(researchProgram: ResearchProgram): Promise<ResearchProgram> {
    return await httpWithFallback(async () => {
      const response = await http.post(`/programs`, researchProgram);
      return response.data;
    });
  },

  async fetchResearch(id: string): Promise<ResearchProgram> {
    return await httpWithFallback(async () => {
      const response = await http.get(`/programs/${id}`);
      return response.data;
    });
  },

  async addResearch(id: string, research: Research): Promise<Research> {
    return await httpWithFallback(async () => {
      const response = await http.post(`/programs/${id}`, research);
      return response.data;
    });
  },

  async deleteResearchProgram(id: string): Promise<void> {
    return await httpWithFallback(async () => {
      await http.delete(`/programs/${id}`);
    });
  },

  async deleteResearch(researchId: string, id: string): Promise<void> {
    return await httpWithFallback(async () => {
      await http.delete(`/programs/${researchId}/${id}`);
    });
  },

  async editResearchProgram(id: string, researchProgram: { title: string, description: string }): Promise<void> {
    return await httpWithFallback(async () => {
      await http.put(`/programs/${id}`, researchProgram);
    });
  },

  async editResearch(researchProgramId: string, researchId: string, research: Research): Promise<void> {
    return await httpWithFallback(async () => {
      await http.put(`/programs/${researchProgramId}/${researchId}`, research);
    });
  },

  async getTutorialInfos (): Promise<TutorialInfo[]> {
    return await httpWithFallback(async () => {
      const response = await http.get(`/tutorial`);
      return response.data;
    });
  },
};

export default ABCApiService;