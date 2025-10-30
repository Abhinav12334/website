
import React from 'react';
import { TEAM_MEMBERS, MILESTONES } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';
import { Flag, Rocket, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-light">
      {/* Page Header */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">About Aptivora</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            We are a team of passionate creators, thinkers, and problem-solvers dedicated to building exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <Flag className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-2xl font-bold mt-4">Our Mission</h2>
              <p className="mt-2 text-gray-600">To empower businesses with innovative and intelligent technology solutions that drive growth and create lasting value.</p>
            </div>
            <div className="p-6">
              <Rocket className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-2xl font-bold mt-4">Our Vision</h2>
              <p className="mt-2 text-gray-600">To be a leading partner in digital transformation, recognized for our creativity, expertise, and commitment to client success.</p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-2xl font-bold mt-4">Our Values</h2>
              <p className="mt-2 text-gray-600">Collaboration, Integrity, Innovation, and Excellence are the cornerstones of our work and culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">The brilliant minds behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900">Our Journey</h2>
              <p className="mt-4 text-lg text-gray-600">A brief history of our milestones and achievements.</p>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 w-0.5 h-full bg-blue-200 transform -translate-x-1/2"></div>
              {MILESTONES.map((milestone, index) => (
                <div key={index} className="relative mb-8 flex justify-between items-center w-full">
                  <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}></div>
                  <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                    <div className="mx-auto text-white font-semibold text-sm">{index + 1}</div>
                  </div>
                  <div className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl ${index % 2 === 0 ? 'bg-blue-50' : 'bg-secondary text-right'}`}>
                    <p className="font-bold text-primary">{milestone.year}</p>
                    <h3 className="font-bold text-gray-800 text-lg">{milestone.event}</h3>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
