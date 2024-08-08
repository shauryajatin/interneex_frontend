import React from 'react';
import git from '../../assets/images/git.webp'
import github from '../../assets/images/github.svg'
import panda from '../../assets/images/pandas.webp'
import numpy from '../../assets/images/numpy (1).webp'
import powerbi from '../../assets/images/power-bi.webp'
import pytorch from '../../assets/images/pytorch.webp'
import tableeau from '../../assets/images/tableau (1).webp'
import tensorflow from '../../assets/images/tensor-flow.webp'
import matplotlib from '../../assets/images/matplotlib.webp'
import python from '../../assets/images/python.webp'
const skills = [
  { name: 'Python', icon: python },
  { name: 'Pandas', icon: panda },
  { name: 'NumPy', icon: numpy },
  { name: 'Matplotlib', icon: matplotlib },
//   { name: 'SQL', icon: 'path/to/sql-icon.png' },
  { name: 'Tableau', icon: tableeau },
  { name: 'PowerBI', icon: powerbi},
  { name: 'GIT', icon: git },
  { name: 'GitHub', icon: github },
//   { name: 'Scikit-Learn', icon: scikit },
//   { name: 'XGBoost', icon: 'path/to/xgboost-icon.png' },
//   { name: 'NLTK', icon: 'path/to/nltk-icon.png' },
//   { name: 'SciPy', icon: 'path/to/scipy-icon.png' },
  { name: 'PyTorch', icon: pytorch },
  { name: 'TensorFlow', icon: tensorflow },
//   { name: 'Chat GPT', icon: 'path/to/chatgpt-icon.png' }
];

const SkillsSection = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills you’ll acquire</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
              </div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
