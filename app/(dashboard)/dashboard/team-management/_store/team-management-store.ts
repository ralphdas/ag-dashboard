// zustand team management store

import { create } from "zustand";

type TeamManagmentStore = {
  isLoading: boolean;
  results: any[];
  hasError: boolean;
  errorMessage: string;
  totalResults: number;
  skip: number;
  limit: number;
  nextPage: () => void;
  previousPage: () => void;
  search: (query: string) => void;
  _initialize: () => void;
};

const useTeamManagmentStore = create<TeamManagmentStore>((set) => ({
  isLoading: false,
  results: [],
  hasError: false,
  errorMessage: "",
  totalResults: 0,
  skip: 0,
  limit: 10,
  nextPage: () => {
    set((state) => ({ skip: state.skip + state.limit }));
  },
  previousPage: () => {
    set((state) => ({ skip: state.skip - state.limit }));
  },
  search: (query: string) => {
    console.log(query);
  },
  _initialize: () => {
    console.log("initialize");
  },
}));
