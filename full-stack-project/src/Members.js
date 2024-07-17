import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Members.css';

const Members = () => {
  const [groups, setGroups] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    // Fetch groups from API
    axios.get('/api/groups').then(response => setGroups(response.data));
  }, []);

  const handleGroupClick = (groupId) => {
    setSelectedGroup(groupId);
    // Fetch members of the selected group from API
    axios.get(`/api/groups/${groupId}/members`).then(response => setMembers(response.data));
  };

  return (
    <div className="members-container">
      <div className="group-list">
        <h2>Groups</h2>
        <ul>
          {groups.map(group => (
            <li key={group.id} onClick={() => handleGroupClick(group.id)}>
              {group.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="member-list">
        <h2>Members</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.email}</td>
                <td>{member.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
