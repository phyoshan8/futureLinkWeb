import React from 'react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';

interface Course {
  title: string;
  description: string;
  category: string;
}

const App: React.FC = () => {
  const courses: Course[] = [
    {
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and database technologies. Build complete applications from frontend to backend.',
      category: 'Programming'
    },
    {
      title: 'UI/UX Class',
      description: 'Learn the principles of user interface and user experience design. Create beautiful, functional designs that users love.',
      category: 'Design'
    },
    {
      title: 'Programming Basic Class',
      description: 'Start your programming journey with fundamental concepts. Perfect for beginners who want to learn coding from scratch.',
      category: 'Programming'
    },
    {
      title: 'English Essential Class',
      description: 'Improve your English language skills with comprehensive lessons covering grammar, vocabulary, and communication.',
      category: 'Language'
    },
    {
      title: 'Chinese Class',
      description: 'Learn Mandarin Chinese with experienced instructors. Master speaking, reading, and writing in this increasingly important language.',
      category: 'Language'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to FutureLink
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Your Bridge to the Future of Education
            </p>
            <p className="text-lg max-w-3xl mx-auto text-indigo-50">
              Discover world-class courses designed to prepare you for tomorrow's challenges. 
              Join thousands of learners who are already shaping their future with FutureLink.
            </p>
            <div className="mt-10">
              <a 
                href="#courses" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of courses designed to help you achieve your goals.
            </p>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                category={course.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 FutureLink. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Empowering learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
