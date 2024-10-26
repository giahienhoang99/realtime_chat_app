
const Message = () => {
    return (
        <div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://avatar.iran.liara.run/public/49" />
                    </div>
                </div>
                <div className="chat-bubble text-white bg-rose-400">sup dawg</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
            </div>
        </div>
    )
}

export default Message