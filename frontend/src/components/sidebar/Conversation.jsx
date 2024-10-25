const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-rose-300 rounded p-2 py-1 curs">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/
                        photo-1534528741775-53994a69daeb.webp" alt="user avatar"
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-grey">John Doe</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Conversation;