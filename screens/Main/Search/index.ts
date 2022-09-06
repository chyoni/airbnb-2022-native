import { RootState } from './../../../redux/store';
import { Dispatch, Action } from '@reduxjs/toolkit';
import SearchContainer from './SearchContainer';
import { searchRooms } from '../../../redux/roomsSlice';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    searchRooms: (params: any) => dispatch<any>(searchRooms(params)),
  };
}

function mapStateToProps(state: RootState) {
  return { searchResult: state.roomsReducer.searchResult };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
