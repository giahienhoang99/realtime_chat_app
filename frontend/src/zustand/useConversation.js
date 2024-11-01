import { create } from 'zustand';

// create a store
const useConversation = create((set) => ({
    selectedConversaion: null,
    setSelectedConversation: (selectedConversaion) => set({ selectedConversaion }),
    messages: [],
    setMessages: (messages) => set({ messages }),

}));

export default useConversation;