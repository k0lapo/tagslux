import { useState } from 'react';
import { useUserProfile } from '../context/UserProfileContext';

const UserProfile = () => {
  const { user, updateUserProfile } = useUserProfile();
  const [editableUser, setEditableUser] = useState({ ...user });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  const handleSave = () => {
    updateUserProfile(editableUser);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">User Profile</h2>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editableUser.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={editableUser.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={editableUser.address}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={editableUser.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full p-3 border rounded ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}
          />
        </div>
        {isEditing ? (
          <div className="flex justify-between">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
