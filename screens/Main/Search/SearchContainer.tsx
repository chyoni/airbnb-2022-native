import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { MainChildrenParamList } from "../../../navigation/Main";
import { clearSearchRooms, RoomType } from "../../../redux/roomsSlice";
import SearchPresenter from "./SearchPresenter";

interface ISearchContainerProps {
  searchRooms: (params: any) => void;
  clearSearchRooms: () => void;
  searchResult: RoomType[];
}

const SearchContainer: React.FC<ISearchContainerProps> = ({
  searchRooms,
  clearSearchRooms,
  searchResult,
}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [beds, setBeds] = useState<number>();
  const [bedrooms, setBedrooms] = useState<number>();
  const [bathrooms, setBathrooms] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [minPrice, setMinPrice] = useState<number>();
  const [displayResult, setDisplayResult] = useState<RoomType[]>([]);
  const submit = async () => {
    // beds가 undefined이 아니라면, {} 안에 것을 spread해라.
    const form = {
      ...(beds && { beds: beds }),
      ...(bedrooms && { bedrooms: bedrooms }),
      ...(bathrooms && { bathrooms: bathrooms }),
      ...(maxPrice && { max_price: maxPrice }),
      ...(minPrice && { min_price: minPrice }),
    };
    searchRooms(form);
  };
  const goBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    clearSearchRooms();
  }, []);
  useEffect(() => {
    setLoading(true);
    setDisplayResult(searchResult);
    setLoading(false);
  }, [searchResult]);
  return (
    <SearchPresenter
      goBack={goBack}
      loading={loading}
      beds={beds}
      bedrooms={bedrooms}
      bathrooms={bathrooms}
      maxPrice={maxPrice}
      minPrice={minPrice}
      displayResult={displayResult}
      search={searchRooms}
      setBeds={setBeds}
      setBedrooms={setBedrooms}
      setBathrooms={setBathrooms}
      setMaxPrice={setMaxPrice}
      setMinPrice={setMinPrice}
      submit={submit}
    />
  );
};

export default SearchContainer;
