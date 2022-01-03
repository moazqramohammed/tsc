const HeaderRow = ({ list }) => {
  return (
    <tr>
      {list.map((e) => (
        <td key={e.id}>{e.name}</td>
      ))}
    </tr>
  );
};

export default HeaderRow;
