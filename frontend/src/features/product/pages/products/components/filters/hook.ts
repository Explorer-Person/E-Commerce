import { useFilterProductsMutation } from "@src/features/product/services/post/filterProducts/service";
import {
  determinePrice,
  searchElement,
  selectCategories,
  selectDiscountStatus,
  selectWeight,
} from "@src/features/product/slices/filter/slice";
import { storeProduct } from "@src/features/product/slices/product/slice";
import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import { useEffect } from "react";

const useFilter = () => {
  const dispatch = useAppDispatch();
  const filterDatas = useAppSelector(
    (state: RootState) => state.filter.filterDatas
  );

  const [filter, { data }] = useFilterProductsMutation();

  useEffect(() => {
    if (data) {
      dispatch(storeProduct(data.products));
    }
  }, [data, dispatch]);

  const getCheckCategory = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const category = target.name;
    console.log(filterDatas);

    dispatch(selectCategories(category));
  };
  const selectOptionDiscount = (event: React.MouseEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const discountStatus = target.value;

    dispatch(selectDiscountStatus(discountStatus));
  };
  const selectOptionWeight = (event: React.MouseEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const weight = target.value;

    dispatch(selectWeight(weight));
  };
  const determineInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const price = target.value;
    const inputName = target.name;

    const rangedPrice = {
      min: inputName === "min" ? Number(price) : filterDatas.rangedPrice.min,
      max: inputName === "max" ? Number(price) : filterDatas.rangedPrice.max,
    };

    dispatch(determinePrice(rangedPrice));
  };
  const searchInputElement = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const searchText = target.value;

    dispatch(searchElement(searchText));
  };

  const startFilter = () => {
    filter(filterDatas)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log(err));
  };

  return {
    functions: {
      getCheckCategory,
      selectOptionDiscount,
      selectOptionWeight,
      determineInputPrice,
      searchInputElement,
      startFilter,
    },
  };
};

export default useFilter;
