import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { RootState } from "../../../redux/store";
import { getMe } from "../../../redux/usersSlice";
import EditProfileContainer from "./EditProfileContainer";

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);
