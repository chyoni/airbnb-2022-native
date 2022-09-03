import { RootState } from './../../../redux/store';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { getFavs } from '../../../redux/usersSlice';
import SavedContainer from './SavedContainer';

function mapStateToProps(state: RootState) {
  return { favs: state.roomsReducer.favs };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    getFavs: () => dispatch<any>(getFavs()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);
