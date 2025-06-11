function ImageGrid() {
  return (
    <div className="flex flex-col gap-[24px]">
      <img
        className="h-[400px] w-[311px] object-cover rounded-md"
        src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
      />
      <div className="flex flex-row gap-[16px] overflow-hidden">
        <img
          className="w-[80px] h-[120px] rounded-md"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        ></img>
        <img
          className="w-[80px] h-[120px] rounded-md"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        ></img>
        <img
          className="w-[80px] h-[120px] rounded-md"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        ></img>
        <img
          className="w-[80px] h-[120px] rounded-md"
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        ></img>
      </div>
    </div>
  );
}

export default ImageGrid;
