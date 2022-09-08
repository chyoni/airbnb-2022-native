import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { RoomType } from '../../../redux/roomsSlice';
import SearchPresenter from './SearchPresenter';

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
  const [name, setName] = useState<string>();
  const [beds, setBeds] = useState<number>();
  const [bedrooms, setBedrooms] = useState<number>();
  const [bathrooms, setBathrooms] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [minPrice, setMinPrice] = useState<number>();
  const [displayResult, setDisplayResult] = useState<RoomType[]>([]);
  const submit = async () => {
    // beds가 undefined이 아니라면, {} 안에 것을 spread해라.
    const form = {
      ...(name && { name: name }),
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
    Keyboard.dismiss();
  }, [searchResult]);
  return (
    <SearchPresenter
      goBack={goBack}
      setName={setName}
      loading={loading}
      displayResult={displayResult}
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
