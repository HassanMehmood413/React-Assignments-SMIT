"use client"

import { useState, useEffect } from "react"
import "./dashboard.css"
import { useNavigate } from "react-router-dom"
import { getposts } from "../../store/Slices/post.slice"
import { useDispatch } from "react-redux"
import Modal from "../../components/modal/Modal"

export default function Dashboard() {
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setdata] = useState([])
  const navigate = useNavigate() // ✅ use hook at top level
  const dispatch = useDispatch() // ✅ use hook at top level
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)

  const handleClick = () => {
    navigate("/createpost")
  }

  const handleedit = (post) => {
    setSelectedPost(post)
    console.log(post)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await dispatch(getposts())
      const data = response.payload
      setdata(data)
      console.log(data)
    }
    fetchPosts()
  }, [])

  // Add animation class to cards after component mounts
  useEffect(() => {
    // First make sure all cards are visible immediately
    const allCards = document.querySelectorAll(".dashboard-card, .post-card")
    allCards.forEach((card) => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    })

    // Then add the animation class with a slight delay
    setTimeout(() => {
      const cards = document.querySelectorAll(".dashboard-card")
      cards.forEach((card, index) => {
        setTimeout(
          () => {
            card.classList.add("card-visible")
          },
          100 * (index + 1),
        )
      })

      // Add animation to post cards with a delay after dashboard cards
      const postCards = document.querySelectorAll(".post-card")
      postCards.forEach((card, index) => {
        setTimeout(
          () => {
            card.classList.add("card-visible")
          },
          100 * (index + 1) + 300,
        ) // Additional 300ms delay after dashboard cards
      })
    }, 100)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserDropdownOpen && !event.target.closest(".user-dropdown-container")) {
        setIsUserDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isUserDropdownOpen])

  return (
    <div className="dashboard-container">
      <div className="dashboard-background">
        <div className="gradient-sphere gradient-sphere-1"></div>
        <div className="gradient-sphere gradient-sphere-2"></div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            {/* Home icon */}
            <svg
              className="logo-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>DarkDash</span>
          </div>

          <div className="navbar-actions">
            <div className="search-container">
              {/* Search icon */}
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input type="search" placeholder="Search..." className="search-input" />
            </div>
            <button className="icon-button pulse-animation">
              {/* Bell icon */}
              <svg
                className="action-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </button>
            <div className="user-dropdown-container">
              <button className="icon-button" onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
                {/* User icon */}
                <svg
                  className="action-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>

              {isUserDropdownOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown-header">
                    <div className="user-avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="user-info">
                      <div className="user-name">User Name</div>
                      <div className="user-email">user@example.com</div>
                    </div>
                  </div>
                  <div className="dropdown-separator"></div>
                  <div className="user-dropdown-item">
                    <svg
                      className="dropdown-item-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Profile</span>
                  </div>
                  <div className="user-dropdown-item">
                    <svg
                      className="dropdown-item-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Settings</span>
                  </div>
                  <div className="dropdown-separator"></div>
                  <div
                    className="user-dropdown-item logout-item"
                    onClick={() => {
                      console.log("Logging out")
                      // Example: dispatch(logout());
                      // Example: navigate("/login");
                    }}
                  >
                    <svg
                      className="dropdown-item-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
            <button className="mobile-menu-button">
              {/* Menu icon */}
              <svg
                className="action-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Welcome back</h1>

          {/* Tools Dropdown */}
          <div className="tools-dropdown">
            <button className="tools-dropdown-trigger" onClick={() => setIsToolsOpen(!isToolsOpen)}>
              {/* Tool icon */}
              <svg
                className="tool-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 21 8.7-8.7"></path>
                <path d="m15.5 9.5 5-5"></path>
                <path d="m5 3 5 5"></path>
                <path d="M19 5 5 19"></path>
                <path d="m14 14 1.5 1.5"></path>
                <path d="m8.5 8.5 1.5 1.5"></path>
                <path d="M17.5 12.5 19 14"></path>
                <path d="m12.5 17.5 1.5 1.5"></path>
                <path d="m3 8 5 5"></path>
              </svg>
              Tools
              {/* Chevron down icon */}
              <svg
                className={`dropdown-arrow ${isToolsOpen ? "rotate" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            {isToolsOpen && (
              <div className="tools-dropdown-content">
                <div className="dropdown-label">Available Tools</div>
                <div className="dropdown-separator"></div>
                <div className="dropdown-item">
                  {/* Settings icon */}
                  <svg
                    className="dropdown-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span>Settings</span>
                </div>
                <div className="dropdown-item">
                  {/* Tool icon */}
                  <svg
                    className="dropdown-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 21 8.7-8.7"></path>
                    <path d="m15.5 9.5 5-5"></path>
                    <path d="m5 3 5 5"></path>
                    <path d="M19 5 5 19"></path>
                    <path d="m14 14 1.5 1.5"></path>
                    <path d="m8.5 8.5 1.5 1.5"></path>
                    <path d="M17.5 12.5 19 14"></path>
                    <path d="m12.5 17.5 1.5 1.5"></path>
                    <path d="m3 8 5 5"></path>
                  </svg>
                  <span>Analytics</span>
                </div>
                <div className="dropdown-item">
                  {/* Tool icon */}
                  <svg
                    className="dropdown-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 21 8.7-8.7"></path>
                    <path d="m15.5 9.5 5-5"></path>
                    <path d="m5 3 5 5"></path>
                    <path d="M19 5 5 19"></path>
                    <path d="m14 14 1.5 1.5"></path>
                    <path d="m8.5 8.5 1.5 1.5"></path>
                    <path d="M17.5 12.5 19 14"></path>
                    <path d="m12.5 17.5 1.5 1.5"></path>
                    <path d="m3 8 5 5"></path>
                  </svg>
                  <span>Reports</span>
                </div>
                <div className="dropdown-item">
                  {/* Tool icon */}
                  <svg
                    className="dropdown-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 21 8.7-8.7"></path>
                    <path d="m15.5 9.5 5-5"></path>
                    <path d="m5 3 5 5"></path>
                    <path d="M19 5 5 19"></path>
                    <path d="m14 14 1.5 1.5"></path>
                    <path d="m8.5 8.5 1.5 1.5"></path>
                    <path d="M17.5 12.5 19 14"></path>
                    <path d="m12.5 17.5 1.5 1.5"></path>
                    <path d="m3 8 5 5"></path>
                  </svg>
                  <span>Automation</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="card-glow"></div>
            <h3 className="card-title">Performance</h3>
            <p className="card-description">System performance metrics</p>
          </div>
          <div className="dashboard-card">
            <div className="card-glow"></div>
            <h3 className="card-title">Analytics</h3>
            <p className="card-description">User engagement statistics</p>
          </div>
          <div className="dashboard-card">
            <button onClick={handleClick} className="card-glow"></button>
            <h3 className="card-title">Create Post</h3>
            <p className="card-description">Create a new post</p>
          </div>
        </div>

        {/* Posts Section */}
        <div className="posts-section">
          <div className="section-header">
            <h2 className="section-title">My Posts</h2>
            <button onClick={handleClick} className="new-post-button">
              {/* Plus icon */}
              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              New Post
            </button>
          </div>

          <div className="posts-grid">
            {data.map((post) => (
              <div className="post-card" key={post.id}>
                <div className="post-image-container">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="post-image" />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-date">{post.content}</span>
                    <button onClick={() => handleedit(post)} className="post-action-button">
                      {/* Edit icon */}
                      <svg
                        className="post-action-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    {/* <button className="post-action-button" title="Update post">
                    
                      <svg
                        className="post-action-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 2v6h-6"></path>
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M3 22v-6h6"></path>
                        <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {console.log("Dashboard coming", selectedPost)}
      {isModalOpen && <Modal isOpen={isModalOpen} toggleModal={handleCloseModal} postData={selectedPost || {}} />}
    </div>
  )
}
