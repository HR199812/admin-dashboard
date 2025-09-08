# 🚀 Influencer Dashboard

A modern, AI-powered dashboard designed specifically for influencers to manage their campaigns, analyze performance, and maximize revenue. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Influencer Dashboard](https://admin-dashboard-five-steel-76.vercel.app/og-image.png)

## 🌟 Live Demo

**🔗 [View Live Application](https://admin-dashboard-five-steel-76.vercel.app/)**

## ✨ Features

### 🤖 AI-Powered Analytics
- **Smart Insights**: Get personalized recommendations to optimize content strategy
- **Performance Analysis**: Real-time metrics and growth tracking
- **Predictive Analytics**: AI-driven forecasting for campaign success

### 📊 Campaign Management
- **Brand Collaborations**: Comprehensive tools for managing partnerships
- **Campaign Tracking**: Monitor performance across all platforms
- **Revenue Optimization**: Smart targeting and payment processing

### 📈 Advanced Dashboard
- **Real-time Metrics**: Live updates on engagement, reach, and revenue
- **Multi-platform Support**: Instagram, TikTok, YouTube, Twitter, LinkedIn
- **Custom Reports**: Export data in PDF/CSV formats

### 🔍 Research Hub
- **Trend Analysis**: Discover what's trending in your niche
- **Competitor Insights**: Analyze competitor strategies and performance
- **Opportunity Discovery**: Find new brand collaboration opportunities

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Modern database ORM
- **PostgreSQL** - Robust relational database
- **NextAuth.js** - Authentication solution

### Deployment & Infrastructure
- **Vercel** - Hosting and deployment platform
- **Vercel Analytics** - Performance monitoring
- **Vercel Speed Insights** - Core Web Vitals tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HR199812/admin-dashboard.git
   cd admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/influencer_dashboard"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
admin-dashboard/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── campaigns/         # Campaign management
│   ├── analytics/         # Analytics dashboard
│   ├── ai-chat/          # AI chat interface
│   ├── research/         # Research hub
│   └── settings/         # User settings
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── charts/           # Data visualization
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility libraries
│   ├── auth.ts          # Authentication config
│   ├── db.ts            # Database connection
│   ├── utils.ts         # Helper functions
│   └── constants.ts     # App constants
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── public/              # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Secondary**: Gray scale (#F8FAFC to #1E293B)
- **Accent**: Amber (#F59E0B)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 weight
- **Body**: 400-500 weight
- **Code**: JetBrains Mono

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Forms**: Clean inputs with validation states
- **Charts**: Responsive data visualization

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with sample data
npm run db:studio    # Open Prisma Studio
```

## 📊 Key Metrics

The dashboard tracks essential influencer metrics:

- **Engagement Rate**: Likes, comments, shares per post
- **Reach & Impressions**: Total audience reached
- **Follower Growth**: Daily, weekly, monthly growth
- **Revenue Tracking**: Campaign earnings and trends
- **Content Performance**: Best-performing posts
- **Audience Demographics**: Age, location, interests

## 🔐 Authentication

Built with NextAuth.js supporting:
- **Email/Password**: Traditional authentication
- **OAuth Providers**: Google, GitHub, Twitter
- **Magic Links**: Passwordless login
- **Session Management**: Secure JWT tokens

## 📱 Responsive Design

- **Mobile First**: Optimized for all screen sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large tap targets and gestures
- **Progressive Web App**: Installable on mobile devices

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Prisma** - For the modern database ORM

## 📞 Support

- **Email**: support@influencerdashboard.com
- **GitHub Issues**: [Report bugs or request features](https://github.com/HR199812/admin-dashboard/issues)
- **Documentation**: [View full documentation](https://admin-dashboard-five-steel-76.vercel.app/docs)

---

**Built with ❤️ by [Hritwik Agarwal](https://github.com/HR199812)**

*Empowering influencers to maximize their reach, engagement, and revenue potential.*