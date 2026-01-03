# Futurix - Tech Event Management Platform

Futurix is a modern, visually stunning tech event management platform built with React, featuring a futuristic design with animated cosmic backgrounds and purple-themed UI elements. The site is designed for "ULTRON 9.0", a flagship tech festival scheduled for March 17-20, 2026.

## 🌟 Features

- **Modern UI/UX**: Cosmic-themed design with animated backgrounds and smooth transitions
- **Event Management**: Browse upcoming and past events with detailed information
- **Admin Panel**: Secure admin interface for managing events and media
- **Responsive Design**: Works seamlessly across all devices
- **Media Gallery**: Rich media support for events with image and video uploads

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS with Framer Motion for animations
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **UI Components**: Custom-built with focus on animations and visual effects

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd futurix-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173` to see the application

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── auth/          # Authentication components
│   ├── events/        # Event-related components
│   ├── home/          # Home page components
│   ├── Navbar.jsx     # Navigation bar
│   └── Skeleton.jsx   # Loading skeleton component
├── context/           # React context providers
│   └── AuthContext.jsx # Authentication context
├── layouts/           # Page layouts
│   └── MainLayout.jsx # Main application layout
├── lib/               # Library files
│   ├── auth.js        # Authentication utilities
│   └── supabase.js    # Supabase client configuration
├── pages/             # Page components
│   ├── admin/         # Admin panel pages
│   ├── events/        # Event-related pages
│   ├── About.jsx      # About page
│   ├── Contact.jsx    # Contact page
│   └── Home.jsx       # Home page
├── services/          # API service functions
│   ├── adminEvents.js # Admin event services
│   ├── events.js      # Event services
│   └── supabaseClient.js # Supabase client services
├── App.jsx            # Main application component
├── App.css            # Global CSS
├── index.css          # Tailwind imports and global styles
└── main.jsx           # Application entry point
```

## 📝 Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally

## 🔐 Admin Access

The admin panel is accessible at `/admin/login`. To create an admin user:

1. Create an account in Supabase with the role set to "admin" in the profiles table
2. Use your Supabase credentials to log in to the admin panel

## 🗄️ Database Schema

The application uses Supabase with the following key tables:

- `events`: Stores event information (title, description, date, type, cover image)
- `event_media`: Stores media files associated with events (images/videos)
- `profiles`: Stores user profiles with roles for access control

## 🚀 Deployment

This application can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the environment variables in Vercel dashboard
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please open an issue in the repository.
