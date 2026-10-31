export interface TimelineEvent {
  year: string;
  period: string;
  title: string;
  location: string;
  description: string;
  category: 'pendidikan' | 'dakwah' | 'kepemimpinan' | 'amal-usaha' | 'sejarah';
  highlights: string[];
}

export interface QuoteItem {
  id: string;
  quote: string;
  context: string;
  theme: 'Dakwah Santun' | 'Ketelitian Ilmu' | 'Ukhuwah & Etnis' | 'Ikhlas Berkhidmat';
  source: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  year: string;
  location: string;
  imageUrl: string;
  aspect: string;
  caption: string;
  historicalContext: string;
  category: 'portret' | 'pendidikan' | 'keilmuan' | 'sejarah-kota' | 'dakwah-inklusif';
}

export interface TributeItem {
  id: string;
  name: string;
  affiliation: string;
  date: string;
  message: string;
  isHistorical?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const BUYA_PROFILE = {
  fullName: "Buya Haji Muhammad Rasyid Thalib",
  popularName: "Buya Rasyid",
  birthYear: 1915,
  deathYear: 1997,
  birthPlace: "Nagari Gelapung, Danau Maninjau, Sumatera Barat",
  burialPlace: "Pekuburan Umum Kamboja, Palembang, Sumatera Selatan",
  deathDateText: "19 Februari 1997 (3 Syawal 1417 H)",
  roles: [
    "Ketua Pimpinan Wilayah Muhammadiyah Sumatera Selatan (1975–1995)",
    "Ketua & Wakil Ketua Majelis Ulama Indonesia (MUI) Sumatera Selatan",
    "Dosen Senior IAIN Raden Fatah Palembang (1958–pensiun)",
    "Mantan Kepala Penerangan Provinsi Sumatera Selatan",
    "Tokoh Partai Masyumi Sumatera Selatan (1950-an)",
    "Alumni Kulliyatul Muballigh Thawalib Padang Panjang",
    "Tokoh Perintis Pembinaan Muslim Tionghoa Palembang"
  ],
  parents: {
    father: "H.M. Thalib (Saudagar & Da'i Minangkabau)",
    mother: "Hj. Naimah (Guru Mengaji di Nagari Gelapung)"
  },
  education: [
    "HIS (Hollandsch-Inlandsche School)",
    "MULO (Meer Uitgebreid Lager Onderwijs)",
    "Kulliyatul Muballigh Thawalib Padang Panjang (Lulus ~1938)"
  ],
  publishedBook: "Buku Kemuhammadiyahan dan Penerapan Sehari-hari",
  plannedBook: "Fiqih dan Berbagai Permasalahannya"
};

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1915",
    period: "Awal Kehidupan",
    title: "Lahir di Tepian Danau Maninjau",
    location: "Nagari Gelapung, Danau Maninjau, Sumbar",
    description: "Lahir dari rahim Hj. Naimah, guru mengaji kampung yang shalehah, dan H.M. Thalib, seorang saudagar keliling dan muballigh yang melintasi Bukittinggi hingga Bengkulu.",
    category: "sejarah",
    highlights: ["Masa kecil dibimbing langsung oleh ibunda dalam Al-Qur'an", "Mendapat teladan kegigihan berniaga dan berdakwah dari ayahanda"]
  },
  {
    year: "1925 - 1937",
    period: "Masa Menuntut Ilmu",
    title: "Menimba Ilmu dari HIS hingga Thawalib Padang Panjang",
    location: "Padang Panjang, Sumatera Barat",
    description: "Menempuh jenjang modern di HIS dan MULO, lalu memperdalam tsaqafah Islam di Kulliyatul Muballigh Thawalib Padang Panjang—sumber pembaruan pemikiran Islam di Nusantara.",
    category: "pendidikan",
    highlights: ["Mendalami bahasa Arab, ushul fiqih, tafsir, dan retorika dakwah", "Menyerap semangat tajdid dari ulama-ulama Minangkabau"]
  },
  {
    year: "1938",
    period: "Awal Pengabdian",
    title: "Diutus Mengajar di Mu'allimin Bengkulu",
    location: "Bengkulu",
    description: "Setelah menamatkan studi di Thawalib, Buya Rasyid diamanahkan mengajar para kader muda di Sekolah Mu'allimin Muhammadiyah Bengkulu.",
    category: "pendidikan",
    highlights: ["Mendidik calon guru dan muballigh di pelosok Bengkulu", "Membangun kedekatan emosional dengan pergerakan Islam setempat"]
  },
  {
    year: "1944",
    period: "Kiprah Persyarikatan",
    title: "Pimpinan Eksekutif Muhammadiyah Karesidenan Bengkulu",
    location: "Bengkulu & Bukittinggi",
    description: "Mulai aktif penuh dalam struktur persyarikatan. Menjadi utusan resmi karesidenan Bengkulu dalam Konferensi Muhammadiyah di Bukittinggi di tengah transisi pergolakan kemerdekaan.",
    category: "kepemimpinan",
    highlights: ["Keterlibatan aktif struktural Muhammadiyah tingkat regional", "Meneguhkan relasi perjuangan kemerdekaan melalui jalur dakwah"]
  },
  {
    year: "1945 - 1950",
    period: "Masa Revolusi & Penerangan",
    title: "Bertugas di Kantor Penerangan Karesidenan Bengkulu",
    location: "Bengkulu",
    description: "Di samping mendidik di sekolah Muhammadiyah, Buya mendedikasikan keahlian komunikasi publiknya di Kantor Penerangan Karesidenan Bengkulu hingga akhir 1950.",
    category: "sejarah",
    highlights: ["Menyampaikan pesan-pesan persatuan dan penerangan rakyat", "Mematangkan kemampuan diplomasi dan komunikasi massa"]
  },
  {
    year: "1950",
    period: "Hijrah ke Palembang",
    title: "Pindah ke Palembang & Kepala Penerangan Sumsel",
    location: "Palembang, Sumatera Selatan",
    description: "Tuntutan tugas membawa Buya ke ibukota Sumatera Selatan. Menjabat Kepala Penerangan Provinsi Sumsel dan tampil sebagai tokoh kunci Partai Masyumi Sumsel pada era 1950-an.",
    category: "kepemimpinan",
    highlights: ["Menjadi figur pemersatu umat di kancah politik Islam Masyumi", "Memperluas jangkauan dakwah ke penjuru pelosok Bumi Sriwijaya"]
  },
  {
    year: "1958",
    period: "Akademisi & Ulama",
    title: "Dosen IAIN Raden Fatah & Da'i Kondang",
    location: "IAIN Raden Fatah, Palembang",
    description: "Memulai pengabdian panjang sebagai akademisi di IAIN Raden Fatah Palembang hingga purnatugas. Frekuensi ceramah di majelis taklim dan peringatan hari besar Islam melonjak pesat.",
    category: "dakwah",
    highlights: ["Mendidik ribuan sarjana muslim dan muballigh Sumatera Selatan", "Dikenal dengan gaya ceramah yang santun, tertib argumen, dan sejuk"]
  },
  {
    year: "1970 - 1979",
    period: "Dakwah Inklusif",
    title: "Merangkul Mualaf Tionghoa Bersama KH Abdul Halim",
    location: "Palembang",
    description: "Tercatat dalam tinta emas sejarah: Buya Rasyid bahu-membahu dengan ulama keturunan Tionghoa K.H. Abdul Halim (Lim Kia Joe) membina dan melindungi kaum muslim Tionghoa Palembang.",
    category: "dakwah",
    highlights: ["Meruntuhkan sekat primordial etnis demi ukhuwah Islamiyah", "Membimbing ratusan mualaf dalam ibadah syar'i dan pembauran masyarakat"]
  },
  {
    year: "1975 - 1995",
    period: "Puncak Kepemimpinan",
    title: "Ketua Muhammadiyah Sumsel Selama 19 Tahun",
    location: "Sumatera Selatan",
    description: "Dua dekade menakhodai Pimpinan Wilayah Muhammadiyah Sumsel. Menjalin kemitraan kokoh dengan gubernur, bupati, pemerintah pusat, hingga lobi dana luar negeri (Arab Saudi).",
    category: "kepemimpinan",
    highlights: ["Pemekaran Universitas Muhammadiyah Palembang (UMP) dan RS Islam", "Membangun jejaring madrasah dan panti asuhan di seluruh pelosok kabupaten"]
  },
  {
    year: "1980 - 1995",
    period: "Khidmat Keulamaan",
    title: "Ketua MUI Sumsel & Forum Kerukunan Umat Beragama",
    location: "Palembang",
    description: "Menjabat Ketua dan Wakil Ketua Majelis Ulama Indonesia (MUI) Sumsel serta aktif memimpin Badan Koordinasi Forum Lintas Agama, menjaga harmoni sosial.",
    category: "kepemimpinan",
    highlights: ["Fatwa dan bimbingan umat yang berbasis riset kitab muktabar", "Menjadi rujukan seluruh elemen masyarakat, ormas Islam, dan aparat sipil"]
  },
  {
    year: "1997",
    period: "Wafat & Husnul Khatimah",
    title: "Kembali ke Rahmatullah dalam Keadaan Siap Berkhidmat",
    location: "Palembang (19 Februari 1997 / 3 Syawal 1417 H)",
    description: "Pada usia 82 tahun, saat pagi pukul 09.00 mengenakan pakaian rapi bersiap melangkah ke kantor Pimpinan Wilayah Muhammadiyah, serangan jantung mendadak menjemput. Inna lillahi wa inna ilaihi raji'un.",
    category: "sejarah",
    highlights: ["Wafat dalam keadaan berpuasa Syawal hari ketiga", "Dimakamkan di Pekuburan Umum Kamboja, Palembang dengan iringan ribuan umat"]
  }
];

