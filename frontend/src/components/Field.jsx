export default function Field ({
    label, name, type = "text", value, onChange
}) {
    return(
        <div>
            <label htmlFor={name}>
                {label}:
            </label>
            <input name={name} type={type} value={value} onChange={onChange}>
                {name}
            </input>
        </div>
    )
}