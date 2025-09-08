import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  isOpen: boolean
  toggle: () => void
  setOpen: (open: boolean) => void
}

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatState {
  messages: ChatMessage[]
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void
  clearMessages: () => void
}

interface AppearanceState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

interface UserProfile {
  firstName: string
  lastName: string
  email: string
  phone: string
  website: string
  bio: string
  location: string
  timezone: string
}

interface NotificationSettings {
  emailNotifications: boolean
  pushNotifications: boolean
  smsNotifications: boolean
  marketingEmails: boolean
  securityAlerts: boolean
  weeklyReports: boolean
  campaignUpdates: boolean
  teamActivity: boolean
}

interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends'
  showEmail: boolean
  showPhone: boolean
  showLocation: boolean
  allowDirectMessages: boolean
  dataSharing: boolean
  analyticsTracking: boolean
}

interface SecuritySettings {
  twoFactorAuth: boolean
  loginAlerts: boolean
  sessionTimeout: number
  passwordLastChanged: string
}

interface SubscriptionSettings {
  plan: 'free' | 'premium' | 'pro'
  status: 'active' | 'cancelled' | 'expired'
  nextBillingDate: string
  autoRenew: boolean
  usage: {
    socialAccounts: number
    aiChatQueries: number
    campaigns: number
    storage: number
  }
  limits: {
    socialAccounts: number
    aiChatQueries: number
    campaigns: number
    storage: number
  }
}

interface TeamMember {
  id: string
  name: string
  email: string
  role: 'owner' | 'editor' | 'viewer'
  avatar: string
  status: 'active' | 'pending' | 'inactive'
}

interface SettingsState {
  // Profile settings
  profile: UserProfile
  updateProfile: (updates: Partial<UserProfile>) => void
  
  // Notification settings
  notifications: NotificationSettings
  updateNotifications: (updates: Partial<NotificationSettings>) => void
  
  // Privacy settings
  privacy: PrivacySettings
  updatePrivacy: (updates: Partial<PrivacySettings>) => void
  
  // Security settings
  security: SecuritySettings
  updateSecurity: (updates: Partial<SecuritySettings>) => void
  
  // Subscription settings
  subscription: SubscriptionSettings
  updateSubscription: (updates: Partial<SubscriptionSettings>) => void
  
  // Team management
  teamMembers: TeamMember[]
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void
  removeTeamMember: (id: string) => void
  
  // General settings
  language: string
  setLanguage: (language: string) => void
  
  // Reset functions
  resetProfile: () => void
  resetNotifications: () => void
  resetPrivacy: () => void
  resetSecurity: () => void
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isOpen: true,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      setOpen: (open) => set({ isOpen: open }),
    }),
    {
      name: 'sidebar-storage',
    }
  )
)

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      addMessage: (message) => set((state) => ({
        messages: [...state.messages, {
          ...message,
          id: Date.now().toString(),
          timestamp: new Date()
        }]
      })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'chat-storage',
      partialize: (state) => ({ messages: state.messages }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Convert timestamp strings back to Date objects
          state.messages = state.messages.map(message => ({
            ...message,
            timestamp: new Date(message.timestamp)
          }));
        }
      },
    }
  )
)

