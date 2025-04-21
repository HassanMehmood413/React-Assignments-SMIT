import React from 'react';
import './Githubusers.css';

export default function Githubusers(props) {
  return (
    <div className="user-card">
      <div className="user-header">
        <img src={props.avatar_url} alt="avatar" className="user-avatar" />
        <h2>{props.name}</h2>
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
          @{props.login}
        </a>
        <p className="user-location">{props.location}</p>
      </div>
      <div className="user-body">
        <p className="user-bio">{props.bio}</p>
        <a href={props.blog} target="_blank" rel="noopener noreferrer" className="user-blog">
          Portfolio
        </a>
        <div className="user-stats">
          <div><strong>{props.followers}</strong><span>Followers</span></div>
          <div><strong>{props.following}</strong><span>Following</span></div>
          <div><strong>{props.public_repos}</strong><span>Repos</span></div>
        </div>
      </div>
      <div className="user-footer">
        <p>Joined on: {new Date(props.created_at).toLocaleDateString()}</p>
        <p>Last updated: {new Date(props.updated_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
