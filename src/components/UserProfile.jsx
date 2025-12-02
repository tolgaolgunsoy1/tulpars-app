import { useState } from 'react';
import { Edit3, Phone, Mail, User, Award, ChevronRight } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import StatsCards from './StatsCards';
import PersonalInfo from './PersonalInfo';
import Certificates from './Certificates';

function UserProfile() {
  const [userData, setUserData] = useState({
    name: 'Ali Veli',
    status: 'Gönüllü Üye',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    stats: {
      completedTasks: 12,
      educationHours: 48
    },
    personalInfo: {
      phone: '+90 555 123 4567',
      email: 'ali.veli@example.com',
      emergencyContact: 'Ayşe Yılmaz'
    },
    certificates: [
      {
        id: 1,
        name: 'İlk Yardım Sertifikası',
        validityDate: '12.2025',
        icon: '🏥'
      }
    ]
  });

  const handlePersonalInfoUpdate = (field, value) => {
    setUserData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <ProfileHeader userData={userData} />

          <StatsCards stats={userData.stats} />

          <PersonalInfo
            personalInfo={userData.personalInfo}
            onUpdate={handlePersonalInfoUpdate}
          />

          <Certificates certificates={userData.certificates} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;