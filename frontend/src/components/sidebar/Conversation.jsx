const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-rose-400 hover:text-white text-black text-opacity-70 rounded p-2 py-2 curs">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://avatar.iran.liara.run/public/38" alt="user avatar"/>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold">Hien Beo</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Conversation;