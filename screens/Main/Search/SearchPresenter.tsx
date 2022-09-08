import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../../colors';
import RoomCard from '../../../components/RoomCard';
import { RoomType } from '../../../redux/roomsSlice';
import { SCREEN_HEIGHT } from '../../../utils';

export interface ISearchPresenterProps {
  goBack: () => void;
  loading: boolean;
  displayResult: RoomType[];
  setBeds: React.Dispatch<React.SetStateAction<number | undefined>>;
  setBedrooms: React.Dispatch<React.SetStateAction<number | undefined>>;
  setBathrooms: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
  submit: () => Promise<void>;
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
  padding: 13px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.red};
`;
const SearchText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: white;
`;
const ResultCountContainer = styled.View`
  padding: 12px 10px;
`;
const ResultCount = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.darkGray};
`;

const SearchPresenter: React.FC<ISearchPresenterProps> = ({
  goBack,
  loading,
  displayResult,
  setName,
  setBeds,
  setBedrooms,
  setBathrooms,
  setMaxPrice,
  setMinPrice,
  submit,
}) => {
  return (
    <Container>
      <SearchBox>
        <SearchTextInput
          autoFocus={true}
          placeholder={'Search by city...'}
          onChangeText={(text: string) => setName(text)}
        />
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
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          paddingBottom: 30,
        }}
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
      <TouchableOpacity
        onPress={submit}
        style={{
          paddingHorizontal: 10,
        }}
      >
        <SearchContainer>
          <SearchText>
            {loading ? (
              <ActivityIndicator color={'white'} size={'small'} />
            ) : (
              'Search'
            )}
          </SearchText>
        </SearchContainer>
      </TouchableOpacity>
      {displayResult.length > 0 && (
        <ResultCountContainer>
          <ResultCount>{`Results: ${displayResult.length}`}</ResultCount>
        </ResultCountContainer>
      )}
      <ScrollView
        style={{ width: '100%', marginTop: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 5 }}
      >
        {displayResult.length > 0
          ? displayResult.map((room) => <RoomCard key={room.id} room={room} />)
          : null}
      </ScrollView>
    </Container>
  );
};

export default SearchPresenter;
