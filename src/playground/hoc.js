// Higher Order Component - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstraction state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1>Info</h1>
        <p>
            The info is:
          {' '}
            {props.info}
        </p>
    </div>
);

const withAdminWaring = WrappedComponent => props => (
    <div>
        {props.isAdmin && <p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props} />
    </div>
);

const requireAuthentication = WrappedComponent => props => (
    <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
                <p>Please login to see the info!</p>
            )}

    </div>
);

const AdminInfo = withAdminWaring(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are de details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are de details" />, document.getElementById('app'));
