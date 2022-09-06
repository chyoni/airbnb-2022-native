import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { MainChildrenParamList } from '../../../navigation/Main';
import { RoomType } from '../../../redux/roomsSlice';
import SearchPresenter from './SearchPresenter';

interface ISearchContainerProps {
  searchRooms: (params: any) => void;
  searchResult: RoomType[];
}

const SearchContainer: React.FC<
  StackScreenProps<MainChildrenParamList, 'Search'>
> = ({ navigation }, { searchRooms, searchResult }: ISearchContainerProps) => {
  console.log(searchResult);
  const [beds, setBeds] = useState<number>();
  const [bedrooms, setBedrooms] = useState<number>();
  const [bathrooms, setBathrooms] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [minPrice, setMinPrice] = useState<number>();
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
  return (
    <SearchPresenter
      goBack={goBack}
      beds={beds}
      bedrooms={bedrooms}
      bathrooms={bathrooms}
      maxPrice={maxPrice}
      minPrice={minPrice}
      search={searchRooms}
      searchResult={searchResult}
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
