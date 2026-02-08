import { BookOpen } from 'lucide-react';
import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 transition-colors duration-300">
              {category}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed dark:text-slate-400 transition-colors duration-300">{description}</p>
          <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;