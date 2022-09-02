import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { getRooms } from "../../../redux/roomsSlice";
import { RootState } from "../../../redux/store";
import ExploreContainer from "./ExploreContainer";

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    getRooms: () => dispatch<any>(getRooms()),
  };
}

function mapStateToProps(state: RootState) {
  return state.roomsReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
