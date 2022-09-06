import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../colors';
import { SCREEN_HEIGHT } from '../../../utils';

export interface ISearchPresenterProps {
  goBack: () => void;
}

const Container = styled.View``;
const SearchBox = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 12}px;
  flex-direction: row;
  padding: 10px 10px;
  align-items: center;
`;
const SearchTextInput = styled.TextInput`
  width: 80%;
  height: 30px;
  padding: 10px 10px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: white;
  box-shadow: 1px 2.5px 2.5px rgba(200, 200, 200, 0.5);
`;
const GoBackText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: white;
`;
const FilterContainer = styled.View`
  margin-right: 12px;
  align-items: center;
`;
const FilterLabel = styled.Text`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
`;
const Filter = styled.TextInput`
  padding: 6px 6px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 2.5px 2.5px rgba(200, 200, 200, 0.5);
  min-width: 70px;
`;
const SearchContainer = styled.View`
  width: 100%;
  padding: 15px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.red};
`;
const SearchText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

const SearchPresenter: React.FC<ISearchPresenterProps> = ({ goBack }) => {
  const [beds, setBeds] = useState<number>();
  const [bedrooms, setBedrooms] = useState<number>();
  const [bathrooms, setBathrooms] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [minPrice, setMinPrice] = useState<number>();
  const submit = () => {
    // beds가 undefined이 아니라면, {} 안에 것을 spread해라.
    const form = {
      ...(beds && { beds: beds }),
      ...(bedrooms && { bedrooms: bedrooms }),
      ...(bathrooms && { bathrooms: bathrooms }),
      ...(maxPrice && { max_price: maxPrice }),
      ...(minPrice && { min_price: minPrice }),
    };
    console.log(form);
  };
  return (
    <Container>
      <SearchBox>
        <SearchTextInput autoFocus={true} placeholder={'Search by city...'} />
        <TouchableOpacity
          onPress={goBack}
          style={{ padding: 10, backgroundColor: colors.red, borderRadius: 10 }}
        >
          <GoBackText>Cancel</GoBackText>
        </TouchableOpacity>
      </SearchBox>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
      >
        <FilterContainer>
          <FilterLabel>Beds</FilterLabel>
          <Filter
            placeholder={'0'}
            keyboardType={'number-pad'}
            onChangeText={(text: number) => setBeds(text)}
          />
        </FilterContainer>
        <FilterContainer>
          <FilterLabel>Bedrooms</FilterLabel>
          <Filter
            placeholder={'0'}
            keyboardType={'number-pad'}
            onChangeText={(text: number) => setBedrooms(text)}
          />
        </FilterContainer>
        <FilterContainer>
          <FilterLabel>Bathrooms</FilterLabel>
          <Filter
            placeholder={'0'}
            keyboardType={'number-pad'}
            onChangeText={(text: number) => setBathrooms(text)}
          />
        </FilterContainer>
        <FilterContainer>
          <FilterLabel>Max. price</FilterLabel>
          <Filter
            placeholder={'$0'}
            keyboardType={'number-pad'}
            onChangeText={(text: number) => setMaxPrice(text)}
          />
        </FilterContainer>
        <FilterContainer>
          <FilterLabel>Min. price</FilterLabel>
          <Filter
            placeholder={'$0'}
            keyboardType={'number-pad'}
            onChangeText={(text: number) => setMinPrice(text)}
          />
        </FilterContainer>
      </ScrollView>
      <TouchableOpacity onPress={submit} style={{ paddingHorizontal: 10 }}>
        <SearchContainer>
          <SearchText>Search</SearchText>
        </SearchContainer>
      </TouchableOpacity>
    </Container>
  );
};

export default SearchPresenter;
