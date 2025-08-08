# Blog Pribadi Saya

Repositori ini berisi kode sumber untuk blog pribadi saya, dibangun menggunakan Astro dan dikelola dengan TinaCMS.

![Tangkapan Layar Blog](public/project.png)

---

## ▶️ Menjalankan Proyek Secara Lokal

Langkah-langkah untuk menjalankan blog ini di komputer Anda.

1.  **Clone repositori ini**

    ```bash
    git clone https://github.com/GavrielAdi/my-blog
    cd my-blog
    ```

2.  **Install dependensi**

    ```bash
    pnpm install
    ```

3.  **Jalankan server development**
    Server akan berjalan di `http://localhost:4321`.
    ```bash
    pnpm dev
    ```

---

## 🚀 Panduan Pengelolaan Konten

Cara mengelola dan memperbarui konten blog Anda.

### Membuat Postingan Baru (Cara Terbaik)

Cara terbaik dan paling aman untuk membuat atau mengedit postingan adalah melalui **Admin Panel TinaCMS**.

- Saat development, akses panel di: `http://localhost:4321/admin`
- Pada situs yang sudah online, akses di: `https://domain-anda.com/admin`

Menggunakan admin panel akan memastikan semua _field_ yang wajib diisi tidak akan terlewat dan mencegah error saat proses _build_.

### Konfigurasi Lainnya

- **Info Situs Utama**: Untuk mengubah judul blog, nama penulis, atau deskripsi, edit file `src/data/site.config.ts`.
- **Daftar Kategori**: Untuk menambah atau menghapus kategori postingan, edit file `src/data/categories.ts`.
- **Link Sosial Media**: Untuk mengubah tautan ke akun sosial media Anda, edit file `src/data/links.ts`.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Astro](https://astro.build/) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [TinaCMS](https://tina.io/)
- **Ikon**: [Tabler Icons](https://tabler-icons.io/)
- **Pencarian**: [Pagefind](https://pagefind.app/)
- **Animasi**: [Motion One](https://motion.dev/)

---

## ⚙️ Daftar Perintah

| Perintah       | Aksi                                          |
| :------------- | :-------------------------------------------- |
| `pnpm install` | Meng-install semua dependensi yang dibutuhkan |
| `pnpm dev`     | Menjalankan server development lokal          |
| `pnpm build`   | Membuat versi produksi dari situs Anda        |
| `pnpm preview` | Melihat hasil build secara lokal              |
| `pnpm lint`    | Menjalankan Eslint untuk memeriksa kode       |
| `pnpm format`  | Merapikan format kode dengan Prettier         |
