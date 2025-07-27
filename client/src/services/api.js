const API_BASE_URL = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' 
  ? '/api'  // Use relative URL in production (same domain)
  : 'http://localhost:5000/api');

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
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
      console.error('API Error:', error);
      throw error;
    }
  }

  // Profile API
  async getProfile() {
    return this.request('/profile');
  }

  // Skills API
  async getSkills() {
    return this.request('/skills');
  }

  async getSkillsByCategory(category) {
    return this.request(`/skills/category/${category}`);
  }

  // Experience API
  async getExperience() {
    return this.request('/experience');
  }

  // Education API
  async getEducation() {
    return this.request('/education');
  }

  // Projects API
  async getProjects() {
    return this.request('/projects');
  }

  async getProject(id) {
    return this.request(`/projects/${id}`);
  }

  // Contact API
  async submitContact(contactData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  async getNavigation() {
    return this.request('/navigation');
  }

  async getFooterLinks() {
    return this.request('/footer-links');
  }

  // Health Check
  async getHealth() {
    return this.request('/health');
  }

  // Authentication API
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getCurrentUser(token) {
    return this.request('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Admin APIs (with authentication)
  async createProfile(profileData, token) {
    return this.request('/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });
  }

  async updateProfile(id, profileData, token) {
    return this.request(`/profile/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });
  }

  async createSkill(skillData, token) {
    return this.request('/skills', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(skillData),
    });
  }

  async updateSkill(id, skillData, token) {
    return this.request(`/skills/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(skillData),
    });
  }

  async deleteSkill(id, token) {
    return this.request(`/skills/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createExperience(experienceData, token) {
    return this.request('/experience', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(experienceData),
    });
  }

  async updateExperience(id, experienceData, token) {
    return this.request(`/experience/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(experienceData),
    });
  }

  async deleteExperience(id, token) {
    return this.request(`/experience/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createEducation(educationData, token) {
    return this.request('/education', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(educationData),
    });
  }

  async updateEducation(id, educationData, token) {
    return this.request(`/education/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(educationData),
    });
  }

  async deleteEducation(id, token) {
    return this.request(`/education/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createProject(projectData, token) {
    return this.request('/projects', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(id, projectData, token) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id, token) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ApiService(); 