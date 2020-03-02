import React, { Component } from 'react';
import UserItem from './layout/UserItem';

class Users extends Component {
  state = {
    users: [{
      "login": "teaguehannam",
      "id": 26565276,
      "avatar_url": "https://avatars3.githubusercontent.com/u/26565276?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/teaguehannam",
      "html_url": "https://github.com/teaguehannam",
      "followers_url": "https://api.github.com/users/teaguehannam/followers",
      "following_url": "https://api.github.com/users/teaguehannam/following{/other_user}",
      "gists_url": "https://api.github.com/users/teaguehannam/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/teaguehannam/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/teaguehannam/subscriptions",
      "organizations_url": "https://api.github.com/users/teaguehannam/orgs",
      "repos_url": "https://api.github.com/users/teaguehannam/repos",
      "events_url": "https://api.github.com/users/teaguehannam/events{/privacy}",
      "received_events_url": "https://api.github.com/users/teaguehannam/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "dakoriah",
      "id": 54644317,
      "node_id": "MDQ6VXNlcjU0NjQ0MzE3",
      "avatar_url": "https://avatars3.githubusercontent.com/u/54644317?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/dakoriah",
      "html_url": "https://github.com/dakoriah",
      "followers_url": "https://api.github.com/users/dakoriah/followers",
      "following_url": "https://api.github.com/users/dakoriah/following{/other_user}",
      "gists_url": "https://api.github.com/users/dakoriah/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/dakoriah/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/dakoriah/subscriptions",
      "organizations_url": "https://api.github.com/users/dakoriah/orgs",
      "repos_url": "https://api.github.com/users/dakoriah/repos",
      "events_url": "https://api.github.com/users/dakoriah/events{/privacy}",
      "received_events_url": "https://api.github.com/users/dakoriah/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "ardissam0",
      "id": 50143394,
      "node_id": "MDQ6VXNlcjUwMTQzMzk0",
      "avatar_url": "https://avatars0.githubusercontent.com/u/50143394?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ardissam0",
      "html_url": "https://github.com/ardissam0",
      "followers_url": "https://api.github.com/users/ardissam0/followers",
      "following_url": "https://api.github.com/users/ardissam0/following{/other_user}",
      "gists_url": "https://api.github.com/users/ardissam0/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ardissam0/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ardissam0/subscriptions",
      "organizations_url": "https://api.github.com/users/ardissam0/orgs",
      "repos_url": "https://api.github.com/users/ardissam0/repos",
      "events_url": "https://api.github.com/users/ardissam0/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ardissam0/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "kkslider2130",
      "id": 57090417,
      "node_id": "MDQ6VXNlcjU3MDkwNDE3",
      "avatar_url": "https://avatars2.githubusercontent.com/u/57090417?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kkslider2130",
      "html_url": "https://github.com/kkslider2130",
      "followers_url": "https://api.github.com/users/kkslider2130/followers",
      "following_url": "https://api.github.com/users/kkslider2130/following{/other_user}",
      "gists_url": "https://api.github.com/users/kkslider2130/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kkslider2130/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kkslider2130/subscriptions",
      "organizations_url": "https://api.github.com/users/kkslider2130/orgs",
      "repos_url": "https://api.github.com/users/kkslider2130/repos",
      "events_url": "https://api.github.com/users/kkslider2130/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kkslider2130/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "justinruss24",
      "id": 58894204,
      "node_id": "MDQ6VXNlcjU4ODk0MjA0",
      "avatar_url": "https://avatars1.githubusercontent.com/u/58894204?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/justinruss24",
      "html_url": "https://github.com/justinruss24",
      "followers_url": "https://api.github.com/users/justinruss24/followers",
      "following_url": "https://api.github.com/users/justinruss24/following{/other_user}",
      "gists_url": "https://api.github.com/users/justinruss24/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/justinruss24/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/justinruss24/subscriptions",
      "organizations_url": "https://api.github.com/users/justinruss24/orgs",
      "repos_url": "https://api.github.com/users/justinruss24/repos",
      "events_url": "https://api.github.com/users/justinruss24/events{/privacy}",
      "received_events_url": "https://api.github.com/users/justinruss24/received_events",
      "type": "User",
      "site_admin": false
    }
    ]
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
