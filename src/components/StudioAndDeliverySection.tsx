export function StudioAndDeliverySection() {
  return (
    <section id="delivery-info" className="py-16 sm:py-24 bg-[#FCFBF9] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bagian 1: Kelebihan Bunga Artificial - Editorial Row Layout */}
        <div className="mb-20 sm:mb-24">
          {/* Header Minimalis & Elegan */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-[#E60067] uppercase mb-3">
              Kelebihan Bunga Artificial
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900 tracking-tight leading-snug">
              Kenapa Memilih Buket Bunga Buatan Florea?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed max-w-2xl">
              Pesona visual anggun setara bunga segar dengan ketahanan abadi—tanpa perlu repot disiram, diganti air, atau diberi nutrisi.
            </p>
          </div>

          {/* Row List / Column Borders yang Terbuka & Bersih (Anti AI Card Box) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 border-y border-stone-200">
            {/* Poin 1 */}
            <div className="py-7 md:py-8 md:pr-8 lg:pr-10 first:pt-6 md:first:pt-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-stone-400 block mb-3">
                  01
                </span>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-900 mb-2">
                  Kenang-Kenangan Abadi
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Buket kelulusan atau hadiah momen spesial tidak akan layu, mencokelat, ataupun rontok. Bentuk dan warnanya tetap terjaga rapi di ruang kamar atau meja kerja Anda.
                </p>
              </div>
            </div>

            {/* Poin 2 */}
            <div className="py-7 md:py-8 md:px-8 lg:px-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-stone-400 block mb-3">
                  02
                </span>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-900 mb-2">
                  Sentuhan Real-Touch Sutra
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Bukan bahan plastik kaku. Kami mengombinasikan kain sutra sintetis grade A dengan gradasi kelopak realistis serta tangkai yang luwes dan alami saat disentuh.
                </p>
              </div>
            </div>

            {/* Poin 3 */}
            <div className="py-7 md:py-8 md:pl-8 lg:pl-10 last:pb-6 md:last:pb-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-medium text-stone-400 block mb-3">
                  03
                </span>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-900 mb-2">
                  Aman Pengiriman Luar Kota
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                  Dikirim menggunakan double-wall box kokoh dengan dudukan penahan bentuk. Siap dikirim ke seluruh wilayah tanpa kekhawatiran buket penyok atau rusak.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian 2: Tentang Studio Florea */}
        <div id="about-studio" className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Kolom Kiri */}
          <div className="lg:col-span-5 space-y-3.5">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-stone-400">
              Studio Florist Terkurasi
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
              Florea Bouquet Studio
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
              Kami memadukan estetika Korean wrapping bergaya minimalis dengan kurasi material floral sintetis terbaik. Setiap buket dirangkai rapi secara personal untuk menghadirkan kado berkesan yang tak lekang waktu.
            </p>
            <p className="text-xs text-stone-500 pt-2 border-l-2 border-[#E60067] pl-3">
              Menerima kustomisasi warna wrapping, pita satin, serta pencetakan kartu ucapan personal.
            </p>
          </div>

          {/* Kolom Kanan: Key Values */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 pt-4 lg:pt-0">
            <div className="space-y-1.5 pb-5 sm:pb-0 border-b sm:border-b-0 sm:border-r border-stone-200 sm:pr-6">
              <span className="text-2xl sm:text-3xl font-serif text-stone-900 block font-light">
                100%
              </span>
              <h4 className="text-xs font-semibold text-stone-800 tracking-wide">
                Bebas Perawatan
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Tanpa perlu disiram air dan tidak sensitif terhadap suhu ruangan.
              </p>
            </div>

            <div className="space-y-1.5 pb-5 sm:pb-0 border-b sm:border-b-0 sm:border-r border-stone-200 sm:px-6">
              <span className="text-2xl sm:text-3xl font-serif text-stone-900 block font-light">
                Aman
              </span>
              <h4 className="text-xs font-semibold text-stone-800 tracking-wide">
                Bebas Alergi
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Nir-serbuk sari, aman untuk ruang sensitif seperti kamar tidur atau RS.
              </p>
            </div>

            <div className="space-y-1.5 sm:pl-6">
              <span className="text-2xl sm:text-3xl font-serif text-stone-900 block font-light">
                Kustom
              </span>
              <h4 className="text-xs font-semibold text-stone-800 tracking-wide">
                Personalized
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Fleksibel request nuansa warna wrap dan isi pesan kartu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
