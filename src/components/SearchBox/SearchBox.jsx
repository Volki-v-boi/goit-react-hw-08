import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts"
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        width: "100%",
      }}
    />
  );
};

export default SearchBox;
