import React, { Component } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }

  render() {
    const { name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />

    return (
      <>
        <Link to='/' className='btn btn-light'>
          Back To Search
      </Link>
      Hireable: {' '}
        {hireable ? (<i className='fa fa-check text-success' />) : (<i className='fa fa-times-circle text-danger' />)}
      </>
    )
  }
}

export default User;