export const QUOTES_DATA: QuoteItem[] = [
  {
    id: "q1",
    quote: "Dakwah itu bukan memamerkan kefasihan mencela, melainkan menyajikan alternatif hukum Allah dengan santun, terukur, dan bersandar pada keutuhan dalil.",
    context: "Nasihat kepada para muballigh muda Muhammadiyah saat pembekalan Tarjih di Palembang.",
    theme: "Dakwah Santun",
    source: "Kutipan Ceramah Pengajian Ramadhan Buya Rasyid Thalib"
  },
  {
    id: "q2",
    quote: "Jangan naik ke mimbar membawa prasangka. Bukalah kitab-kitab muktabar sampai mejamu penuh dan lantai terisi rujukan. Umat berhak atas kepastian ilmu, bukan perkiraan.",
    context: "Kebiasaan Buya yang selalu menelaah puluhan kitab kuning hingga larut malam sebelum menyusun teks khutbah bertulis tangan.",
    theme: "Ketelitian Ilmu",
    source: "Catatan Pribadi & Kesaksian Keluarga Menjelang Khutbah Idul Fitri"
  },
  {
    id: "q3",
    quote: "Syahadat itu menyatukan darah dan bangsa. Siapa pun yang bersujud ke arah kiblat yang sama, ia saudaramu seiman, tak peduli apakah leluhurnya dari Minang, Melayu, Jawa, ataupun Tiongkok.",
    context: "Sikap teguh Buya saat membela dan mendampingi dakwah pembinaan mualaf bersama K.H. Abdul Halim (Lim Kia Joe).",
    theme: "Ukhuwah & Etnis",
    source: "Pidato Silaturahmi Pembinaan Mualaf Palembang 1976"
  },
  {
    id: "q4",
    quote: "Muhammadiyah ini gerbong amal shalih. Kalau kamu masuk kemari mencari kedudukan duniawi, kamu akan lelah. Tetapi jika kamu niatkan menjadi pelayan umat, setiap batu bata sekolah dan rumah sakit akan bersaksi bagimu di hadapan Allah.",
    context: "Amanat pembukaan Musyawarah Wilayah Muhammadiyah Sumatera Selatan.",
    theme: "Ikhlas Berkhidmat",
    source: "Buku Kemuhammadiyahan dan Penerapan Sehari-hari"
  },
  {
    id: "q5",
    quote: "Bicaralah kepada manusia menurut kadar akal dan hatinya. Orang yang lapang dadanya menerima kebenaran bila diajak dengan kelembutan, bukan dengan teriakan yang menakutkan.",
    context: "Prinsip dakwah Buya di hadapan masyarakat akar rumput dan pejabat pemerintahan.",
    theme: "Dakwah Santun",
    source: "Kuliah Umum IAIN Raden Fatah Palembang"
  },
  {
    id: "q6",
    quote: "Amal usaha persyarikatan adalah monumen keimanan. Rawatlah rumah sakit, sekolah, dan universitas kita sebagaimana kamu merawat shalatmu: dengan ketulusan, ketertiban administrasi, dan pandangan jauh ke depan.",
    context: "Pesan saat peletakan batu pembangunan kampus Universitas Muhammadiyah Palembang (UMP).",
    theme: "Ikhlas Berkhidmat",
    source: "Dokumentasi PWM Sumsel 1985"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-portrait-authentic",
    title: "Potret Resmi Buya H.M. Rasyid Thalib",
    year: "Era 1980-an",
    location: "Palembang, Sumatera Selatan",
    imageUrl: "/assets/buya_rasyid_photo.jpg",
    aspect: "3:4",
    caption: "Potret dokumentasi resmi bersejarah Buya Haji Muhammad Rasyid Thalib berbusana safari rapi dan kopiah hitam songkok tinggi dengan senyum ramah khas pendidik umat.",
    historicalContext: "Dokumentasi fotografi fisik primer yang merekam secara otentik kharisma, ketenangan, dan kesahajaan Buya Rasyid semasa memimpin Pimpinan Wilayah Muhammadiyah Sumatera Selatan (1975–1995).",
    category: "portret"
  },
  {
    id: "gal-haji-istri",
    title: "Buya H.M. Rasyid Thalib Bersama Istri di Tanah Suci",
    year: "Dokumentasi Ibadah Haji",
    location: "Makkah / Madinah, Arab Saudi",
    imageUrl: "/assets/buya_haji_dan_istri.jpg",
    aspect: "4:3",
    caption: "Potret bersejarah Buya Haji Muhammad Rasyid Thalib didampingi sang istri tercinta saat menunaikan ibadah haji di pelataran Tanah Suci.",
    historicalContext: "Dokumentasi penuh berkah yang merekam Buya bersama pendamping hidupnya menunaikan rukun Islam kelima di Makkah dan Madinah. Hubungan kultural dan spiritual Buya dengan Arab Saudi juga menjadi jembatan diplomasi yang membawa bantuan pembangunan fasilitas pendidikan dan amal usaha Muhammadiyah di Sumatera Selatan.",
    category: "portret"
  },
  {
    id: "gal-study-desk",
    title: "Meja Kerja & Tumpukan Kitab Referensi",
    year: "1982",
    location: "Kediaman Buya Rasyid, Palembang",
    imageUrl: "https://i.imgur.com/JD14XSn.jpeg",
    aspect: "4:3",
    caption: "Suasana meja kerja Buya saat mempersiapkan naskah khutbah dan putusan tarjih: meja dan lantai penuh dengan kitab rujukan yang terbuka.",
    historicalContext: "Keluarga dan santri mengenang bahwa jika Buya sudah mulai bekerja menyiapkan materi khutbah hari besar atau muktamar, ruangan tidak boleh diganggu. Semua kitab referensi dibuka hingga berserakan di atas meja dan lantai, dan naskah disusun rapi dengan tulisan tangan beraksara Arab dan Latin.",
    category: "keilmuan"
  },
  {
    id: "gal-thawalib",
    title: "Kulliyatul Muballigh Thawalib Padang Panjang",
    year: "Dekade 1930-an",
    location: "Padang Panjang, Sumatera Barat",
    imageUrl: "https://i.imgur.com/645IsV0.jpeg",
    aspect: "16:9",
    caption: "Gedung bersejarah Kulliyatul Muballigh Thawalib berlatar Gunung Marapi tempat Buya Rasyid muda digembleng dalam keilmuan agama.",
    historicalContext: "Lulusan Thawalib dikenal memiliki basis ushul fiqh yang sangat kuat serta wawasan tajdid (pembaruan Islam). Dari kawah candradimuka inilah Buya dipersiapkan menjadi da'i yang kemudian ditugaskan ke Mu'allimin Muhammadiyah Bengkulu pada tahun 1938.",
    category: "pendidikan"
  },
  {
    id: "gal-interfaith",
    title: "Silaturahmi Dakwah & Pembinaan Mualaf Tionghoa",
    year: "1976",
    location: "Gedung Pertemuan Nasional, Palembang",
    imageUrl: "https://i.imgur.com/6ReHkxS.jpeg",
    aspect: "4:3",
    caption: "Buya Rasyid Thalib bersama K.H. Abdul Halim (Lim Kia Joe) dan para sesepuh muslim Tionghoa dalam dialog kerukunan dan dakwah di Palembang.",
    historicalContext: "Pada era 1970-an, keterbukaan Buya Rasyid terhadap masyarakat muslim keturunan Tionghoa menjadi teladan langka di Nusantara. Bersama KH Abdul Halim, Buya memberikan rasa aman, bimbingan syariat, dan penguatan persaudaraan tanpa sekat rasial.",
    category: "dakwah-inklusif"
  },
  {
    id: "gal-palembang-musi",
    title: "Palembang Tempo Doeloe & Musi River",
    year: "Dekade 1960-1970-an",
    location: "Sungai Musi & Jembatan Ampera, Palembang",
    imageUrl: "https://i.imgur.com/yXiq2YX.jpeg",
    aspect: "16:9",
    caption: "Lanskap historis Sungai Musi saat Buya Rasyid aktif bertugas sebagai Kepala Penerangan Sumsel, dosen IAIN Raden Fatah, dan da'i keliling perahu ketek.",
    historicalContext: "Dalam dakwahnya ke cabang dan ranting Muhammadiyah pelosok Ogan, Komering, dan Musi, Buya tak segan menempuh perjalanan air menaiki perahu tradisional demi menyambangi jamaah yang belum terjangkau jalan darat.",
    category: "sejarah-kota"
  }
];

