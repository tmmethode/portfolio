import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [navigation, setNavigation] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data
  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching all data...');
      
      // Use Promise.allSettled to handle partial failures gracefully
      const results = await Promise.allSettled([
        apiService.getProfile(),
        apiService.getSkills(),
        apiService.getExperience(),
        apiService.getEducation(),
        apiService.getProjects(),
        apiService.getNavigation(),
        apiService.getFooterLinks()
      ]);
      
      // Process results and handle partial failures
      const [profileResult, skillsResult, experienceResult, educationResult, projectsResult, navigationResult, footerLinksResult] = results;
      
      if (profileResult.status === 'fulfilled') {
        setProfile(profileResult.value.data || profileResult.value);
      }
      
      if (skillsResult.status === 'fulfilled') {
        setSkills(skillsResult.value.data || skillsResult.value);
      }
      
      if (experienceResult.status === 'fulfilled') {
        setExperience(experienceResult.value.data || experienceResult.value);
      }
      
      if (educationResult.status === 'fulfilled') {
        setEducation(educationResult.value.data || educationResult.value);
      }
      
      if (projectsResult.status === 'fulfilled') {
        setProjects(projectsResult.value.data || projectsResult.value);
      }
      
      if (navigationResult.status === 'fulfilled') {
        setNavigation(navigationResult.value.data || navigationResult.value);
      }
      
      if (footerLinksResult.status === 'fulfilled') {
        setFooterLinks(footerLinksResult.value.data || footerLinksResult.value);
      }
      
      // Check if we have any successful data
      const hasData = results.some(result => result.status === 'fulfilled');
      if (!hasData) {
        setError('Unable to load any data. Please check your connection and try again.');
      }
      
      console.log('Data processing completed');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Fetch specific data
  const fetchProfile = async () => {
    try {
      const response = await apiService.getProfile();
      setProfile(response.data || response);
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError(err.message);
    }
  };

  const fetchSkills = async () => {
    try {
      const response = await apiService.getSkills();
      setSkills(response.data || response);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setError(err.message);
    }
  };

  const fetchExperience = async () => {
    try {
      const response = await apiService.getExperience();
      setExperience(response.data || response);
    } catch (err) {
      console.error('Error fetching experience:', err);
      setError(err.message);
    }
  };

  const fetchEducation = async () => {
    try {
      const response = await apiService.getEducation();
      setEducation(response.data || response);
    } catch (err) {
      console.error('Error fetching education:', err);
      setError(err.message);
    }
  };

  const fetchProjects = async () => {
    try {
      const data = await apiService.getProjects();
      setProjects(data.data || data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const fetchNavigation = async () => {
    try {
      const data = await apiService.getNavigation();
      setNavigation(data.data || data);
    } catch (error) {
      console.error('Error fetching navigation:', error);
    }
  };

  const fetchFooterLinks = async () => {
    try {
      const data = await apiService.getFooterLinks();
      setFooterLinks(data.data || data);
    } catch (error) {
      console.error('Error fetching footer links:', error);
    }
  };

  // Submit contact form
  const submitContact = async (contactData) => {
    try {
      const response = await apiService.submitContact(contactData);
      return response;
    } catch (err) {
      console.error('Error submitting contact:', err);
      throw err;
    }
  };

  // Get skills by category
  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  // Get current experience
  const getCurrentExperience = () => {
    return experience.filter(exp => exp.isCurrent);
  };

  // Get completed projects
  const getCompletedProjects = () => {
    return projects.filter(project => project.status === 'Completed');
  };

  // Get projects by category
  const getProjectsByCategory = (category) => {
    return projects.filter(project => project.category === category);
  };

  // Initialize data on mount
  useEffect(() => {
    // Add timeout to prevent hanging
    const timeoutId = setTimeout(() => {
      if (loading) {
        setError('Data loading is taking longer than expected. Please refresh the page.');
        setLoading(false);
      }
    }, 30000); // 30 second timeout

    fetchAllData();

    return () => clearTimeout(timeoutId);
  }, []);

  const value = {
    // Data
    profile,
    skills,
    experience,
    education,
    projects,
    navigation,
    footerLinks,
    
    // Loading and error states
    loading,
    error,
    
    // Fetch functions
    fetchAllData,
    fetchProfile,
    fetchSkills,
    fetchExperience,
    fetchEducation,
    fetchProjects,
    fetchNavigation,
    fetchFooterLinks,
    
    // Utility functions
    submitContact,
    getSkillsByCategory,
    getCurrentExperience,
    getCompletedProjects,
    getProjectsByCategory,
    
    // Setters for admin functionality
    setProfile,
    setSkills,
    setExperience,
    setEducation,
    setProjects,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}; 