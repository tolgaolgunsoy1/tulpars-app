import { Award, ChevronRight } from 'lucide-react';

function Certificates({ certificates }) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Sertifikalar ve Yetkinlikler</h2>

      <div className="space-y-4">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{certificate.icon}</div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{certificate.name}</h3>
                <p className="text-sm text-neutral-600">
                  Geçerlilik tarihi: {certificate.validityDate}
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-neutral-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;