import { useState, useEffect } from "react";
import styles from "./Campus.module.css";
import { 
  FaUniversity, 
  FaBook, 
  FaGraduationCap, 
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
  FaGlobe,
  FaClock,
  FaChartLine
} from "react-icons/fa";
import type { Department } from "../Navbar/Navbar";

interface Program {
  id: string;
  type: string;
  level: string;
  icon: JSX.Element;
  departments: Department[];
  description: string;
  duration: string;
  credits: number;
  tuition: string;
  requirements: string[];
  featured: boolean;
}

// Mock data - This will later come from backend
const initialPrograms: Program[] = [
  {
    id: "dip-001",
    type: "Diploma",
    level: "Undergraduate",
    icon: <FaBook />,
    description: "Two-year foundational programs providing practical skills and knowledge for immediate employment or further studies.",
    duration: "2 Years",
    credits: 60,
    tuition: "$3,500/year",
    requirements: ["High School Diploma", "English Proficiency", "Entrance Exam"],
    featured: true,
    departments: [
      {
        id: "dip-cs",
        name: "Computer Science",
        description: "Learn programming, software development, and IT fundamentals for modern tech careers.",
        head: "Dr. Michael Johnson",
        courses: 18,
        students: 240,
        color: "#2563eb",
        icon: <FaGraduationCap />,
        careerPaths: ["Software Developer", "IT Support", "Web Developer", "System Analyst"]
      },
      {
        id: "dip-bm",
        name: "Business Management",
        description: "Develop essential business skills in management, marketing, and entrepreneurship.",
        head: "Prof. Sarah Williams",
        courses: 16,
        students: 320,
        color: "#059669",
        icon: <FaChartLine />,
        careerPaths: ["Business Analyst", "Office Manager", "Entrepreneur", "Marketing Coordinator"]
      },
      {
        id: "dip-edu",
        name: "Education",
        description: "Prepare for teaching careers with foundational educational theories and practices.",
        head: "Dr. Elizabeth Chen",
        courses: 20,
        students: 180,
        color: "#d97706",
        icon: <FaUsers />,
        careerPaths: ["Teacher Assistant", "Tutor", "Educational Assistant", "Curriculum Developer"]
      },
      {
        id: "dip-nur",
        name: "Nursing",
        description: "Comprehensive nursing training for healthcare careers with clinical practice.",
        head: "Dr. Robert Kim",
        courses: 22,
        students: 150,
        color: "#dc2626",
        icon: <FaUsers />,
        careerPaths: ["Registered Nurse", "Nurse Assistant", "Home Health Aide", "Medical Assistant"]
      }
    ]
  },
  {
    id: "deg-001",
    type: "Bachelor's Degree",
    level: "Undergraduate",
    icon: <FaGraduationCap />,
    description: "Four-year comprehensive programs offering in-depth knowledge and research opportunities.",
    duration: "4 Years",
    credits: 120,
    tuition: "$8,500/year",
    requirements: ["High School Diploma", "Minimum GPA 3.0", "English Proficiency Test", "Letters of Recommendation"],
    featured: false,
    departments: [
      {
        id: "deg-se",
        name: "Software Engineering",
        description: "Advanced software development, architecture, and engineering principles.",
        head: "Dr. Alan Turing",
        courses: 32,
        students: 180,
        color: "#7c3aed",
        icon: <FaUniversity />,
        careerPaths: ["Software Engineer", "DevOps Engineer", "Systems Architect", "Tech Lead"]
      },
      {
        id: "deg-acc",
        name: "Accounting",
        description: "Comprehensive accounting principles, financial analysis, and auditing.",
        head: "Prof. Michael Brown",
        courses: 28,
        students: 220,
        color: "#0891b2",
        icon: <FaChartLine />,
        careerPaths: ["CPA", "Financial Analyst", "Auditor", "Tax Consultant"]
      },
      {
        id: "deg-theo",
        name: "Theology",
        description: "In-depth study of theological principles, biblical studies, and ministry.",
        head: "Dr. Samuel Bekele",
        courses: 30,
        students: 120,
        color: "#065f46",
        icon: <FaBook />,
        careerPaths: ["Pastor", "Theologian", "Religious Educator", "Chaplain"]
      },
      {
        id: "deg-bio",
        name: "Biology",
        description: "Comprehensive biological sciences with research and laboratory work.",
        head: "Dr. Jane Goodall",
        courses: 34,
        students: 160,
        color: "#16a34a",
        icon: <FaUniversity />,
        careerPaths: ["Research Scientist", "Biologist", "Environmental Consultant", "Lab Manager"]
      }
    ]
  },
  {
    id: "ma-001",
    type: "Master's Degree",
    level: "Graduate",
    icon: <FaUniversity />,
    description: "Advanced graduate programs focusing on research, specialization, and leadership development.",
    duration: "2-3 Years",
    credits: 36,
    tuition: "$12,000/year",
    requirements: ["Bachelor's Degree", "Minimum GPA 3.5", "Research Proposal", "Interview"],
    featured: false,
    departments: [
      {
        id: "ma-theo",
        name: "Theology",
        description: "Advanced theological research and ministerial leadership development.",
        head: "Dr. Daniel Getachew",
        courses: 12,
        students: 45,
        color: "#92400e",
        icon: <FaBook />,
        careerPaths: ["Senior Pastor", "Theology Professor", "Religious Director", "Author"]
      },
      {
        id: "ma-ldr",
        name: "Leadership",
        description: "Developing executive leadership skills for organizational management.",
        head: "Prof. Angela Merkel",
        courses: 14,
        students: 60,
        color: "#3730a3",
        icon: <FaUsers />,
        careerPaths: ["Executive Director", "Leadership Consultant", "Organizational Development Manager"]
      },
      {
        id: "ma-edu",
        name: "Education",
        description: "Advanced educational theories, research methodologies, and administration.",
        head: "Dr. Maria Montessori",
        courses: 16,
        students: 55,
        color: "#be185d",
        icon: <FaGraduationCap />,
        careerPaths: ["School Principal", "Curriculum Director", "Education Policy Maker", "Professor"]
      },
      {
        id: "ma-coun",
        name: "Counseling",
        description: "Clinical counseling skills and psychological therapeutic approaches.",
        head: "Dr. Carl Rogers",
        courses: 18,
        students: 40,
        color: "#0d9488",
        icon: <FaUsers />,
        careerPaths: ["Licensed Counselor", "Therapist", "Mental Health Consultant", "Clinical Supervisor"]
      }
    ]
  }
];

