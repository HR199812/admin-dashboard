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
