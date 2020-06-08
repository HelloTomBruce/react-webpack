import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "@/redux/action/login";

const mapStateToProps = () => ({});

const mapDispatchToMethods = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

function Logout(props) {
    props.logout();
    props.history.replace("/");
    return null;
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToMethods
    )(Logout)
);
