import clsx from "clsx";
import React from "react";
import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderProps as AriaSliderProps,
  SliderTrack,
} from "react-aria-components";

export interface SliderProps extends AriaSliderProps {
  className?: string;
}

/**
 * Styled {@link https://react-spectrum.adobe.com/react-aria/Slider.html react-aria slider}
 * @prop className? -- tailwind classes -- use for layout. Will be `w-full` by default.
 * @prop formatOptions - {@link Intl.NumberFormatOptions} number formatting options
 * @prop orientation - set to 'vertical' for a vertical slider
 * @prop isDisabled  - use to disable the input
 * @prop minValue - The slider's minimum value.
 * @prop maxValue - The slider's minimum value.
 * @prop step - The slider step
 * @prop value - Current slider value (controlled)
 * @prop defaultValue - The default value at init (uncontrolled)
 * @event onChange `{value: T} => void` - fired when the value changes.
 * @event onChangeEnd `{value: T} => void` - fired when the slider is released by the user.
 * @returns
 */
export function Slider({ className = "w-full", ...props }: SliderProps) {
  return (
    <AriaSlider className={clsx("flex flex-col", className)} {...props}>
      <div className="flex">
        <Label>Opacity</Label>
        <div className="flex-1" />
        <SliderOutput />
      </div>
      <div className="my-3">
        <div className="w-full h-0 border-solid border-b-2 border-b-stone-200" />
        <SliderTrack className="mx-3">
          <SliderThumb className="bg-red-500 h-6 w-6 rounded-full shadow-md" />
        </SliderTrack>
      </div>
    </AriaSlider>
  );
}
