export default function SectionBackground() {
  return (
    <>
      <div
        className="
          pointer-events-none
          absolute
          -left-44
          top-0
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-[#2374B6]/5
          blur-[190px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-14rem]
          top-1/3
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-[#113358]/5
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-14rem]
          left-1/2
          h-[34rem]
          w-[34rem]
          -translate-x-1/2
          rounded-full
          bg-[#67B7F7]/5
          blur-[190px]
        "
      />
    </>
  );
}
