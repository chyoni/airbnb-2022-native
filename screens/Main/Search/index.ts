import { RootState } from "./../../../redux/store";
import { Dispatch, Action } from "@reduxjs/toolkit";
import SearchContainer from "./SearchContainer";
import { searchRooms, clearSearchRooms } from "../../../redux/roomsSlice";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    searchRooms: (params: any) => dispatch<any>(searchRooms(params)),
    clearSearchRooms: () => dispatch<any>(clearSearchRooms()),
  };
}

function mapStateToProps(state: RootState) {
  return { searchResult: state.roomsReducer.searchResult };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
