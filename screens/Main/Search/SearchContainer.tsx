import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { MainChildrenParamList } from "../../../navigation/Main";
import SearchPresenter from "./SearchPresenter";

const SearchContainer: React.FC<
  StackScreenProps<MainChildrenParamList, "Search">
> = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return <SearchPresenter goBack={goBack} />;
};

export default SearchContainer;
