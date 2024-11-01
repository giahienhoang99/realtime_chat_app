import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS:", conversations);

  return (
    <div className="mt-0 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;