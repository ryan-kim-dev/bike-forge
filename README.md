# BikeForge

BikeForge is an interactive, web-based 3D motorcycle configurator
designed for real-time customization, remixing, and sharing of custom bike builds.

This project started as an experimental configurator for a single classic motorcycle(honda cub),
but has since evolved into a **brand-agnostic motorcycle customization platform**
supporting multiple manufacturers, models, and variants.

> This is an unofficial, fan-made application.
> It is not affiliated with or endorsed by any motorcycle manufacturer.

---

## ✨ Key Features

- 🔍 **Model Browser**
  - Explore motorcycles by maker, series, year, market, and trim
- 🛠 **3D Configurator**
  - Swap parts, change colors, and apply decals in real time
- ♻️ **Remix Workflow**
  - Fork public builds and create your own variations
- 🌐 **Community Gallery**
  - Browse and discover builds shared by other users
- 🔐 **Personal Garage**
  - Manage, edit, and publish your own builds

---

## 🧩 Core Pages

- `/` – Landing & featured models/builds
- `/models` – Model browser & selector
- `/editor/...` – 3D editor (model-based / remix-based)
- `/community` – Public build gallery
- `/builds/[buildId]` – Public build detail
- `/me/garage` – My builds
- `/me/settings` – Account settings

---

## 🏗 Tech Stack

- **Frontend**
  - Next.js 16 (App Router, RSC, ISR)
  - React Three Fiber / Three.js
- **State Management**
  - Zustand (editor/local state)
  - TanStack Query (server state)
- **Backend**
  - Serverless APIs (Cloudflare Workers)
  - PostgreSQL (Supabase)
- **Assets**
  - GLTF models & textures hosted on Cloudflare R2

---

## 🚧 Disclaimer

BikeForge is a personal and educational project.
All product names, logos, and brands are used for identification purposes only
and remain the property of their respective owners.
