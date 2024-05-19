import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { LIMIT_LIST_SCHOOL } from "../../../constants/schoolLimit";
import { useInView } from "react-intersection-observer";
import { UniversityData } from "../DynamicPagination/types";
import { useEffect } from "react";

export const useInfinite = () => {
  const fetchUniversities = async ({ pageParam = 0 }): Promise<UniversityData[]> => {
    return await axios.get(`http://universities.hipolabs.com/search?offset=${pageParam}&limit=${LIMIT_LIST_SCHOOL}`);
  };

  const { data, fetchNextPage, hasNextPage, isLoading, error } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["universitiesData"],
    queryFn: fetchUniversities,
    getNextPageParam: (lastPage, allPages) => allPages.length * LIMIT_LIST_SCHOOL,
  });

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return { data, isLoading, error, ref };
};
