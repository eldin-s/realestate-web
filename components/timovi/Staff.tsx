"use client";

import { useState } from "react";

interface Agent {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  image: string;
}

interface Team {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: string;
}

// Dummy data for agents
const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Senior Real Estate Agent",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@realestate.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Property Specialist",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@realestate.com",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Luxury Home Advisor",
    phone: "+1 (555) 345-6789",
    email: "emily.rodriguez@realestate.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Commercial Real Estate Agent",
    phone: "+1 (555) 456-7890",
    email: "david.thompson@realestate.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Jessica Williams",
    position: "Residential Sales Agent",
    phone: "+1 (555) 567-8901",
    email: "jessica.williams@realestate.com",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Robert Anderson",
    position: "Investment Property Specialist",
    phone: "+1 (555) 678-9012",
    email: "robert.anderson@realestate.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Amanda Davis",
    position: "First-Time Buyer Specialist",
    phone: "+1 (555) 789-0123",
    email: "amanda.davis@realestate.com",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop",
  },
  {
    id: 8,
    name: "James Wilson",
    position: "Real Estate Consultant",
    phone: "+1 (555) 890-1234",
    email: "james.wilson@realestate.com",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop",
  },
];

// Dummy data for teams
const teams: Team[] = [
  {
    id: 1,
    name: "Downtown Sales Team",
    phone: "+1 (555) 100-2000",
    email: "downtown@realestate.com",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Luxury Properties Division",
    phone: "+1 (555) 200-3000",
    email: "luxury@realestate.com",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=300&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Commercial Real Estate Unit",
    phone: "+1 (555) 300-4000",
    email: "commercial@realestate.com",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Residential Solutions Team",
    phone: "+1 (555) 400-5000",
    email: "residential@realestate.com",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Investment Advisory Group",
    phone: "+1 (555) 500-6000",
    email: "investment@realestate.com",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop",
  },
  {
    id: 6,
    name: "New Construction Specialists",
    phone: "+1 (555) 600-7000",
    email: "newconstruction@realestate.com",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Property Management Team",
    phone: "+1 (555) 700-8000",
    email: "management@realestate.com",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=400&fit=crop",
  },
  {
    id: 8,
    name: "International Relations Division",
    phone: "+1 (555) 800-9000",
    email: "international@realestate.com",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=400&fit=crop",
  },
];

const Staff = () => {
  const [activeTab, setActiveTab] = useState<"agents" | "teams">("agents");

  return (
    <div className="mx-auto px-4 py-8 lg:p-24 md:p-18 p-6 pt-14 bg-white">
      {/* Toggle Switch */}
      <div className="flex  mb-8">
        <div className="relative bg-gray-200 rounded-full p-1 w-80">
          <div className="relative flex">
            <button
              onClick={() => setActiveTab("agents")}
              className={`flex-1 py-3 px-6 text-lg text-card font-semibold rounded-full transition-colors duration-300 ${
                activeTab === "agents" ? "bg-white" : ""
              }`}
            >
              Agenti
            </button>
            <button
              onClick={() => setActiveTab("teams")}
              className={`flex-1 py-3 px-6 text-lg text-card font-semibold rounded-full transition-colors duration-300 ${
                activeTab === "teams" ? "bg-white" : ""
              }`}
            >
              Teamovi
            </button>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeTab === "agents"
          ? agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)
          : teams.map((team) => <TeamCard key={team.id} team={team} />)}
      </div>
    </div>
  );
};

export default Staff;

const AgentCard = ({ agent }: { agent: Agent }) => (
  <div className="bg-white rounded-lg transition-shadow duration-300">
    <div className="overflow-hidden rounded-lg">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="pt-4">
      <h3 className="font-bold text-xl text-card mb-1">{agent.name}</h3>
      <p className="text-gray-600 mb-3">{agent.position}</p>
      <div className="space-y-2">
        <p className="text-black font-semibold flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {agent.phone}
        </p>
        <p className="text-black font-semibold flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {agent.email}
        </p>
      </div>
    </div>
  </div>
);

const TeamCard = ({ team }: { team: Team }) => (
  <div className="bg-white rounded-lg transition-shadow duration-300">
    <div className="overflow-hidden rounded-lg">
      <img
        src={team.image}
        alt={team.name}
        className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="pt-4">
      <h3 className="font-bold text-xl text-card mb-1">{team.name}</h3>
      <div className="space-y-2">
        <p className="text-black font-semibold flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {team.phone}
        </p>
        <p className="text-black font-semibold flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {team.email}
        </p>
      </div>
    </div>
  </div>
);
