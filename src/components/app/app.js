import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";

import "./app.scss";
import { shampooRequested, shampooLoaded, shampooError } from "../actions"
import { ServiceContext } from "../context";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ShampooItem from "../shampoo-item/shampoo-item";

const ShampooList = ({shampoos}) => (
  <div className={'shampoo-list'}>
    {
      shampoos.map(shampoo => {
        return (
          <div className={'shampoo-list__item'}
               key={shampoo.id}>
            <ShampooItem item={shampoo} />
          </div>
        );
      })
    }
  </div>
);

const App = props => {

  const { shampooRequested, shampooLoaded, shampooError, shampoos, loading, error } = props;
  const shampooService = useContext(ServiceContext);

  useEffect(() => {
    let canceled = false;
    shampooRequested();
    shampooService.getShampoos()
      .then(data => !canceled && shampooLoaded(data))
      .catch(error => !canceled && shampooError(error))
    return () => canceled = true;
  }, [shampooService, shampooRequested, shampooLoaded, shampooError]);

  if (error) {
    return <ErrorIndicator/>;
  }

  if (loading) {
    return <Spinner/>;
  }

  return <ShampooList shampoos={shampoos} />;
};

const mapStateToProps = ({ shampoos, loading, error}) => {
  return {
    shampoos,
    loading,
    error
  };
};

const mapDispatchToProps = {
  shampooRequested,
  shampooLoaded,
  shampooError
};

export default connect(mapStateToProps, mapDispatchToProps)(App);