export default function Campus() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDepartments, setFilteredDepartments] = useState<Department[]>([]);
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  // Filter departments based on search
  useEffect(() => {
    const currentDepts = programs[activeProgram].departments;
    if (searchTerm.trim() === "") {
      setFilteredDepartments(currentDepts);
    } else {
      const filtered = currentDepts.filter(dept =>
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.careerPaths.some(path => path.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredDepartments(filtered);
    }
  }, [searchTerm, activeProgram]);

  // Initialize filtered departments
  useEffect(() => {
    setFilteredDepartments(programs[activeProgram].departments);
  }, [activeProgram]);

  const handleDepartmentClick = (dept: Department) => {
    setSelectedDept(dept);
  };

  const handleBackToList = () => {
    setSelectedDept(null);
  };

  const handleApplyNow = () => {
    // This will be connected to backend application form
    console.log("Application process initiated");
    alert("Application process will open in a new window. This will connect to backend.");
  };

  const programs = initialPrograms; // This will later be from useState with backend data

  return (
    <div className={styles.campusContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Berhane Kristos Campus</h1>
            <p className={styles.heroSubtitle}>
              Transformative Education Rooted in Faith and Excellence
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <FaUsers className={styles.statIcon} />
                <div>
                  <h3>2,500+</h3>
                  <p>Students Enrolled</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <FaGraduationCap className={styles.statIcon} />
                <div>
                  <h3>50+</h3>
                  <p>Programs Offered</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <FaUniversity className={styles.statIcon} />
                <div>
                  <h3>15+</h3>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a>
            <FaChevronRight className={styles.breadcrumbIcon} />
            <a href="/academics">Academics</a>
            <FaChevronRight className={styles.breadcrumbIcon} />
            <span>Programs & Departments</span>
          </nav>

          {/* Page Header */}
          <header className={styles.pageHeader}>
            <h1 className={styles.title}>Our Academic Programs</h1>
            <p className={styles.subtitle}>
              Discover comprehensive educational pathways designed to equip leaders 
              with knowledge, faith, and practical skills for tomorrow's challenges.
            </p>
          </header>

          {/* Program Overview Cards */}
          <div className={styles.programOverview}>
            {programs.map((program, index) => (
              <div 
                key={program.id}
                className={`${styles.overviewCard} ${activeProgram === index ? styles.activeOverview : ''}`}
                onClick={() => setActiveProgram(index)}
              >
                <div className={styles.overviewIcon}>{program.icon}</div>
                <h3>{program.type}</h3>
                <p>{program.description}</p>
                <div className={styles.overviewDetails}>
                  <span><FaClock /> {program.duration}</span>
                  <span><FaBook /> {program.credits} Credits</span>
                </div>
                {program.featured && (
                  <div className={styles.featuredBadge}>
                    <FaStar /> Featured
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Program Details Section */}
          <section className={styles.programDetailsSection}>
            <div className={styles.programHeader}>
              <div>
                <h2 className={styles.programTitle}>
                  {programs[activeProgram].type} Programs
                </h2>
                <p className={styles.programDescription}>
                  {programs[activeProgram].description}
                </p>
                <div className={styles.programMeta}>
                  <span className={styles.metaItem}>
                    <FaClock /> Duration: {programs[activeProgram].duration}
                  </span>
                  <span className={styles.metaItem}>
                    <FaBook /> Credits: {programs[activeProgram].credits}
                  </span>
                  <span className={styles.metaItem}>
                    <FaUniversity /> Level: {programs[activeProgram].level}
                  </span>
                  <span className={styles.metaItem}>
                    💰 Tuition: {programs[activeProgram].tuition}
                  </span>
                </div>
              </div>
              <button className={styles.applyButton} onClick={handleApplyNow}>
                Apply Now <FaArrowRight />
              </button>
            </div>

            {/* Search and Filter */}
            <div className={styles.searchSection}>
              <div className={styles.searchBox}>
                <FaSearch className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search departments, courses, or career paths..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                <button className={styles.filterButton}>
                  <FaFilter /> Filter
                </button>
              </div>
              <p className={styles.resultCount}>
                Showing {filteredDepartments.length} of {programs[activeProgram].departments.length} departments
              </p>
            </div>

            {/* Departments Grid/List View */}
            {!selectedDept ? (
              <div className={styles.departmentsGrid}>
                {filteredDepartments.map((dept) => (
                  <div 
                    key={dept.id} 
                    className={styles.deptCard}
                    onClick={() => handleDepartmentClick(dept)}
                  >
                    <div 
                      className={styles.deptIconWrapper}
                      style={{ backgroundColor: `${dept.color}20` }}
                    >
                      <span style={{ color: dept.color }}>{dept.icon}</span>
                    </div>
                    <div className={styles.deptContent}>
                      <h3>{dept.name}</h3>
                      <p>{dept.description}</p>
                      <div className={styles.deptMeta}>
                        <span><FaBook /> {dept.courses} Courses</span>
                        <span><FaUsers /> {dept.students} Students</span>
                      </div>
                      <div className={styles.deptFooter}>
                        <span className={styles.deptHead}>
                          Head: {dept.head}
                        </span>
                        <button className={styles.viewDetailsBtn}>
                          View Details <FaChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Department Detail View */
              <div className={styles.departmentDetailView}>
                <button className={styles.backButton} onClick={handleBackToList}>
                  ← Back to Departments
                </button>
                
                <div className={styles.detailHeader}>
                  <div 
                    className={styles.detailIcon}
                    style={{ backgroundColor: `${selectedDept.color}20` }}
                  >
                    <span style={{ color: selectedDept.color }}>{selectedDept.icon}</span>
                  </div>
                  <div>
                    <h2>{selectedDept.name}</h2>
                    <p className={styles.detailDescription}>{selectedDept.description}</p>
                    <div className={styles.detailStats}>
                      <div className={styles.statBox}>
                        <h4>{selectedDept.courses}</h4>
                        <p>Courses</p>
                      </div>
                      <div className={styles.statBox}>
                        <h4>{selectedDept.students}</h4>
                        <p>Students</p>
                      </div>
                      <div className={styles.statBox}>
                        <h4>{selectedDept.head.split(' ')[0]}</h4>
                        <p>Department Head</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.detailContent}>
                  <div className={styles.careerPaths}>
                    <h3><FaGraduationCap /> Career Paths</h3>
                    <div className={styles.pathsGrid}>
                      {selectedDept.careerPaths.map((path, idx) => (
                        <span key={idx} className={styles.pathTag}>
                          {path}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.programInfo}>
                    <h3><FaUniversity /> Program Information</h3>
                    <div className={styles.infoGrid}>
                      <div className={styles.infoItem}>
                        <strong>Degree Type:</strong>
                        <span>{programs[activeProgram].type}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Duration:</strong>
                        <span>{programs[activeProgram].duration}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Credits Required:</strong>
                        <span>{programs[activeProgram].credits}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <strong>Tuition:</strong>
                        <span>{programs[activeProgram].tuition}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.requirements}>
                    <h3><FaBook /> Admission Requirements</h3>
                    <ul>
                      {programs[activeProgram].requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <button className={styles.applyButton} onClick={handleApplyNow}>
                    Apply to This Program <FaArrowRight />
                  </button>
                  <button className={styles.contactButton}>
                    Contact Department
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* Upcoming Events Section */}
          <section className={styles.eventsSection}>
            <h2 className={styles.sectionTitle}>
              <FaCalendarAlt /> Upcoming Campus Events
            </h2>
            <div className={styles.eventsGrid}>
              <div className={styles.eventCard}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>15</span>
                  <span className={styles.eventMonth}>MAR</span>
                </div>
                <div className={styles.eventContent}>
                  <h3>Open House & Program Fair</h3>
                  <p>Explore all our programs and meet department heads</p>
                  <span className={styles.eventTime}><FaClock /> 10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className={styles.eventCard}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>22</span>
                  <span className={styles.eventMonth}>MAR</span>
                </div>
                <div className={styles.eventContent}>
                  <h3>Scholarship Application Deadline</h3>
                  <p>Last day to apply for academic year scholarships</p>
                  <span className={styles.eventTime}><FaClock /> Applications Close</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Ready to Start Your Journey?</h2>
              <p>
                Join our community of learners and leaders. Applications are now open 
                for the upcoming academic year.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryCta} onClick={handleApplyNow}>
                  Apply Now <FaArrowRight />
                </button>
                <button className={styles.secondaryCta}>
                  <FaMapMarkerAlt /> Schedule Campus Tour
                </button>
                <button className={styles.secondaryCta}>
                  <FaGlobe /> Virtual Tour
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}