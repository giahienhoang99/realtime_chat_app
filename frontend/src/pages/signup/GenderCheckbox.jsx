const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-white text-sm">Male</span>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="radio radio-xs border-rose-400 checked:bg-rose-400 checked:border-rose-400"
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-white text-sm">Female</span>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="radio radio-xs border-rose-400 checked:bg-rose-400 checked:border-rose-400"
                    />
                </label>
            </div>
        </div>
    );
}

export default GenderCheckbox;