export const HISTORICAL_TRIBUTES: TributeItem[] = [
  {
    id: "t1",
    name: "K.H. Abdul Halim (Lim Kia Joe)",
    affiliation: "Tokoh Ulama Muslim Tionghoa Palembang",
    date: "1997",
    message: "Buya Rasyid adalah lentera yang tulus. Di saat orang lain masih memandang kami dengan curiga, Buya membuka kedua tangannya lebar-lebar, memeluk kami sebagai saudara seiman yang utuh. Setiap fatwanya menyejukkan sanubari.",
    isHistorical: true
  },
  {
    id: "t2",
    name: "Prof. Dr. Jalaluddin",
    affiliation: "Mantan Rektor IAIN Raden Fatah & Sahabat Takzim",
    date: "1997",
    message: "Sebagai pendidik dan dosen di IAIN Raden Fatah, Buya Rasyid tidak pernah mengajar dengan congkak. Keluasan telaah kitabnya membuat materi paling rumit dalam ushul fiqih menjadi gamblang dan aplikatif bagi para mahasiswa.",
    isHistorical: true
  },
  {
    id: "t3",
    name: "Drs. H. M. Romli",
    affiliation: "Kader Angkatan Muda Muhammadiyah Sumsel",
    date: "1998",
    message: "Kami menyaksikan sendiri bagaimana beliau tidak pernah mau naik mimbar sebelum membuka puluhan kitab. Lantai kamarnya penuh dengan tumpukan literatur fiqih. Integritas ilmiah beliau tak tertandingi di masanya.",
    isHistorical: true
  },
  {
    id: "t4",
    name: "H. Syamsul Bahri",
    affiliation: "Pimpinan Wilayah Muhammadiyah Sumsel",
    date: "2002",
    message: "Sembilan belas tahun beliau memimpin PWM Sumsel bukan waktu yang singkat. Kampus Universitas Muhammadiyah Palembang, madrasah, dan rumah sakit kita berdiri di atas tetes peluh dan lobi diplomasi santun beliau hingga ke tanah suci Mekkah dan Riyadh.",
    isHistorical: true
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Di manakah Buya Haji Muhammad Rasyid Thalib dilahirkan pada tahun 1915?",
    options: [
      "Bukittinggi, Sumatera Barat",
      "Nagari Gelapung, Danau Maninjau, Sumatera Barat",
      "Padang Panjang, Sumatera Barat",
      "Karesidenan Bengkulu"
    ],
    correctAnswer: 1,
    explanation: "Buya dilahirkan di Nagari Gelapung, tepian Danau Maninjau, Sumatera Barat pada tahun 1915 dari ayah H.M. Thalib dan ibu Hj. Naimah."
  },
  {
    id: 2,
    question: "Lembaga pendidikan Islam legendaris manakah tempat Buya menyelesaikan studi dakwah sebelum ditugaskan ke Bengkulu pada 1938?",
    options: [
      "Kulliyatul Muballigh Thawalib Padang Panjang",
      "Pondok Modern Darussalam Gontor",
      "Madrasah Adabiyah Padang",
      "Mu'allimin Yogyakarta"
    ],
    correctAnswer: 0,
    explanation: "Setelah tamat dari HIS dan MULO, Buya melanjutkan studi ke Kulliyatul Muballigh Thawalib di Padang Panjang, lulus sekitar tahun 1938."
  },
  {
    id: 3,
    question: "Berapa lama Buya Rasyid Thalib memimpin Pimpinan Wilayah Muhammadiyah Sumatera Selatan?",
    options: [
      "5 tahun (1 periode)",
      "10 tahun (2 periode)",
      "Sekitar 19 tahun (1975–1995)",
      "25 tahun (1970–1995)"
    ],
    correctAnswer: 2,
    explanation: "Buya menjabat sebagai Ketua Muhammadiyah Wilayah Sumatera Selatan selama kurang lebih 19 tahun, dari tahun 1975 hingga 1995."
  },
  {
    id: 4,
    question: "Siapakah ulama keturunan Tionghoa di Palembang yang didukung erat oleh Buya Rasyid dalam dakwah pembinaan mualaf etnis Tionghoa pada era 1970-an?",
    options: [
      "H. Muhammad Ramli",
      "K.H. Abdul Halim (Lim Kia Joe)",
      "K.H. Mas Mansur",
      "K.H. Ahmad Dahlan"
    ],
    correctAnswer: 1,
    explanation: "K.H. Abdul Halim atau Lim Kia Joe tercatat dalam sejarah didukung penuh oleh Buya Rasyid dalam dakwah pembinaan kaum muslim etnis Tionghoa di Palembang."
  },
  {
    id: 5,
    question: "Apakah judul buku karya Buya yang dicetak secara khusus untuk keperluan mahasiswa perguruan tinggi?",
    options: [
      "Fiqih dan Berbagai Permasalahannya",
      "Buku Kemuhammadiyahan dan Penerapan Sehari-hari",
      "Ushul Fiqh Modern Sumatera",
      "Tafsir Ayat-ayat Tarjih"
    ],
    correctAnswer: 1,
    explanation: "Buku yang pernah dicetak Buya untuk keperluan mahasiswanya adalah 'Buku Kemuhammadiyahan dan Penerapan Sehari-hari', sedangkan buku 'Fiqih dan Berbagai Permasalahannya' masih berupa niat dan catatan karena padatnya jadwal dakwah."
  }
];

