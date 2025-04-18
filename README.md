# Wuthering Waves API (JavaScript Version)

REST API untuk game Wuthering Waves, dikonversi dari [resonance-rest/api](https://github.com/resonance-rest/api) (Golang) ke JavaScript untuk deployment di Vercel.

## Fitur

- Data lengkap untuk Wuthering Waves versi 2.2
- Endpoint untuk karakter, senjata, echo, atribut, sonata, stat, substat, dan kode redeem
- Kompatibel dengan Vercel Serverless Functions
- Implementasi lengkap dalam JavaScript

## Struktur Proyek

```
wuthering-waves-api/
├── data/                  # Data JSON untuk game
├── src/
│   ├── models/            # Model data
│   ├── routes/            # Route API
│   └── utils/             # Utility functions
├── index.js               # Entry point
├── package.json           # Dependencies
└── vercel.json            # Konfigurasi Vercel
```

## Endpoint API

- `/characters` - Informasi karakter
- `/weapons` - Informasi senjata
- `/echoes` - Informasi echo
- `/attributes` - Informasi atribut
- `/sonatas` - Informasi sonata (set)
- `/stats` - Informasi stat
- `/substats` - Informasi substat
- `/codes` - Kode redeem
- `/version` - Versi API
- `/status` - Status API
- `/info` - Informasi API

## Cara Deploy ke Vercel

1. Buat repository GitHub baru
2. Upload semua file dari proyek ini ke repository tersebut
3. Login ke [Vercel](https://vercel.com)
4. Klik "New Project" dan import repository GitHub yang baru dibuat
5. Vercel akan otomatis mendeteksi konfigurasi dan men-deploy API

## Pengembangan Lokal

1. Install dependencies:
```bash
npm install
```

2. Jalankan server development:
```bash
npm run dev
```

3. API akan berjalan di `http://localhost:3000`

## Pembaruan Data

Untuk memperbarui data game:
1. Edit file JSON di folder `data/`
2. Commit dan push perubahan ke GitHub
3. Vercel akan otomatis men-deploy ulang API dengan data terbaru

## Lisensi

MIT License

## Credit

- Original API (Golang): [resonance-rest/api](https://github.com/resonance-rest/api)
- Converted to JavaScript for Vercel deployment
