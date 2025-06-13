function ImageGrid() {
  return (
    <div className="flex flex-col gap-[24px] ">
      <img
        className="min-[375px]:h-[400px] min-[375px]:w-[311px] object-cover rounded-md min-[768px]:w-[704px] min-[768px]:h-[800px]  min-[1440px]:h-[800px]"
        src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
      />
      <div className="flex flex-row gap-[16px] overflow-hidden">
        <img
          className="object-cover min-[375px]:h-[120px] rounded-md min-[768px]:h-[190px] flex-shrink-0 min-[768px]:w-[188px] min-[375px]:w-[80px] min-[1440px]:h-[190px] min-[1440px]:w-[160px]"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        />
        <img
          className="object-cover min-[375px]:h-[120px] rounded-md min-[768px]:h-[190px] flex-shrink-0 min-[768px]:w-[188px] min-[375px]:w-[80px] min-[1440px]:h-[190px] min-[1440px]:w-[160px]"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        />
        <img
          className="object-cover min-[375px]:h-[120px] rounded-md min-[768px]:h-[190px] flex-shrink-0 min-[768px]:w-[188px] min-[375px]:w-[80px] min-[1440px]:h-[190px] min-[1440px]:w-[160px]"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        />
        <img
          className="object-cover min-[375px]:h-[120px] rounded-md min-[768px]:h-[190px] flex-shrink-0 min-[768px]:w-[188px] min-[375px]:w-[80px] min-[1440px]:h-[190px] min-[1440px]:w-[160px]"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        />
      </div>
    </div>
  );
}

export default ImageGrid;
