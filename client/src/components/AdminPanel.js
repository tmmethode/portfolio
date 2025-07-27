import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiTrash2, FiPlus, FiSave, FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import { useData } from '../context/DataContext';
import { adminApiService } from '../services/adminApi';

const AdminPanel = () => {
  const { 
    profile, skills, experience, education, projects, 
    setProfile, setSkills, setExperience, setEducation, setProjects,
    fetchAllData 
  } = useData();

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem('adminToken') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // Check authentication on mount
  useEffect(() => {
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, [authToken]);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await adminApiService.login(loginData);
      if (response.success) {
        const token = response.data.token;
        setAuthToken(token);
        localStorage.setItem('adminToken', token);
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials. Please check your email and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setAuthToken('');
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  const handleEdit = (data, type) => {
    setEditingData({ ...data, type });
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // In a real app, you'd make API calls here
      // For demo, we'll just update the local state
      switch (editingData.type) {
        case 'profile':
          setProfile(editingData);
          break;
        case 'skill':
          setSkills(skills.map(s => s._id === editingData._id ? editingData : s));
          break;
        case 'experience':
          setExperience(experience.map(e => e._id === editingData._id ? editingData : e));
          break;
        case 'education':
          setEducation(education.map(e => e._id === editingData._id ? editingData : e));
          break;
        case 'project':
          setProjects(projects.map(p => p._id === editingData._id ? editingData : p));
          break;
      }
      setIsEditing(false);
      setEditingData(null);
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save changes');
    }
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      // In a real app, you'd make API calls here
      // For demo, we'll just update the local state
      switch (type) {
        case 'skill':
          setSkills(skills.filter(s => s._id !== id));
          break;
        case 'experience':
          setExperience(experience.filter(e => e._id !== id));
          break;
        case 'education':
          setEducation(education.filter(e => e._id !== id));
          break;
        case 'project':
          setProjects(projects.filter(p => p._id !== id));
          break;
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete item');
    }
  };

  const renderProfileForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={editingData?.name || ''}
            onChange={(e) => setEditingData({...editingData, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={editingData?.title || ''}
            onChange={(e) => setEditingData({...editingData, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={editingData?.email || ''}
            onChange={(e) => setEditingData({...editingData, email: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={editingData?.location || ''}
            onChange={(e) => setEditingData({...editingData, location: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
        <textarea
          rows={4}
          value={editingData?.about || ''}
          onChange={(e) => setEditingData({...editingData, about: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Key Strengths (comma separated)</label>
        <input
          type="text"
          value={editingData?.keyStrengths?.join(', ') || ''}
          onChange={(e) => setEditingData({...editingData, keyStrengths: e.target.value.split(',').map(s => s.trim())})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Cloud Infrastructure, Systems Administration, Cybersecurity"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
          <input
            type="url"
            value={editingData?.socialLinks?.linkedin || ''}
            onChange={(e) => setEditingData({
              ...editingData, 
              socialLinks: {...editingData.socialLinks, linkedin: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
          <input
            type="url"
            value={editingData?.socialLinks?.github || ''}
            onChange={(e) => setEditingData({
              ...editingData, 
              socialLinks: {...editingData.socialLinks, github: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
          <input
            type="url"
            value={editingData?.socialLinks?.twitter || ''}
            onChange={(e) => setEditingData({
              ...editingData, 
              socialLinks: {...editingData.socialLinks, twitter: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
          <input
            type="url"
            value={editingData?.socialLinks?.facebook || ''}
            onChange={(e) => setEditingData({
              ...editingData, 
              socialLinks: {...editingData.socialLinks, facebook: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Discord</label>
          <input
            type="url"
            value={editingData?.socialLinks?.discord || ''}
            onChange={(e) => setEditingData({
              ...editingData, 
              socialLinks: {...editingData.socialLinks, discord: e.target.value}
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
    </div>
  );

  const renderSkillsList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skills ({skills.length})</h3>
        <button className="btn-primary">
          <FiPlus className="mr-2" />
          Add Skill
        </button>
      </div>
      <div className="grid gap-4">
        {skills.map((skill) => (
          <div key={skill._id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold">{skill.name}</h4>
                <p className="text-sm text-gray-600">{skill.category}</p>
                <p className="text-sm text-gray-500">Proficiency: {skill.proficiency}%</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(skill, 'skill')}
                  className="btn-secondary"
                >
                  <FiEdit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(skill._id, 'skill')}
                  className="btn-danger"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExperienceList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Experience ({experience.length})</h3>
        <button className="btn-primary">
          <FiPlus className="mr-2" />
          Add Experience
        </button>
      </div>
      <div className="grid gap-4">
        {experience.map((exp) => (
          <div key={exp._id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold">{exp.title}</h4>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="text-sm text-gray-500">
                  {new Date(exp.startDate).toLocaleDateString()} - 
                  {exp.isCurrent ? 'Present' : new Date(exp.endDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(exp, 'experience')}
                  className="btn-secondary"
                >
                  <FiEdit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(exp._id, 'experience')}
                  className="btn-danger"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducationList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Education ({education.length})</h3>
        <button className="btn-primary">
          <FiPlus className="mr-2" />
          Add Education
        </button>
      </div>
      <div className="grid gap-4">
        {education.map((edu) => (
          <div key={edu._id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.location}</p>
                <p className="text-sm text-gray-500">
                  {new Date(edu.startDate).getFullYear()} - 
                  {edu.isCurrent ? 'Present' : new Date(edu.endDate).getFullYear()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(edu, 'education')}
                  className="btn-secondary"
                >
                  <FiEdit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(edu._id, 'education')}
                  className="btn-danger"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectsList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Projects ({projects.length})</h3>
        <button className="btn-primary">
          <FiPlus className="mr-2" />
          Add Project
        </button>
      </div>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.category}</p>
                <p className="text-sm text-gray-500">{project.description}</p>
                <p className="text-sm text-gray-500">Status: {project.status}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(project, 'project')}
                  className="btn-secondary"
                >
                  <FiEdit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(project._id, 'project')}
                  className="btn-danger"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Manage your portfolio data</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Please use your database credentials to login.</p>
            <p>Contact the administrator if you need access.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg shadow-sm p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {isEditing ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Edit {editingData?.type}</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="btn-primary"
                  >
                    <FiSave className="mr-2" />
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditingData(null);
                    }}
                    className="btn-secondary"
                  >
                    <FiX className="mr-2" />
                    Cancel
                  </button>
                </div>
              </div>
              
              {editingData?.type === 'profile' && renderProfileForm()}
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
                {activeTab === 'profile' && (
                  <button
                    onClick={() => handleEdit(profile, 'profile')}
                    className="btn-primary"
                  >
                    <FiEdit3 className="mr-2" />
                    Edit Profile
                  </button>
                )}
              </div>
              
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <p className="text-gray-900">{profile?.name || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <p className="text-gray-900">{profile?.title || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <p className="text-gray-900">{profile?.email || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <p className="text-gray-900">{profile?.location || 'Not set'}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
                    <p className="text-gray-900">{profile?.about || 'Not set'}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Key Strengths</label>
                    <div className="flex flex-wrap gap-2">
                      {profile?.keyStrengths?.map((strength, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 px-2 py-1 rounded-md text-sm">
                          {strength}
                        </span>
                      )) || <p className="text-gray-500">No strengths set</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Social Links</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(profile?.socialLinks || {}).map(([platform, url]) => (
                        <div key={platform}>
                          <span className="text-sm font-medium text-gray-700 capitalize">{platform}:</span>
                          <p className="text-gray-900">{url || 'Not set'}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'skills' && renderSkillsList()}
              {activeTab === 'experience' && renderExperienceList()}
              {activeTab === 'education' && renderEducationList()}
              {activeTab === 'projects' && renderProjectsList()}
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .btn-primary {
          @apply bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center;
        }
        .btn-secondary {
          @apply bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors flex items-center;
        }
        .btn-danger {
          @apply bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors flex items-center;
        }
      `}</style>
    </div>
  );
};

export default AdminPanel; 