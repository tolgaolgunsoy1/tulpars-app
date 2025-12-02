import { Edit3 } from 'lucide-react';

function ProfileHeader({ userData }) {
  return (
    <div className="card">
      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            src={userData.avatar}
            alt={`${userData.name} profil fotoğrafı`}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <button className="absolute -bottom-1 -right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-neutral-900">{userData.name}</h1>
          <p className="text-lg text-primary font-semibold mt-1">{userData.status}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;