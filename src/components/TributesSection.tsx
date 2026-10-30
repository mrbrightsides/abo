import React, { useState, useEffect } from 'react';
import { HISTORICAL_TRIBUTES, TributeItem } from '../data/buyaData';
import { HeartHandshake, Send, MessageSquareQuote, CheckCircle, Clock } from 'lucide-react';

export const TributesSection: React.FC = () => {
  const [tributes, setTributes] = useState<TributeItem[]>([]);
  const [name, setName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [message, setMessage] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('buya_user_tributes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTributes([...parsed, ...HISTORICAL_TRIBUTES]);
        return;
      } catch {
        // fallback
      }
    }
    setTributes(HISTORICAL_TRIBUTES);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newTribute: TributeItem = {
      id: 'usr-' + Date.now(),
      name: name.trim(),
      affiliation: affiliation.trim() || 'Warga Muhammadiyah / Simpatisan',
      date: 'Baru saja',
      message: message.trim(),
      isHistorical: false
    };

    const userOnly = [newTribute, ...tributes.filter((t) => !t.isHistorical)];
    localStorage.setItem('buya_user_tributes', JSON.stringify(userOnly));

    setTributes([newTribute, ...tributes]);
    setName('');
    setAffiliation('');
    setMessage('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 3500);
  };

  const insertTemplate = (templateText: string) => {
    setMessage((prev) => (prev ? `${prev} ${templateText}` : templateText));
  };

  return (
    <section id="doa-takzim" className="py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-emerald-800 font-medium mb-1">
            Buku Kenangan & Doa Takzim
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Untaian Doa & Kesaksian Tokoh
          </h2>
          <p className="mt-2 text-stone-600 text-sm leading-relaxed">
            Menyimak kesaksian para sahabat seperjuangan, murid, dan kolega lintas etnis atas budi pekerti luhur
            Buya Rasyid Thalib, serta memanjatkan doa terbaik bagi almarhum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form to Write a Tribute / Prayer */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 border border-stone-200 rounded-lg shadow-2xs h-fit space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Tuliskan Doa & Kenangan Takzim
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Sampaikan doa husnul khatimah dan apresiasi untuk jasa pengabdian Buya Rasyid Thalib.
              </p>
            </div>

            {submittedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Alhamdulillah, doa dan kenangan Anda telah tersemat di buku memorabilia.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Nama Anda / Gelar *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Ahmad Fauzi / Kader IPM Palembang"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:outline-none focus:border-emerald-800 bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Instansi / Cabang Muhammadiyah / Asal Kota
                </label>
                <input
                  type="text"
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  placeholder="Contoh: PCM Ilir Timur / Alumni UMP"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:outline-none focus:border-emerald-800 bg-stone-50/50"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-stone-700">
                    Pesan Doa & Takzim *
                  </label>
                  <span className="text-[10px] text-stone-400">Pilihan cepat:</span>
                </div>

                {/* Quick prayer template pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <button
                    type="button"
                    onClick={() => insertTemplate("Semoga Allah melapangkan kubur Buya Rasyid dan membalas ribuan amal shalih beliau.")}
                    className="text-[10px] px-2 py-0.5 bg-stone-100 hover:bg-stone-200 rounded text-stone-700 border border-stone-200 cursor-pointer"
                  >
                    + Doa Lapang Kubur
                  </button>
                  <button
                    type="button"
                    onClick={() => insertTemplate("Teladan keilmuan dan dakwah santun Buya menjadi lentera bagi generasi muda kami.")}
                    className="text-[10px] px-2 py-0.5 bg-stone-100 hover:bg-stone-200 rounded text-stone-700 border border-stone-200 cursor-pointer"
                  >
                    + Keteladanan Ilmu
                  </button>
                </div>

                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan doa atau kesan Anda terhadap perjuangan Buya H.M. Rasyid Thalib..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:outline-none focus:border-emerald-800 bg-stone-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-medium rounded transition-colors shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirimkan Doa ke Buku Kenangan</span>
              </button>
            </form>
          </div>

          {/* Right Column: Tributes Feed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-200">
              <span className="font-medium text-stone-800">
                Semua Catatan ({tributes.length})
              </span>
              <span className="text-[11px]">Termasuk arsip kesaksian sahabat tahun 1997</span>
            </div>

            <div className="space-y-4 max-h-[640px] overflow-y-auto pr-2">
              {tributes.map((tribute) => (
                <div
                  key={tribute.id}
                  className={`p-5 rounded-lg border transition-all ${
                    tribute.isHistorical
                      ? 'bg-amber-50/50 border-amber-200/90'
                      : 'bg-white border-stone-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <div className="font-serif font-bold text-stone-900 text-base">
                        {tribute.name}
                      </div>
                      <div className="text-xs text-emerald-900 font-medium">
                        {tribute.affiliation}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-stone-500 shrink-0 font-mono">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{tribute.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light italic">
                    &ldquo;{tribute.message}&rdquo;
                  </p>

                  {tribute.isHistorical && (
                    <div className="mt-3 pt-2 border-t border-amber-200/60 text-[10px] uppercase tracking-wider text-amber-900 font-medium">
                      Kesaksian Tokoh Sejarah Kontemporer
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
