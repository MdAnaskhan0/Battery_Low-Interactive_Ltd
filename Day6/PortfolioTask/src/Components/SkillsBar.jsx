// eslint-disable-next-line no-unused-vars
import React from "react";

const SkillsBar = () => {
  return (
    <>
      <section className="mt-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4 text-left">
          Skills
        </h3>
        <hr className="w-16 border-t-2 border-blue-500 mb-6" />

        <div className="space-y-6">
          <ul className="space-y-4">
            {/* Skill Progress Bars */}

            {/* HTML */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">HTML</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* CSS */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">CSS</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[85%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  85%
                </div>
              </div>
            </li>

            {/* JavaScript */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">JavaScript</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* React */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">React</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[85%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  85%
                </div>
              </div>
            </li>

            {/* Tailwind */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">Tailwind</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* Node */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">Node.JS</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[85%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  85%
                </div>
              </div>
            </li>

            {/* Express */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">Express.JS</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[85%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  85%
                </div>
              </div>
            </li>

            {/* MongoDB */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">MongoDB</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* MySQL */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">MySQL</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[85%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  85%
                </div>
              </div>
            </li>

            {/* Git */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">Git</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* GitHub */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">GitHub</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* LeteX */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">Letex</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* MS Office */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">MS Office</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </li>

            {/* Adobe Photoshop */}
            <li className="flex items-center justify-between text-lg text-gray-700">
              <span className="font-medium text-gray-900 w-1/3">Adobe Photoshop</span>
              <div className="flex-1 bg-gray-300 rounded-full h-5 relative">
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-700 h-5 rounded-full w-[90%]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
                  90%
                </div>   
              </div>          
            </li>

            
          </ul>
        </div>
      </section>
    </>
  );
};

export default SkillsBar;
