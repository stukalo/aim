import React from "react";
import ErrorPage from "next/error";

const protectedResource = (Resource, roles = []) => {
  const ProtectedResource = (props) => {
    const { currentUser } = props;
    console.log('> ssr currentUser', currentUser, roles)

    if (!roles.includes(currentUser?.role)) {
      console.log('> ssr error 403');
      return <ErrorPage statusCode={403} />;
    }

    console.log('> ssr resource');
    return <Resource {...props}/>;
  };

  if (Resource.getInitialProps) {
    ProtectedResource.getInitialProps = (...params) => {
      return Resource.getInitialProps(...params);
    };
  }

  return ProtectedResource;
};

export default protectedResource;
