import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { getFavs } from '../../../redux/usersSlice';
import SavedContainer from './SavedContainer';

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    getFavs: () => dispatch<any>(getFavs()),
  };
}

export default connect(null, mapDispatchToProps)(SavedContainer);
