import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { RootState } from "../../../redux/store";
import { getMe } from "../../../redux/usersSlice";
import ProfileContainer from "./ProfileContainer";

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    getMe: () => dispatch<any>(getMe()),
  };
}

function mapStateToProps(state: RootState) {
  return {
    me: state.usersReducer.me,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
