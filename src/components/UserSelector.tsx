import React, { useState } from 'react';
import { User } from '../types/User';

type UserSelectorProps = {
  users: User[];
  getUserPosts: (userId: number) => void;
};

export const UserSelector: React.FC<UserSelectorProps> = ({
  users,
  getUserPosts,
}) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User>();

  return (
    <div data-cy="UserSelector" className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
        >
          {!selectedUser && <span>Choose a user</span>}
          {selectedUser && <span>{selectedUser.name}</span>}

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      {users.length > 0 && menuIsActive === true && (
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {users.map(user => (
              <a
                href="#user-1"
                className="dropdown-item"
                key={user.id}
                onClick={() => {
                  setSelectedUser(user);
                  setTimeout(() => {
                    setMenuIsActive(false);
                  }, 100);
                  getUserPosts(user.id);
                }}
              >
                {user.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