export const BIOGRAPHY_SECTIONS = [
  {
    id: "kelahiran-nasab",
    title: "1. Nasab, Kelahiran, & Teladan Keluarga",
    subtitle: "Maninjau, 1915 — Akar Religiusitas di Tepian Danau",
    content: `Buya Haji Muhammad Rasyid Thalib, yang di kemudian hari lebih akrab dipanggil oleh umat dengan sapaan takzim Buya Rasyid, dilahirkan pada tahun 1915 di Nagari Gelapung, sebuah perkampungan asri di tepian Danau Maninjau, Sumatera Barat. Wilayah Maninjau dan luhak Agam dikenal luas sebagai tanah persemaian ulama-ulama besar pembaru Islam di Nusantara.

Ayahnya bernama H.M. Thalib, seorang saudagar Minangkabau yang berjiwa da'i pengembara. H.M. Thalib terbiasa berdagang dan berdakwah berpindah-pindah melintasi Bukittinggi hingga ke pesisir Karesidenan Bengkulu. Dari sang ayah, Buya mewarisi jiwa pergerakan, keuletan berdiplomasi, dan daya tahan fisik menghadapi medan dakwah yang keras.

Adapun ibundanya, Hj. Naimah, adalah sosok wanita shalehah yang terpandang di kampungnya sebagai guru mengaji Al-Qur'an. Di bawah bimbingan sang ibunda inilah, lidah dan sanubari Buya Rasyid kecil diasah dengan kefasihan makharijul huruf, kecintaan pada kalam ilahi, serta akhlak yang santun dan berbudi luhur.`
  },
  {
    id: "pendidikan-thawalib",
    title: "2. Menuntut Ilmu dari HIS hingga Thawalib Padang Panjang",
    subtitle: "Kawah Candradimuka Pembaruan Islam Sumatera",
    content: `Pendidikan formal Buya dimulai di sekolah dasar kolonial HIS (Hollandsch-Inlandsche School), yang kemudian dilanjutkan ke tingkat menengah MULO (Meer Uitgebreid Lager Onderwijs) hingga usia remaja. Latar belakang pendidikan umum ini memberikan Buya bekal penguasaan wawasan modern, metodologi berpikir kritis, serta kemampuan bahasa yang tertib.

Merasa panggilan jiwa keagamaan yang mendalam, Buya kemudian memutuskan melanjutkan pendidikannya ke Kulliyatul Muballigh Thawalib di Padang Panjang. Lembaga ini pada dekade 1920–1930-an merupakan episentrum pergerakan kaum muda Islam yang mendobrak kebekuan taqlid dan menggemakan semangat tajdid (pembaruan).

Di Thawalib Padang Panjang, Buya mendalami secara intensif ilmu-ilmu syariat: ushul fiqih, tafsir, hadits mushtalah, tarikh tasyri', dan seni berpidato (khithabah). Tempaan disiplin para syekh Thawalib membentuk karakter keilmuan Buya yang terkenal sangat teliti, berhati-hati dalam menelurkan hukum, dan selalu bersandar pada teks rujukan muktabar.`
  },
  {
    id: "bengkulu-muallimin",
    title: "3. Pengabdian di Bumi Bengkulu (1938–1950)",
    subtitle: "Mendidik Kader Mu'allimin & Dinamika Revolusi",
    content: `Setelah merampungkan studinya di Thawalib sekitar tahun 1938, Buya Rasyid langsung menerima penugasan dakwah untuk mengajar di Sekolah Mu'allimin Muhammadiyah Bengkulu. Penugasan ke seberang Bukit Barisan ini dijalani dengan penuh keikhlasan. Di sekolah inilah beliau mencurahkan energinya membimbing kader-kader muda calon guru dan muballigh persyarikatan.

Seiring berjalannya waktu, kiprah beliau di persyarikatan Muhammadiyah kian mengkristal sejak tahun 1944. Amanah sebagai pimpinan eksekutif Muhammadiyah Karesidenan Bengkulu diemban dengan penuh tanggung jawab. Beliau menjadi delegasi terdepan saat menghadiri Konferensi Muhammadiyah di Bukittinggi.

Selain profesi sebagai pendidik di sekolah Muhammadiyah, di tengah masa revolusi kemerdekaan Republik Indonesia, Buya juga dipercaya bertugas di Kantor Penerangan Karesidenan Bengkulu hingga tahun 1950. Peran ganda ini menjadikan beliau sosok yang piawai menghubungkan aspirasi umara (pemerintah) dan ulama.`
  },
  {
    id: "palembang-iain",
    title: "4. Hijrah ke Palembang, Masyumi, & Dosen IAIN (1950–1975)",
    subtitle: "Bumi Sriwijaya: Panggung Dakwah & Intelektual",
    content: `Karena tuntutan tugas pemerintahan dan pergerakan, pada akhir tahun 1950 Buya Rasyid resmi dipindahkan ke kota Palembang. Di Bumi Sriwijaya ini, karier birokrasi beliau berlanjut hingga dipercaya menjabat sebagai Kepala Penerangan Provinsi Sumatera Selatan.

Pada dasawarsa 1950-an yang penuh pergolakan ideologis, Buya Rasyid tampil sebagai tokoh sentral partai Islam Masyumi (Majelis Syuro Muslimin Indonesia) di Sumatera Selatan. Beliau memperjuangkan aspirasi umat dengan cara terhormat, menjaga persatuan bangsa di atas kepentingan kelompok.

Sesuai dinamika pemerintahan, pada tahun 1958 Buya beralih mengabdi di ranah akademis murni dengan menjadi dosen pada IAIN Raden Fatah Palembang hingga memasuki masa purnatugas. Di kampus inilah reputasi beliau sebagai dosen teladan semakin bersemi. Kuliah-kuliahnya selalu dinantikan karena Buya mampu menyajikan dialektika hukum Islam dengan bahasa yang jernih, kontekstual, dan santun. Seiring dengan itu, panggilan untuk mengisi ceramah majelis taklim dan tabligh akbar hari besar Islam di seluruh pelosok Sumatera Selatan semakin bergelombang.`
  },
  {
    id: "kepemimpinan-pwm",
    title: "5. Nahkoda Muhammadiyah Sumsel 1975–1995 (19 Tahun)",
    subtitle: "Dua Dekade Melesatkan Aset & Amal Usaha Persyarikatan",
    content: `Amanah terpanjang dan paling bersejarah yang disandang Buya Rasyid adalah ketika beliau terpilih dan dipercaya memimpin Pimpinan Wilayah Muhammadiyah (PWM) Sumatera Selatan selama hampir 20 tahun (1975–1995). Selama rentang waktu 19 tahun ini, wajah Muhammadiyah Sumsel mengalami lompatan peradaban yang pesat.

Buya rajin melakukan perjalanan dakwah menyambangi cabang dan ranting, baik di wilayah yang sudah mapan maupun daerah terpencil yang belum tersentuh persyarikatan. Beliau mengokohkan silaturrahim dengan jajaran pejabat pemerintah di tingkat provinsi hingga kabupaten/kota. 

Di bawah kepemimpinan beliau, amal usaha persyarikatan (AUM)—meliputi puluhan sekolah dasar, madrasah tsanawiyah, aliyah, hingga berdirinya Universitas Muhammadiyah Palembang (UMP) dan Rumah Sakit Islam—berkembang pesat. Untuk membiayai lompatan amal usaha tersebut, Buya tak segan melakukan pendekatan diplomasi ke tingkat pemerintah pusat, pemerintah daerah, hingga membangun hubungan kemitraan dengan donatur mancanegara, termasuk Kerajaan Arab Saudi.`
  },
  {
    id: "dakwah-tionghoa-mui",
    title: "6. Dakwah Inklusif, K.H. Abdul Halim, & Majelis Ulama",
    subtitle: "Merangkul Mualaf Tionghoa & Merawat Kerukunan",
    content: `Salah satu catatan emas yang paling mengagumkan dalam biografi Buya Rasyid Thalib terjadi pada era tahun 1970-an. Saat itu, beliau menunjukkan keteladanan ukhuwah Islamiyah melintasi sekat etnisitas. Beliau menyokong penuh dan bekerja sama erat dengan ulama terkemuka keturunan Tionghoa di Palembang, K.H. Abdul Halim (Lim Kia Joe).

Bersama K.H. Abdul Halim, Buya Rasyid aktif membina, mengayomi, dan memberikan pendidikan agama Islam yang ramah kepada komunitas warga keturunan Tionghoa yang memeluk Islam di Palembang. Dakwah yang humanis dan tanpa prasangka ini membuat masyarakat Tionghoa merasa diterima dengan hangat di pangkuan umat Islam.

Keluasan wawasan dan keluwesan akhlak Buya menjadikan beliau diterima oleh segenap lapisan umat: baik warga Muhammadiyah maupun non-Muhammadiyah. Tak heran bila beliau dipercaya menduduki amanah sebagai Ketua Majelis Ulama Indonesia (MUI) Propinsi Sumatera Selatan (dan sebelumnya sebagai Wakil Ketua), serta aktif memimpin Badan Koordinasi Forum Lintas Agama demi menjaga ketentraman antarumat beragama di Sumatera Selatan.`
  },
  {
    id: "etos-keilmuan",
    title: "7. Etos Keilmuan: 'Meja Penuh, Lantai Penuh Buku'",
    subtitle: "Ketelitian Menulis Tangan & Warisan Karya Tulis",
    content: `Ciri khas yang melekat mendalam di ingatan keluarga, kolega, dan santri Buya Rasyid adalah ketelitian dan disiplinnya yang luar biasa saat mempersiapkan materi khutbah atau risalah keilmuan. Terlebih bila beliau diminta mengisi khutbah Idul Fitri, Idul Adha, Muktamar, Tanwir, atau Musyawarah Raker Tarjih.

Bila Buya sudah mulai bekerja di ruang belajarnya, semua kitab referensi dibuka. Meja kerjanya penuh, bahkan lantai di sekeliling kursi dipenuhi kitab-kitab tebal berbahasa Arab yang ditandai. Tidak boleh ada yang mengganggu ketenangannya. Buya kerap terjaga hingga tengah malam, menelusuri nash dan pendapat para fuqaha terdahulu, lalu menuangkan intisarinya dengan tulisan tangannya sendiri yang rapi.

Karena jadwal dakwah dan tugas kepemimpinan yang luar biasa padat dari satu daerah ke daerah lain, niat mulia Buya untuk membukukan sebuah karya ensiklopedis berjudul 'Fiqih dan Berbagai Permasalahannya' belum sempat terwujud secara utuh. Kendati demikian, Buya telah mewariskan satu buku pegangan penting yang dicetak untuk para mahasiswanya, yaitu 'Buku Kemuhammadiyahan dan Penerapan Sehari-hari'.`
  },
  {
    id: "kepulangan",
    title: "8. Kepulangan ke Rahmatullah (19 Februari 1997)",
    subtitle: "Wafat di Usia 82 Tahun Saat Bersiap Menuju Kantor Persyarikatan",
    content: `Memasuki tahun 1995, seiring usia yang menginjak 80 tahun, kondisi fisik Buya mulai menurun. Dokter mendiagnosis adanya gejala gangguan jantung. Atas anjuran medis dan keluarga, Buya mulai mengurangi aktivitas luar rumah seperti ceramah dan mengajar. Beliau hanya keluar jika ada urusan mendesak ke kantor Pimpinan Wilayah Muhammadiyah Sumsel atau kampus Universitas Muhammadiyah Palembang (UMP), dan itu pun hanya sebentar.

Puncak perjalanan hidup seorang da'i sejati terjadi pada hari Rabu, 19 Februari 1997, bertepatan dengan tanggal 3 Syawal 1417 H. Saat itu Buya masih dalam keadaan menjalankan ibadah puasa sunnah enam hari Syawal. Pagi hari sekitar pukul 09.00 WIB, Buya telah berwudhu dan mengenakan pakaian rapi bersiap-siap hendak melangkah ke kantor Pimpinan Wilayah Muhammadiyah.

Tiba-tiba serangan jantung mendadak menyerang beliau di rumah. Ajal yang telah digariskan ilahi rabbi tiba. Inna lillahi wa inna ilaihi raji'un. Buya H.M. Rasyid Thalib menghembuskan nafas terakhirnya dalam usia 82 tahun—wafat dalam keadaan suci, berpuasa, dan berniat pergi untuk urusan persyarikatan.

Jenazah ulama kharismatik ini dilepas dengan isak tangis dan doa oleh ribuan warga, pejabat, dan ulama Sumatera Selatan, sebelum dimakamkan di Pekuburan Umum Kamboja, Palembang.`
  }
];
