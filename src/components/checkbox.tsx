import { cva } from "class-variance-authority";
import { Icon } from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import { Skeleton } from "./skeleton";
interface CheckBox extends React.ComponentProps<"input"> {
  loading?:boolean
}

export function CheckBox({ className, loading,...props }: CheckBox) {

  if(loading){
    return <Skeleton rounded="sm" className="h-5 w-5"/>
  }
  return (
    <label className="inline-flex items-center justify-center cursor-pointer relative group">
      <input
        type="checkbox"
        className={`h-5 w-5 rounded-sm appearance-none peer flex items-center justify-center border-2 transition cursor-pointer overflow-hidden border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark ${className}`}
        {...props}
      />
      <Icon
        svg={CheckIcon}
        className="absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white size-3"
      />
    </label>
  );
}
