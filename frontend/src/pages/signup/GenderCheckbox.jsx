const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                    <span className="label-text text-white text-sm">Male</span>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="radio radio-xs border-rose-400 checked:bg-rose-400 checked:border-rose-400"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
                    <span className="label-text text-white text-sm">Female</span>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="radio radio-xs border-rose-400 checked:bg-rose-400 checked:border-rose-400"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
}

export default GenderCheckbox;

/*
STARTER CODE FOR GENDER CHECKBOX

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
*/