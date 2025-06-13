function Pricing() {
  return (
    <>
      <div className="flex gap-[8px] items-center">
        <p className="font-medium text-3xl text-neutral-600 mb-[8px]">$76</p>
        <span className="line-through font-medium text-lg text-neutral-400">
          $96
        </span>
      </div>
      <span className="text-sm  text-amber-700 w-[77px] bg-amber-50 px-2.5 py-1 rounded-full border border-solid border-amber-200">
        20% OFF
      </span>
    </>
  );
}

export default Pricing;
