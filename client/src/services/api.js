const API_BASE_URL = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' 
  ? 'https://portfolio-1027061627518.us-central1.run.app/api'  // Use actual Cloud Run URL
  : 'http://localhost:5000/api');

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.maxRetries = 3;
    this.retryDelay = 1000; // 1 second
  }

  async retryRequest(fn, retries = this.maxRetries) {
    try {
      return await fn();
    } catch (error) {
      if (retries > 0 && (error.message.includes('timeout') || error.message.includes('Network error'))) {
        console.log(`Retrying request... (${retries} attempts left)`);
        await new Promise(resolve => setTimeout(resolve, this.retryDelay));
        return this.retryRequest(fn, retries - 1);
      }
      throw error;
    }
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

    const makeRequest = async () => {
      // Add timeout to fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 second timeout
      
      const response = await fetch(url, { ...config, signal: controller.signal });
      clearTimeout(timeoutId);
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `API request failed: ${response.status}`);
      }

      return data;
    };

    try {
      return await this.retryRequest(makeRequest);
    } catch (error) {
      console.error('API Error:', error);
      
      // Provide more specific error messages
      if (error.name === 'AbortError') {
        throw new Error('Request timeout - please check your connection');
      } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Network error - please check your connection');
      } else {
        throw error;
      }
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
    try {
      // Add extra timeout handling for education data
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout for education
      
      const response = await fetch(`${this.baseURL}/education`, {
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Education API failed: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Education API Error:', error);
      
      if (error.name === 'AbortError') {
        throw new Error('Education data loading timeout - please check your connection');
      }
      
      // Retry once for education data
      try {
        console.log('Retrying education data fetch...');
        const retryResponse = await fetch(`${this.baseURL}/education`);
        
        if (!retryResponse.ok) {
          throw new Error(`Education API retry failed: ${retryResponse.status}`);
        }
        
        const retryData = await retryResponse.json();
        return retryData;
      } catch (retryError) {
        console.error('Education API retry failed:', retryError);
        throw new Error('Unable to load education data. Please try again later.');
      }
    }
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