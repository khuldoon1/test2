import React, { useState, useContext } from 'react';
import { Context } from '../../ContextApi/GlobelData';
import { Link } from 'react-router-dom';

export default function Table({ users }) {
  const context = useContext(Context);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div class="relative overflow-x-auto">
      <p className='bg-black border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white text-black'>{context.title}</p>
      <div className='w-full'>
        <input
        className='w-full'
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 wditespace-nowrap dark:text-white">
                {user.id}
              </td>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </td>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email}
              </td>
              <td scope="row" class=" cursor-pointer px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link to={`detail?id=${user.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}