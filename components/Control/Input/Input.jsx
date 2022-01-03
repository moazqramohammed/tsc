const Input = ({ label, type, options, id, handel, _value }) => {
  let cur = 0;
  if (type === "select") {
    return (
      <div id={id}>
        <label>{options[0]}</label>
        <select>
          {options.map((op) => {
            if (cur === 0) {
              cur++;
              return;
            } else {
              cur++;
              return (
                <option key={cur} value={op}>
                  {op}
                </option>
              );
            }
          })}
        </select>
      </div>
    );
  } else {
    return (
      <div id={id}>
        {!(type === "submit") ? (
          <>
            <label>{label}</label>
            <input
              type={type}
              value={_value}
              onChange={(e) => (handel ? handel(e) : null)}
            />{" "}
          </>
        ) : (
          <input type={type} value="إضافة سائق" />
        )}
      </div>
    );
  }
};
export default Input;
