import { useState } from 'react';
import { Phone, Mail, User, ChevronRight } from 'lucide-react';

function PersonalInfo({ personalInfo, onUpdate }) {
  const [editing, setEditing] = useState(null);
  const [tempValues, setTempValues] = useState(personalInfo);

  const infoItems = [
    {
      key: 'phone',
      icon: Phone,
      label: 'Telefon Numarası',
      value: personalInfo.phone
    },
    {
      key: 'email',
      icon: Mail,
      label: 'E-posta',
      value: personalInfo.email
    },
    {
      key: 'emergencyContact',
      icon: User,
      label: 'Acil Durum Kişisi',
      value: personalInfo.emergencyContact
    }
  ];

  const handleEdit = (key) => {
    setEditing(key);
    setTempValues(personalInfo);
  };

  const handleSave = (key) => {
    onUpdate(key, tempValues[key]);
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
    setTempValues(personalInfo);
  };

  const handleChange = (key, value) => {
    setTempValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Kişisel Bilgiler</h2>

      <div className="space-y-4">
        {infoItems.map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <item.icon className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-600">{item.label}</p>
                {editing === item.key ? (
                  <input
                    type="text"
                    value={tempValues[item.key]}
                    onChange={(e) => handleChange(item.key, e.target.value)}
                    className="text-lg font-semibold text-neutral-900 bg-transparent border-b-2 border-primary focus:outline-none"
                    autoFocus
                  />
                ) : (
                  <p className="text-lg font-semibold text-neutral-900">{item.value}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {editing === item.key ? (
                <>
                  <button
                    onClick={() => handleSave(item.key)}
                    className="text-primary hover:text-primary/80 font-medium px-3 py-1"
                  >
                    Kaydet
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-neutral-500 hover:text-neutral-700 px-3 py-1"
                  >
                    İptal
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleEdit(item.key)}
                  className="text-primary hover:text-primary/80 p-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalInfo;