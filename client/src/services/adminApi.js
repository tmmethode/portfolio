const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class AdminApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getAuthHeaders() {
    const token = localStorage.getItem('adminToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('Admin API Error:', error);
      throw error;
    }
  }

  // Profile Management
  async updateProfile(profileData) {
    return this.request('/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Skills Management
  async createSkill(skillData) {
    return this.request('/skills', {
      method: 'POST',
      body: JSON.stringify(skillData),
    });
  }

  async updateSkill(id, skillData) {
    return this.request(`/skills/${id}`, {
      method: 'PUT',
      body: JSON.stringify(skillData),
    });
  }

  async deleteSkill(id) {
    return this.request(`/skills/${id}`, {
      method: 'DELETE',
    });
  }

  // Experience Management
  async createExperience(experienceData) {
    return this.request('/experience', {
      method: 'POST',
      body: JSON.stringify(experienceData),
    });
  }

  async updateExperience(id, experienceData) {
    return this.request(`/experience/${id}`, {
      method: 'PUT',
      body: JSON.stringify(experienceData),
    });
  }

  async deleteExperience(id) {
    return this.request(`/experience/${id}`, {
      method: 'DELETE',
    });
  }

  // Education Management
  async createEducation(educationData) {
    return this.request('/education', {
      method: 'POST',
      body: JSON.stringify(educationData),
    });
  }

  async updateEducation(id, educationData) {
    return this.request(`/education/${id}`, {
      method: 'PUT',
      body: JSON.stringify(educationData),
    });
  }

  async deleteEducation(id) {
    return this.request(`/education/${id}`, {
      method: 'DELETE',
    });
  }

  // Projects Management
  async createProject(projectData) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(id, projectData) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Authentication
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async verifyToken() {
    return this.request('/auth/me');
  }

  // Health Check
  async getHealth() {
    return this.request('/health');
  }
}

export default new AdminApiService(); 