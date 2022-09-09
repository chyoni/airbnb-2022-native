import { connect } from 'react-redux';
import { RootState } from './../../../redux/store';
import MapContainer from './MapContainer';

function mapStateToProps(state: RootState) {
  return { rooms: state.roomsReducer.explore.rooms };
}

export default connect(mapStateToProps, null)(MapContainer);
