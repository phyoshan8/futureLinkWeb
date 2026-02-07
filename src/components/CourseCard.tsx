import React from 'react';
import { BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <BookOpen className="h-8 w-8 text-indigo-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {category}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;