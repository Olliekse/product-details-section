function ColorPicker() {
  return (
    <div className="pb-[32px]">
      <p className="text-sm text-neutral-500 pb-[16px]">Available Colors</p>
      <div className="flex flex-row gap-[34px]">
        <div className="w-[38px] h-[38px] rounded-full bg-blue-500"></div>
        <div className="w-[38px] h-[38px] rounded-full bg-red-500"></div>
      </div>
    </div>
  );
}

export default ColorPicker;
