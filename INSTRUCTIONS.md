# Wedding Invitation Project

This is a Next.js wedding invitation website with Tailwind CSS and Framer Motion.

## Setup Instructions

1.  **Install Dependencies** (Already done)
    ```bash
    npm install
    ```

2.  **Supabase Setup**
    - Create a new project at [supabase.com](https://supabase.com).
    - Go to the SQL Editor and run the queries found in `supabase_schema.sql` to create the `rsvp` and `wishes` tables.
    - Copy your Project URL and Anon Key from Project Settings > API.
    - Create a `.env.local` file in the root directory and add:
        ```env
        NEXT_PUBLIC_SUPABASE_URL=your_project_url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
        ```

3.  **Assets**
    - Place your background music file as `public/audio.mp3`.
    - Place your images in `public/images/` (e.g., `bg-opening.jpg`, `bg-hero.jpg`).
    - Update the image paths in the components (`OpeningScreen.tsx`, `page.tsx`, `SectionProfile.tsx`, etc.) to point to your actual images.

4.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

5.  **Test URL Parameter**
    Open [http://localhost:3000?to=Budi](http://localhost:3000?to=Budi) to see the personalized opening screen.

## Features
- **Opening Screen**: Personalized greeting, autoplay audio.
- **Profile**: Couple details with animations.
- **Events**: Date, time, location, Google Maps link.
- **Timeline**: Love story timeline.
- **RSVP**: Form integrated with Supabase.
- **Wishes**: Real-time wishes board using Supabase.
- **Gift Card**: Bank details and QRIS with copy functionality.
- **Gallery**: Photo grid.
- **Bottom Navigation**: Mobile-app like navigation.