export const useAppearanceStore = create<AppearanceState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'appearance-storage',
    }
  )
)

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Initial profile state
      profile: {
        firstName: 'Rick',
        lastName: 'Sanchez',
        email: 'rick.sanchez@influential.com',
        phone: '+1 (555) 123-4567',
        website: 'https://ricksanchez.com',
        bio: 'Genius scientist, interdimensional traveler, and influencer extraordinaire.',
        location: 'Earth C-137',
        timezone: 'America/New_York',
      },
      
      // Initial notification settings
      notifications: {
        emailNotifications: true,
        pushNotifications: true,
        smsNotifications: false,
        marketingEmails: true,
        securityAlerts: true,
        weeklyReports: true,
        campaignUpdates: true,
        teamActivity: false,
      },
      
      // Initial privacy settings
      privacy: {
        profileVisibility: 'public',
        showEmail: false,
        showPhone: false,
        showLocation: true,
        allowDirectMessages: true,
        dataSharing: true,
        analyticsTracking: true,
      },
      
      // Initial security settings
      security: {
        twoFactorAuth: true,
        loginAlerts: true,
        sessionTimeout: 30,
        passwordLastChanged: '2024-01-15',
      },
      
      // Initial subscription settings
      subscription: {
        plan: 'premium',
        status: 'active',
        nextBillingDate: '2024-02-15',
        autoRenew: true,
        usage: {
          socialAccounts: 7,
          aiChatQueries: 1247,
          campaigns: 3,
          storage: 2.3,
        },
        limits: {
          socialAccounts: 10,
          aiChatQueries: 5000,
          campaigns: 999999,
          storage: 10,
        },
      },
      
      // Initial team members
      teamMembers: [
        {
          id: '1',
          name: 'Morty Smith',
          email: 'morty.smith@influential.com',
          role: 'owner',
          avatar: 'MS',
          status: 'active',
        },
        {
          id: '2',
          name: 'Summer Smith',
          email: 'summer.smith@influential.com',
          role: 'editor',
          avatar: 'SS',
          status: 'active',
        },
      ],
      
      // Language setting
      language: 'en',
      
      // Update functions
      updateProfile: (updates) => set((state) => ({
        profile: { ...state.profile, ...updates }
      })),
      
      updateNotifications: (updates) => set((state) => ({
        notifications: { ...state.notifications, ...updates }
      })),
      
      updatePrivacy: (updates) => set((state) => ({
        privacy: { ...state.privacy, ...updates }
      })),
      
      updateSecurity: (updates) => set((state) => ({
        security: { ...state.security, ...updates }
      })),
      
      updateSubscription: (updates) => set((state) => ({
        subscription: { ...state.subscription, ...updates }
      })),
      
      addTeamMember: (member) => set((state) => ({
        teamMembers: [...state.teamMembers, { ...member, id: Date.now().toString() }]
      })),
      
      updateTeamMember: (id, updates) => set((state) => ({
        teamMembers: state.teamMembers.map(member =>
          member.id === id ? { ...member, ...updates } : member
        )
      })),
      
      removeTeamMember: (id) => set((state) => ({
        teamMembers: state.teamMembers.filter(member => member.id !== id)
      })),
      
      setLanguage: (language) => set({ language }),
      
      // Reset functions
      resetProfile: () => set({
        profile: {
          firstName: 'Rick',
          lastName: 'Sanchez',
          email: 'rick.sanchez@influential.com',
          phone: '+1 (555) 123-4567',
          website: 'https://ricksanchez.com',
          bio: 'Genius scientist, interdimensional traveler, and influencer extraordinaire.',
          location: 'Earth C-137',
          timezone: 'America/New_York',
        }
      }),
      
      resetNotifications: () => set({
        notifications: {
          emailNotifications: true,
          pushNotifications: true,
          smsNotifications: false,
          marketingEmails: true,
          securityAlerts: true,
          weeklyReports: true,
          campaignUpdates: true,
          teamActivity: false,
        }
      }),
      
      resetPrivacy: () => set({
        privacy: {
          profileVisibility: 'public',
          showEmail: false,
          showPhone: false,
          showLocation: true,
          allowDirectMessages: true,
          dataSharing: true,
          analyticsTracking: true,
        }
      }),
      
      resetSecurity: () => set({
        security: {
          twoFactorAuth: true,
          loginAlerts: true,
          sessionTimeout: 30,
          passwordLastChanged: '2024-01-15',
        }
      }),
    }),
    {
      name: 'settings-storage',
      partialize: (state) => ({
        profile: state.profile,
        notifications: state.notifications,
        privacy: state.privacy,
        security: state.security,
        subscription: state.subscription,
        teamMembers: state.teamMembers,
        language: state.language,
      }),
    }
  )
)
