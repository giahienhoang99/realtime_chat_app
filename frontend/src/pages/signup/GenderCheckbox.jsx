const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={"label gap-2 cursor-pointer"}>
                    <span className="label-text text-white">Male</span>
                    <input type="checkbox" className="checkbox checkbox-sm border-rose-400 [--chkbg:theme(colors.rose.200)] [--chkfg:theme(colors.rose.400)] checked:border-rose-400" />
                </label>
            </div>
            <div className="form-control">
                <label className={"label gap-2 cursor-pointer"}>
                    <span className="label-text text-white">Female</span>
                    <input type="checkbox" className="checkbox checkbox-sm border-rose-400 [--chkbg:theme(colors.rose.200)] [--chkfg:theme(colors.rose.400)] checked:border-rose-400" />
                </label>
            </div>
        </div>
    );
}

export default GenderCheckbox;
