import { useDispatch, useSelector } from "react-redux";
import {
  decrementWithCheckingAction,
  increment,
} from "../../app/features/CounterFeatures/actions";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  let dispatch = useDispatch();
  return (
    <div className="w-full  flex mt-12 justify-center gap-4 text-4xl">
      <button
        className="bg-[#333] px-4 py-2 text-white"
        onClick={() => dispatch(decrementWithCheckingAction(1))}
      >
        -
      </button>
      <div>{count}</div>
      <button
        className="bg-[#333] px-4 py-2 text-white"
        onClick={() => dispatch(increment(1))}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
