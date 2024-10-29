import { ChangeEvent } from "react";
import { IPerson } from "./IPerson";

export interface IForm {
    page: number;
    pageSize: number;
    sortedData: IPerson[]
    handleSort: () => void;
    paginatedData: IPerson[];
    handlePageChange: (newpPage: number) => void;
    handlePageSize: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }