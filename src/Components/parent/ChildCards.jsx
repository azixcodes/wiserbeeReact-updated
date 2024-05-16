import { setUser } from "../../redux/ParentSlice";
import { useParentContext } from "../../ContextAPI/ParentContext";
import { useSelector, useDispatch } from "react-redux";
const ChildCards = () => {
  const users2 = useSelector((state) => state.parent.users);

  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-3 justify-content-start flex-wrap smFlexScreen">
      {users2.map((child, index) => (
        <div
          key={index}
          className={` ${
            child.isActive ? "childChipActive" : "childChip"
          } d-flex flex-row  gap-2 align-items-center cursor-pointer`}
          onClick={() => dispatch(setUser(index))}
        >
          <div className="childAvatar">
            <img src={child.avatar} alt="name" className="h-100 w-100" />
          </div>
          <div className="d-flex flex-column">
            <h6 className="p-0 m-0">{child.name}</h6>
            <span>{child.class}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildCards;
