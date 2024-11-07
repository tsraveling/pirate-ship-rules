import clsx from "clsx";
import React, { ReactNode } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
  SelectProps as AriaSelectProps,
} from "react-aria-components";

export type SelectOptionInt = {
  label: string;
  value: number;
};

export type SelectOptionString = {
  label: string;
  value: string;
};

export type SelectOptionList = SelectOptionInt[] | SelectOptionString[];

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  className?: string;
  label?: string;
  ariaLabel?: string;
  options: SelectOptionList;
}

export function Select<T extends object>({
  className = "w-max bg-stone-300 shadow-sm hover:shadow-md rounded-lg p-2",
  label,
  ariaLabel,
  options,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      className={clsx("outline-none", className)}
      aria-label={ariaLabel ?? label ?? "Select"}
    >
      {label && <Label>{label}</Label>}
      <Button className="outline-none">
        <SelectValue />
        <span aria-hidden="true" className="ml-2">
          ▼
        </span>
      </Button>
      <Popover className="w-max p-3">
        <ListBox className="block py-2 bg-stone-200 shadow-lg rounded-md">
          {options.map((option) => (
            <ListBoxItem
              key={option.value}
              id={option.value}
              className={({
                isHovered,
                isSelected,
                isFocusVisible,
                isFocused,
              }) =>
                clsx(
                  "block outline-none px-2 cursor-pointer",
                  isHovered && "bg-stone-800 text-stone-100"
                )
              }
            >
              {option.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}
