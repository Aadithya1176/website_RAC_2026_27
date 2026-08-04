import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiLogOut, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config';

interface Project {
  id: number;
  title: string;
  description: string;
  oneLiner: string;
  eventDate: string;
  venue: string;
  image: string;
  avenue: string;
  isSignature: boolean;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

interface GalleryImage {
  id: number;
  filename: string;
  title: string;
  width: number;
  height: number;
  createdAt?: string;
}

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'gallery'>('projects');

  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    oneLiner: '',
    eventDate: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'), // Initialize as dd-mm-yyyy
    venue: 'RACREC',
    image: '',
    avenue: 'community',
    isSignature: false,
    status: 'active',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  // Gallery state
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [galleryImageFile, setGalleryImageFile] = useState<File | null>(null);
  const [galleryImagePreview, setGalleryImagePreview] = useState<string>('');
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryImageWidth, setGalleryImageWidth] = useState(1080);
  const [galleryImageHeight, setGalleryImageHeight] = useState(1440);

  // Load projects on mount
  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
    }
  }, [isAuthenticated]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      showMessage('Failed to load projects', 'error');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      showMessage('Please enter a password', 'error');
      return;
    }

    setLoading(true);
    try {
      // Verify password with backend
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        showMessage('Login successful', 'success');
        // Keep password for API calls
        await fetchProjects();
        await fetchGallery();
      } else {
        showMessage('Invalid password', 'error');
        setPassword('');
      }
    } catch (error) {
      showMessage('Connection error', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setProjects([]);
    setFormData({
      title: '',
      description: '',
      image: '',
      avenue: 'community',
      isSignature: false,
      status: 'active',
    });
    setImageFile(null);
    setImagePreview('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('password', password);
      formDataToSend.append('title', formData.title || '');
      formDataToSend.append('oneLiner', formData.oneLiner || '');
      // Ensure date is sent as dd-mm-yyyy
      let dateToSend = formData.eventDate || '';
      if (dateToSend.includes('-') && dateToSend.split('-')[0].length === 4) {
        const [y, m, d] = dateToSend.split('-');
        dateToSend = `${d}-${m}-${y}`;
      }
      formDataToSend.append('eventDate', dateToSend);
      formDataToSend.append('venue', formData.venue || '');
      formDataToSend.append('description', formData.description || '');
      formDataToSend.append('avenue', formData.avenue || 'community');
      formDataToSend.append('isSignature', String(formData.isSignature || false));
      formDataToSend.append('status', formData.status || 'active');

      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      if (editingId) {
        // Update existing project
        const response = await fetch(`${API_BASE_URL}/projects/${editingId}`, {
          method: 'PUT',
          body: formDataToSend,
        });

        if (response.ok) {
          showMessage('Project updated successfully', 'success');
          setEditingId(null);
        } else {
          showMessage('Failed to update project', 'error');
        }
      } else {
        // Add new project
        const response = await fetch(`${API_BASE_URL}/projects`, {
          method: 'POST',
          body: formDataToSend,
        });

        if (response.status === 401) {
          showMessage('Invalid password', 'error');
        } else if (response.ok) {
          showMessage('Project added successfully', 'success');
        } else {
          showMessage('Failed to add project', 'error');
        }
      }

      await fetchProjects();
      resetForm();
      setShowForm(false);
    } catch (error) {
      showMessage('An error occurred', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project: Project) => {
    // Check if authenticated (password already verified during login)
    if (!isAuthenticated) {
      showMessage('Please login first', 'error');
      return;
    }

    setFormData(project);
    setEditingId(project.id);
    setImageFile(null);
    setImagePreview(project.image ? `${API_BASE_URL}/uploads/${project.image}` : '');
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      const encodedPassword = encodeURIComponent(password);
      const response = await fetch(`${API_BASE_URL}/projects/${id}?password=${encodedPassword}`, {
        method: 'DELETE',
      });

      if (response.status === 401) {
        showMessage('Invalid password', 'error');
      } else if (response.ok) {
        showMessage('Project deleted successfully', 'success');
        await fetchProjects();
      } else {
        showMessage('Failed to delete project', 'error');
      }
    } catch (error) {
      showMessage('An error occurred', 'error');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      avenue: 'community',
      isSignature: false,
      status: 'active',
    });
    setEditingId(null);
    setImageFile(null);
    setImagePreview('');
  };

  const showMessage = (msg: string, type: 'success' | 'error') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(''), 3000);
  };

  // Gallery functions
  const fetchGallery = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery`);
      const data = await response.json();
      setGalleryImages(data);
    } catch (error) {
      showMessage('Failed to load gallery', 'error');
    }
  };

  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setGalleryImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!galleryImageFile) {
        showMessage('Please select an image', 'error');
        setLoading(false);
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('password', password);
      formDataToSend.append('image', galleryImageFile);
      formDataToSend.append('title', galleryTitle || 'Gallery Image');
      formDataToSend.append('width', String(galleryImageWidth));
      formDataToSend.append('height', String(galleryImageHeight));

      const response = await fetch(`${API_BASE_URL}/gallery`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.status === 401) {
        showMessage('Invalid password', 'error');
      } else if (response.ok) {
        showMessage('Image uploaded successfully', 'success');
        resetGalleryForm();
        setShowGalleryForm(false);
        await fetchGallery();
      } else {
        showMessage('Failed to upload image', 'error');
      }
    } catch (error) {
      showMessage('An error occurred', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleGalleryDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      const encodedPassword = encodeURIComponent(password);
      const response = await fetch(`${API_BASE_URL}/gallery/${id}?password=${encodedPassword}`, {
        method: 'DELETE',
      });

      if (response.status === 401) {
        showMessage('Invalid password', 'error');
      } else if (response.ok) {
        showMessage('Image deleted successfully', 'success');
        await fetchGallery();
      } else {
        showMessage('Failed to delete image', 'error');
      }
    } catch (error) {
      showMessage('An error occurred', 'error');
    }
  };

  const resetGalleryForm = () => {
    setGalleryImageFile(null);
    setGalleryImagePreview('');
    setGalleryTitle('');
    setGalleryImageWidth(1080);
    setGalleryImageHeight(1440);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-900 via-brand to-brand-400 p-4">
        <motion.div
          className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-center text-text-dark mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none transition focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-brand py-2 font-semibold text-white transition duration-200 hover:bg-brand-700"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm shadow-brand-950/5">
        <div className="container-custom py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-text-dark">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Message Alert */}
      {message && (
        <motion.div
          className={`fixed top-20 right-4 px-6 py-3 rounded-lg text-white font-medium ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          {message}
        </motion.div>
      )}

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => {
              setActiveTab('projects');
              fetchProjects();
            }}
            className={`px-6 py-3 font-semibold transition ${activeTab === 'projects'
              ? 'text-brand border-b-2 border-brand'
              : 'text-gray-600 hover:text-text-dark'
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveTab('gallery');
              fetchGallery();
            }}
            className={`px-6 py-3 font-semibold transition ${activeTab === 'gallery'
              ? 'text-brand border-b-2 border-brand'
              : 'text-gray-600 hover:text-text-dark'
              }`}
          >
            Gallery
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <>
            {/* Add Project Button */}
            {!showForm && (
              <motion.button
                onClick={() => {
                  resetForm();
                  setShowForm(true);
                }}
                className="mb-8 flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlus /> Add New Project
              </motion.button>
            )}
          </>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <>
            {/* Add Gallery Image Button */}
            {!showGalleryForm && (
              <motion.button
                onClick={() => {
                  resetGalleryForm();
                  setShowGalleryForm(true);
                }}
                className="mb-8 flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlus /> Add Gallery Image
              </motion.button>
            )}

            {/* Gallery Upload Form */}
            {showGalleryForm && (
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold text-text-dark mb-6">Add Gallery Image</h2>
                <form onSubmit={handleGallerySubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image Title
                    </label>
                    <input
                      type="text"
                      value={galleryTitle}
                      onChange={(e) => setGalleryTitle(e.target.value)}
                      placeholder="Enter image title"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image Width (px)
                    </label>
                    <input
                      type="number"
                      value={galleryImageWidth}
                      onChange={(e) => setGalleryImageWidth(Number(e.target.value))}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image Height (px)
                    </label>
                    <input
                      type="number"
                      value={galleryImageHeight}
                      onChange={(e) => setGalleryImageHeight(Number(e.target.value))}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleGalleryImageChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  {galleryImagePreview && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                      <img
                        src={galleryImagePreview}
                        alt="Preview"
                        className="max-w-xs h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 rounded-xl bg-brand py-2 font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
                    >
                      {loading ? 'Uploading...' : 'Upload Image'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowGalleryForm(false);
                        resetGalleryForm();
                      }}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Gallery Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={`${API_BASE_URL}/gallery-uploads/${image.filename}`}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-text-dark mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {image.width}x{image.height}px
                    </p>
                    <button
                      onClick={() => handleGalleryDelete(image.id)}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Projects Form and List - Only show when Projects tab is active */}
        {activeTab === 'projects' && (
          <>
            {/* Form */}
            {showForm && (
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  {editingId ? 'Edit Project' : 'Add New Project'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title || ''}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                        placeholder="Enter project title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Avenue *
                      </label>
                      <select
                        name="avenue"
                        value={formData.avenue || 'community'}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                      >
                        <option value="club">Club Service</option>
                        <option value="community">Community Service</option>
                        <option value="international">International Service</option>
                        <option value="professional">Professional Service</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={(() => {
                          if (!formData.eventDate) return '';
                          if (formData.eventDate.includes('-')) {
                            const parts = formData.eventDate.split('-');
                            if (parts[0].length === 4) return formData.eventDate; // Already yyyy-mm-dd
                            if (parts[2].length === 4) return `${parts[2]}-${parts[1]}-${parts[0]}`; // dd-mm-yyyy to yyyy-mm-dd
                          }
                          return '';
                        })()}
                        onChange={(e) => {
                          const ymd = e.target.value;
                          if (ymd) {
                            const [y, m, d] = ymd.split('-');
                            setFormData(prev => ({ ...prev, eventDate: `${d}-${m}-${y}` }));
                          }
                        }}
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Venue *
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue || ''}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                        placeholder="Enter venue"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-brand-100 bg-brand-50 p-4">
                    <input
                      type="checkbox"
                      name="isSignature"
                      checked={formData.isSignature || false}
                      onChange={handleInputChange}
                      className="h-5 w-5 cursor-pointer rounded text-brand focus:ring-2 focus:ring-brand-200"
                    />
                    <label className="text-sm font-medium text-gray-700 cursor-pointer">
                      Mark as Signature Project
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      One-Liner Summary (displays on project card) *
                    </label>
                    <input
                      type="text"
                      name="oneLiner"
                      value={formData.oneLiner || ''}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                      placeholder="Enter a short one-liner for the project card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Description (displays in modal) *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description || ''}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                      placeholder="Enter full project description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Image *
                    </label>
                    <div className="space-y-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                      />
                      {imagePreview && (
                        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">Image Preview</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status || 'active'}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 rounded-xl bg-brand py-2 font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        resetForm();
                      }}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Projects List */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-6">Projects ({projects.length})</h2>
              {projects.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                  No projects yet. Add one to get started!
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                      whileHover={{ y: -5 }}
                    >
                      {project.image && (
                        <img
                          src={`${API_BASE_URL}/uploads/${project.image}`}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-text-dark">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">
                                {project.avenue}
                              </span>
                              {project.isSignature && (
                                <span className="rounded-full bg-brand-100 px-2 py-1 text-xs font-semibold text-brand-800">
                                  ⭐ Signature
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(project)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand py-2 text-white transition hover:bg-brand-700"
                          >
                            <FiEdit2 size={16} /> Edit
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
                          >
                            <FiTrash2 size={16} /> Delete
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
