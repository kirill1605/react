import { PaginationWrapper, ObserverBlock, CardWrapper } from "./styles";
import Index from "../CardUniversity";
import { useDynamicPagination } from "./hook";

export const DynamicPagination = () => {
  const { universitiesData, loading, ref } = useDynamicPagination();

  return (
    <>
      <PaginationWrapper>
        <CardWrapper>
          {universitiesData?.length > 0 &&
            universitiesData.map((university, index) => <Index key={index} data={university} />)}
          {!loading && <ObserverBlock ref={ref} />}
        </CardWrapper>
      </PaginationWrapper>
    </>
  );
};
