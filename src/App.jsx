import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import AppMenu from "./components/AppMenu";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

const AppDisplay = () => (
  <div>
    <header>
      <div className="row">
        <TopHeader />
      </div>
      <div className="row">
        <AppMenu />
      </div>
    </header>
    <h1>
      <Link to={"/"}>Your Open Questions</Link>
    </h1>
    <div>
      {/* <QuestionList /> */}
      <Route exact path="/" render={() => <QuestionList />} />
      <Route
        exact
        path="/questions/:id"
        render={({ match }) => <QuestionDetail question_id={match.params.id} />}
      />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

// export default AppDisplay;
export default connect(mapStateToProps)(AppDisplay);
